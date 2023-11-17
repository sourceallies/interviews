package main

import (
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestSayHello(t *testing.T) {
	result := SayHello("world!")
	assert.Equal(t, "Hello world!", result)
}
