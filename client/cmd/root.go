package cmd

import (
	"context"
	"errors"
	"fmt"
	"log/slog"
	"net/http"
	"os"
	"strings"
	"time"

	"github.com/nerdwave-nick/ravenwatcher/internal/api"
	"github.com/nerdwave-nick/ravenwatcher/internal/api/health"
	"github.com/nerdwave-nick/ravenwatcher/internal/frontend"
	"github.com/nerdwave-nick/ravenwatcher/internal/ratelimit"
	"github.com/spf13/cobra"
)

type RootOptions struct {
	LogLevel    string
	DBPath      string
	GCInterval  int
	L2CacheTTL  int
	L1CacheTTL  int
	L1CacheSize int
	Port        int
}

func (o *RootOptions) Validate() error {
	concatErr := func(err error, olderr error) error {
		if olderr != nil {
			return fmt.Errorf("%s\n%w", err.Error(), olderr)
		}
		return err
	}
	var err error
	if o.DBPath == "" {
		err = concatErr(fmt.Errorf("db-path can't be empty"), err)
	}
	if o.L2CacheTTL <= 0 {
		err = concatErr(fmt.Errorf("l2-ttl must be greater than 0"), err)
	}
	if o.L1CacheTTL <= 0 {
		err = concatErr(fmt.Errorf("l1-ttlmust be greater than 0"), err)
	}
	if o.L1CacheSize <= 0 {
		err = concatErr(fmt.Errorf("l1-size must be greater than 0"), err)
	}
	if o.GCInterval <= 0 {
		err = concatErr(fmt.Errorf("gc-interval must be greater than 0"), err)
	}
	if o.Port <= 0 {
		err = concatErr(fmt.Errorf("port must be greater than 0"), err)
	}
	return err
}

var rootOpts = &RootOptions{}

func Execute(ctx context.Context) {
	if err := rootCmd.ExecuteContext(ctx); err != nil {
		os.Exit(1)
	}
}

func init() {
	rootCmd.Flags().StringVar(&rootOpts.DBPath, "db-path", ".badger", "The path of the badger db folder. Will be created when it doesn't exist.")
	rootCmd.Flags().IntVar(&rootOpts.GCInterval, "gc-interval", 600, "The garbage collection interval of the badger db in seconds. Needs to be greater than 0.")
	rootCmd.Flags().IntVar(&rootOpts.L2CacheTTL, "l2-ttl", 86400, "The ttl of the larger l2 cache in seconds. Needs to be greater than 0.")
	rootCmd.Flags().IntVar(&rootOpts.L1CacheTTL, "l1-ttl", 7200, "The ttl of the smaller l1 cache in seconds. Needs to be greater than 0.")
	rootCmd.Flags().IntVar(&rootOpts.L1CacheSize, "l1-size", 2000, "The size of the smaller l1 cache in number of items. Needs to be greater than 0.")
	rootCmd.Flags().IntVarP(&rootOpts.Port, "port", "p", 8080, "The port to listen on")
	rootCmd.Flags().StringVarP(&rootOpts.LogLevel, "level", "l", "info", "The log level. Valid levels are debug, info, warn, and error.")
}

var rootCmd = &cobra.Command{
	Use:   "ravenwatcher",
	Short: "ravenwatcher - the tracking and knowledge tool for nuzlockes and soullockes in pokemon",
	Long:  "ravenwatcher - the tracking and knowledge tool for nuzlockes and soullockes in pokemon\n\nProvides a frontend for user interaction and a backend api including persistent K/V database and caching of pokeapi",
	PreRunE: func(cmd *cobra.Command, _ []string) error {
		if err := rootOpts.Validate(); err != nil {
			return fmt.Errorf("incorrect command usage:\n%w", err)
		}
		switch strings.ToLower(rootOpts.LogLevel) {
		case "debug":
			slog.SetLogLoggerLevel(slog.LevelDebug)
		case "info":
			slog.SetLogLoggerLevel(slog.LevelInfo)
		case "warn":
			slog.SetLogLoggerLevel(slog.LevelWarn)
		case "error":
			slog.SetLogLoggerLevel(slog.LevelError)
		default:
			slog.Warn("no/invalid log level provided, setting to info")
			slog.SetLogLoggerLevel(slog.LevelInfo)
		}
		return nil
	},
	Run: func(cmd *cobra.Command, _ []string) {
		err := rootMain(cmd.Context())
		if err != nil {
			os.Exit(1)
		}
	},
}

func stopServerWithTimeout(server *http.Server) error {
	slog.Debug("shutting down server...")
	ctx, cancel := context.WithTimeout(context.Background(), 5*time.Second)
	defer cancel()
	err := server.Shutdown(ctx)
	if err != nil {
		slog.Error("shutting down http server", slog.Any("error", err))
		return err
	}
	return nil
}

func rootMain(parentCtx context.Context) error {
	ctx, cancel := context.WithCancel(parentCtx)
	defer cancel()

	frontend, err := frontend.GetAssetFS()
	if err != nil {
		return err
	}

	globalRateLimit := ratelimit.New(10, 1, 1*time.Minute)
	go globalRateLimit.CleanupVisitors(ctx)

	mainMux := http.NewServeMux()
	mainMux.Handle("/", http.FileServer(http.FS(frontend)))

	Subrouter := func(router *http.ServeMux, sr http.Handler, route string) *http.ServeMux {
		route = strings.TrimSuffix(route, "/")
		router.Handle(route, globalRateLimit.HttpMiddleware(http.StripPrefix(route, sr)))
		router.Handle(route+"/", globalRateLimit.HttpMiddleware(http.StripPrefix(route, sr)))
		return router
	}
	apiMux := http.NewServeMux()

	healthController := health.MakeController()

	apiRouter := api.MakeRouter(
		apiMux,
		[]api.Controller{
			healthController,
		},
	)
	mainMux = Subrouter(mainMux, apiRouter, "/api")
	slog.Debug("router created, proceeding to start backend...")

	server := &http.Server{
		ReadTimeout:  5 * time.Second,
		WriteTimeout: 30 * time.Second,
		Addr:         fmt.Sprintf(":%d", rootOpts.Port),
		Handler:      mainMux,
	}

	go func() {
		defer cancel()
		slog.Info(fmt.Sprintf("server ready to listen on %s...", server.Addr))
		if err := server.ListenAndServe(); err != nil {
			if errors.Is(err, http.ErrServerClosed) {
				return
			}
			slog.Error(fmt.Errorf("error in listen and serve: %w", err).Error())
		}
	}()

	<-ctx.Done()
	return stopServerWithTimeout(server)
}
