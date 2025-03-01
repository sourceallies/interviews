package com.sourceallies.interview;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

public class SolutionTest {
    
    @Test
    void shouldSayHelloWorld() {
        var solution = new Solution();
        assertEquals("Hello, world!", solution.getGreeting());
    }

    
}
