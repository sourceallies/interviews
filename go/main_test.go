package main

import (
	"testing"
	"github.com/stretchr/testify/assert"
)

func TestGreet(t *testing.T) {
	result := Greet("World")
	assert.Equal(t, "Hello, World!", result)
}
