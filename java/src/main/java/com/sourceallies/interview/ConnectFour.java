package com.sourceallies.interview;

public class ConnectFour {
    
    public enum Tile {
        RED_PLAYER,
        BLUE_PLAYER,
        EMPTY
    };

    public enum GameState {
        RED_TURN,
        BLUE_TURN,
        RED_WIN,
        BLUE_WIN
    };

    /*
     * 6 tall
     * 7 wide
     */
    public Tile[][] board;
    private boolean isRedTurn = false;

    public ConnectFour(){
        // Initialize the board to empty
        board = new Tile[6][7];
        for(int row = 0; row < 6; row++){
            for(int col = 0; col < 7; col++){
                board[row][col] = Tile.EMPTY;
            }
        }
    }

    /**
     * @return Current game state
     */
    public GameState getGameState() {
        // Check if RED has won
        boolean redWins = checkWin(Tile.RED_PLAYER);
        
        // Check if BLUE has won
        boolean blueWins = checkWin(Tile.BLUE_PLAYER);

        if (redWins) {
            return GameState.RED_WIN;
        } else if (blueWins) {
            return GameState.BLUE_WIN;
        } else if (isBoardFull()) {  // If the board is full and no one has won, it's a draw
            // Since there are only two possible states for game end that aren't win states,
            // we can choose to treat this as either player's turn or decide on another state.
            return GameState.RED_TURN;  // This could be adjusted based on your needs
        } else {
            return isRedTurn ? GameState.BLUE_TURN : GameState.RED_TURN;
        }
    }

    /**
     * Checks if the given player has won by having four in a row vertically, horizontally, or diagonally.
     */
    private boolean checkWin(Tile player) {
        int consecutive = 0;

        // Check vertical (downwards)
        for(int col = 0; col < 7; col++) {
            consecutive = 0;
            for(int row = 5; row >= 2; row--) { 
                if(board[row][col] == player) {
                    consecutive++;
                    if(consecutive == 4) return true;
                } else break;
            }
        }

        // Check horizontal (right)
        for(int row = 0; row < 6; row++) {
            consecutive = 0;
            for(int col = 0; col < 7 - 3 ; col++){ 
                if( board[row][col] == player && 
                    board[row][col+1] == player && 
                    board[row][col+2]==player &&
                    board[row][col+3]==player) {
                    return true;
                }
            }
        }

        // Check diagonal (right and down)
        for(int row = 0; row < 6 -3 ; row++) {
            for(int col=0; col <7-3 ; col++){
                if(board[row][col] == player && board[row+1][col+1]==player && 
                board[row+2][col+2]==player&&board[row+3][col+3]==player) {
                    return true;
                }
            }
        }

        // Check diagonal (left and down)
        for(int row = 0; row <6-3 ;row++) { 
            for(int col=3; col<7 ;col++){ 
                if(board[row][col] == player && board[row+1][col-1]==player &&
                board[row+2][col-2]==player&&board[row+3][col-3]==player) {
                    return true;
                }
            }
        }

        return false; // No win condition met
    }

    public boolean isBoardFull() {
        for(int row = 0; row < 6; row++){
            for(int col = 0; col < 7; col++){
                if(board[row][col] == Tile.EMPTY)
                    return false;
            }
        }

        return true;
    }

    // perform action -> return whether it was valid ?
    public boolean performAction(int column) {
        // Find bottom row for that column
        int row = 0;
        while(row <= 5 && board[row][column] != Tile.EMPTY){
            row++;
        }

        // Ensure not placing outside the board
        if (row > 5) {
          return false;
        }

        board[row][column] = isRedTurn ? Tile.RED_PLAYER : Tile.BLUE_PLAYER;
        isRedTurn = !isRedTurn;
        return true;
    }

    // toString (for board to terminal)
    @Override
    public String toString() {
        StringBuilder out = new StringBuilder();

        for(int row = 5; row >= 0; row--)
        {
            for(int col = 0; col < 7; col++)
            {
                if(board[row][col] == Tile.BLUE_PLAYER)
                {
                    out.append("B");
                    continue;
                }

                if(board[row][col] == Tile.RED_PLAYER)
                {
                    out.append("R");
                    continue;
                }

                if(board[row][col] == Tile.EMPTY)
                {
                    out.append(" ");
                    continue;
                }
            }

            out.append("\n");
        }

        return out.toString();
    }
}
