package com.sourceallies.interview;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class SolutionTest {
    
    @Test
    void shouldGreetByName() {
        var solution = new Solution();
        assertEquals("Hello, World!", solution.greet("World"));
    }

    
}
