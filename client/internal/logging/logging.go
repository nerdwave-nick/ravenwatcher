package logging

import (
	"log/slog"

	"github.com/mattn/go-colorable"
	"github.com/nerdwave-nick/rainbow"
)

func GetLogger() slog.Handler {
	return rainbow.New(colorable.NewColorableStdout(), nil)
}
