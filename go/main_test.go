package main

import (
	"testing"
	"github.com/stretchr/testify/assert"
)

func TestListTransitiveDependencies(t *testing.T) {
	testCase := struct {
			packageName    string
			expectedResult []string
			expectError    bool
	}{
			packageName:    "axios",
			expectedResult: []string{},
			expectError:    false,
	}

	result, err := listTransitiveDependencies(testCase.packageName)

	assert.Equal(t, testCase.expectedResult, result, "Expected result does not match the actual result.")
	assert.NoError(t, err, "Expected no error but got one.")
}
