package main

import "testing"

func TestSayHello(t *testing.T) {
	result := SayHello("world!")
	if result != "Hello world!" {
		t.Fatalf("Expected Hello world!, got=%s", result)
	}
}
