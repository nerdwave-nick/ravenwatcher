package main

import (
	"log/slog"
	"os/signal"
	"syscall"

	"github.com/nerdwave-nick/ravenwatcher/cmd"
	"github.com/nerdwave-nick/ravenwatcher/internal/logging"
	"golang.org/x/net/context"
)

func main() {
	slog.SetDefault(slog.New(logging.GetLogger()))
	ctx, cancel := signal.NotifyContext(context.Background(), syscall.SIGINT, syscall.SIGTERM)
	defer cancel()
	cmd.Execute(ctx)
}
