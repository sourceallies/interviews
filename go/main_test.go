package main

import "testing"

func TestSayHello(t *testing.T) {
	if SayHello("world") != "Hello world!" {
		t.Fatalf("Expected Hello world!, got=%s", SayHello("world"))
	}
}
