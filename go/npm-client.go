
package main

import (
	"fmt"
)

func packageUrl(packageName string) string {
	return fmt.Sprintf("https://registry.npmjs.org/%s", packageName)
}

func listTransitiveDependencies(packageName string) ([]string, error) {
	// Implementation would go here
	return []string{}, nil
}
