package com.sourceallies.interview;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Solution {
    
    @GetMapping
    public String getGreeting() {
        return "Hello, world!";
    }
}
