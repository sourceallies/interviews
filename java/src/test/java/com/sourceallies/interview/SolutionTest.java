package com.sourceallies.interview;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class SolutionTest {

    @Test
    void shouldPrintHelloWorld() {
        Solution solution = new Solution();
        String name = "World";

        assertEquals("Hello World", solution.greeting(name));
    }

}
