package ratelimit

import (
	"context"
	"fmt"
	"log/slog"
	"net"
	"net/http"
	"sync"
	"time"

	"github.com/danielgtaylor/huma/v2"
	"golang.org/x/time/rate"
)

type RateLimiter struct {
	LimitPerSecond rate.Limit
	MaxBurst       int
	visitors       map[string]*visitor
	mu             *sync.RWMutex
}

type visitor struct {
	limiter  *rate.Limiter
	lastSeen time.Time
}

func New(limitPerSecond rate.Limit, maxBurst int, cleanupTime time.Duration) *RateLimiter {
	return &RateLimiter{
		LimitPerSecond: limitPerSecond,
		MaxBurst:       maxBurst,
		visitors:       make(map[string]*visitor),
		mu:             &sync.RWMutex{},
	}
}

func (rl *RateLimiter) getLimiter(ip string) *rate.Limiter {
	// read only so far
	rl.mu.RLock()
	v, exists := rl.visitors[ip]
	rl.mu.RUnlock()

	// here we need to write potentially
	if !exists {
		rl.mu.Lock()
		limiter := rate.NewLimiter(rl.LimitPerSecond, rl.MaxBurst)
		v = &visitor{
			limiter:  limiter,
			lastSeen: time.Now(),
		}
		rl.visitors[ip] = v
		rl.mu.Unlock()
	}

	v.lastSeen = time.Now()
	return v.limiter
}

// Every minute check the map for visitors that haven't been seen for
// more than 3 minutes and delete the entries.
func (rl *RateLimiter) CleanupVisitors(ctx context.Context) {
	for {
		select {
		case <-ctx.Done():
			return
		case <-time.After(1 * time.Minute):

			rl.mu.Lock()
			for ip, v := range rl.visitors {
				if time.Since(v.lastSeen) > 3*time.Minute {
					delete(rl.visitors, ip)
				}
			}
			rl.mu.Unlock()
		}
	}
}

func (rl *RateLimiter) HttpMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("AAAAAAAAAAAAAAAAAAAAA %v\n", r.URL.Path)
		// Get the IP address for the current user.
		ip, _, err := net.SplitHostPort(r.RemoteAddr)
		if err != nil {
			slog.Error("error while splitting host port", slog.Any("err", err))
			http.Error(w, "Internal Server Error", http.StatusInternalServerError)
			return
		}

		limiter := rl.getLimiter(ip)
		if !limiter.Allow() {
			http.Error(w, http.StatusText(429), http.StatusTooManyRequests)
			return
		}

		next.ServeHTTP(w, r)
	})
}

func (rl *RateLimiter) HumaMiddleware(api huma.API) func(huma.Context, func(huma.Context)) {
	return func(ctx huma.Context, next func(huma.Context)) {
		// Get the IP address for the current user.
		ip, _, err := net.SplitHostPort(ctx.RemoteAddr())
		if err != nil {
			slog.Error("error while splitting host port", slog.Any("err", err))
			_ = huma.WriteErr(api, ctx, http.StatusInternalServerError, http.StatusText(http.StatusInternalServerError))
			return
		}

		limiter := rl.getLimiter(ip)
		if !limiter.Allow() {
			err := huma.WriteErr(api, ctx, http.StatusTooManyRequests, http.StatusText(http.StatusTooManyRequests))
			if err != nil {
				slog.Error("error while writing too many requests error", slog.Any("err", err))
				_ = huma.WriteErr(api, ctx, http.StatusInternalServerError, http.StatusText(http.StatusInternalServerError))
			}
			return
		}

		next(ctx)
	}
}
