package com.sourceallies.interview;

import static org.junit.jupiter.api.Assertions.assertEquals;
import org.junit.jupiter.api.Test;


public class WordlModelTests {

    @Test
    void test1Incorrect() {
        WordlModel game = new WordlModel("stack");
        String response = game.attempt("steak");
        assertEquals("st*!k", response);
    }

    @Test
    void test1Correct() {
        WordlModel game = new WordlModel("stack");
        String response = game.attempt("stack");
        String expected = "Congratulations! That was correct!";
        assertEquals(expected, response);
    }

    @Test
    void testDuplicates() {
        WordlModel game = new WordlModel("ssoly");
        String response = game.attempt("abssu");
        assertEquals("**!!*", response);
    }

    @Test
    void fail() {
        WordlModel game = new WordlModel("stack");
        game.attempt("steak");
        game.attempt("steak");
        game.attempt("steak");
        game.attempt("steak");

        String response = game.attempt("steak");
        String expected = "Game over! The correct word was: stack";
        assertEquals(expected, response);
    }

        @Test
    void failMoreAttempts() {
        WordlModel game = new WordlModel("stack");
        game.attempt("steak");
        game.attempt("steak");
        game.attempt("steak");
        game.attempt("steak");
        game.attempt("steak");

        String response = game.attempt("steak");
        String expected = "Game over! The correct word was: stack. Reset the game to try again!";
        assertEquals(expected, response);
    }

        @Test
    void testInvalidWordLength() {
        WordlModel game = new WordlModel("stack");
        String response = game.attempt("steakkk");
        String expected = "Input word must be " + 5 + " characters long!";
        assertEquals(expected, response);
    }
    
}
