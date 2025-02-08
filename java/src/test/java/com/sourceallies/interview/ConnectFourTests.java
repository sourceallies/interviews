package com.sourceallies.interview;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

import org.junit.jupiter.api.Test;

import com.sourceallies.interview.ConnectFour.GameState;
import com.sourceallies.interview.ConnectFour.Tile;

public class ConnectFourTests {

    @Test
    void shouldInitializeToEmptyBoard() {
        var connectFour = new ConnectFour();

        for (int y = 0; y < 6; y++) {
            for (int x = 0; x < 7; x++) {
                assertEquals(Tile.EMPTY, connectFour.board[y][x]);
            }
        }
    }

    @Test
    void shouldReturnInitialGamestate() {
        var connectFour = new ConnectFour();

        var result = connectFour.getGameState();

        assertTrue(result == GameState.RED_TURN || result == GameState.RED_TURN);
    }

    @Test
    void shouldPlaceCheckerCorrectlyGivenCurrentPlayerIsBlue() {
        var connectFour = new ConnectFour();

        // 0 indexed, 5 means 4th column over
        connectFour.performAction(5);

        for (int col = 0; col < 7; col++) {
            for (int row = 0; row < 6; row++) {
                if (col == 5 && row == 0) {
                    assertEquals(Tile.BLUE_PLAYER, connectFour.board[row][col]);
                    break;
                }

                assertEquals(Tile.EMPTY, connectFour.board[row][col]);
            }
        }
    }

    @Test
    void shouldStackCheckersWhenMultiplePlacedInSameColumnAndShouldAlternatePlayer() {
        var connectFour = new ConnectFour();

        for (int i = 0; i < 3; i++) {
            connectFour.performAction(5);
        }

        for (int col = 0; col < 7; col++) {
            for (int row = 0; row < 6; row++) {
                if (col == 5 && (row == 0)) {
                    assertEquals(Tile.BLUE_PLAYER, connectFour.board[row][col]);
                    continue;
                }

                if (col == 5 && (row == 1)) {
                    assertEquals(Tile.RED_PLAYER, connectFour.board[row][col]);
                    continue;
                }

                if (col == 5 && (row == 2)) {
                    assertEquals(Tile.BLUE_PLAYER, connectFour.board[row][col]);
                    continue;
                }

                assertEquals(Tile.EMPTY, connectFour.board[row][col]);
            }
        }
    }

    @Test
    void shouldReturnFalseWhenTryingToPlaceInFullColumn() {
        var connectFour = new ConnectFour();

        // place 6 checkers in
        for (int i = 0; i < 6; i++) {
            assertTrue(connectFour.performAction(5));
        }

        // try to place another
        assertFalse(connectFour.performAction(5));
    }

    @Test
    void shouldReturnCorrectToString() {
        var connectFour = new ConnectFour();

        // place 6 checkers in col 5
        for (int i = 0; i < 6; i++) {
            connectFour.performAction(5);
        }

        // place 6 checkers in col 3
        for (int i = 0; i < 6; i++) {
            connectFour.performAction(3);
        }

        // place 3 checkers in col 1
        for (int i = 0; i < 3; i++) {
            connectFour.performAction(1);
        }

        var result = connectFour.toString();
        var expected =  "   R R \n" +
                        "   B B \n" +
                        "   R R \n" +
                        " B B B \n" +
                        " R R R \n" +
                        " B B B \n";

        assertEquals(expected, result);
    }

    @Test
    void testBlueWinsHorizontal() {
        ConnectFour connectFour = new ConnectFour();
        
        // Perform a sequence of moves to set up a horizontal line for blue.
        connectFour.performAction(0); // Blue at (5,0)
        connectFour.performAction(4); // Red at (5,4)
        connectFour.performAction(1); // Blue at (5,1)
        connectFour.performAction(5); // Red at (5,5)
        connectFour.performAction(2); // Blue at (5,2)
        connectFour.performAction(6); // Red at (5,6)
        
        // The next move by blue will create four in a row.
        connectFour.performAction(3); // Blue at (5,3)
        
        var result = connectFour.getGameState();

        assertTrue(result == GameState.BLUE_WIN);
    }
}
