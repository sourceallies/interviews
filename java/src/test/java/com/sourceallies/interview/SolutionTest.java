package com.sourceallies.interview;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

class SolutionTest {

    @Test
    void shouldPass() {
        Solution solution = new Solution();
        String name = "world";

        assertEquals("Hello "+ name, solution.greeting(name));
    }

    @Test
    void shouldPrintHelloNull() {
        Solution solution = new Solution();
        String name = null;

        assertEquals("Hello", solution.greeting(name));
    }

    @Test
    void shouldPrintHelloUser() {
        Solution solution = new Solution();
        String name = "world";

        assertEquals("Hello User", solution.greeting(name));
    }

}
