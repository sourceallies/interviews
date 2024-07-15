package main

import (
	"fmt"
	"os"
)

// Run with "go run . axios" or "make run"
func main() {
	if len(os.Args) < 2 {
		fmt.Println("Usage: npm-client <package-name>")
		return
	}

	packageName := os.Args[1]
	dependencies, err := listTransitiveDependencies(packageName)
	if err != nil {
		fmt.Println("Error fetching dependencies:", err)
		return
	}

	fmt.Printf("Transitive dependencies of: %s:\n", packageName)
	for _, dep := range dependencies {
		fmt.Printf("  - %s\n", dep)
	}
}
