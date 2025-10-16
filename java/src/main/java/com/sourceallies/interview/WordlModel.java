package com.sourceallies.interview;

public class WordlModel {

    private String targetWord;

    private final int lives = 5;

    private int remainingLives;

    private final int wordLength = 5;


    public WordlModel(String targetWord){
        this.targetWord = targetWord;
        this.remainingLives = lives;
    }

    public String attempt(String inputWord){

        if(remainingLives <= 0)
            return "Game over! The correct word was: " + targetWord + ". Reset the game to try again!";

        // Return error message if invalid length
        if(inputWord.length() != targetWord.length())
            return "Input word must be " + wordLength + " characters long!";

        if(inputWord.equals(targetWord))
            return "Congratulations! That was correct!";

        // Traverse each string and check if each character matches per index
        StringBuilder builder = new StringBuilder();
        for(int i = 0; i < wordLength; i++){
            Character targetChar = targetWord.charAt(i);
            Character inputChar = inputWord.charAt(i);

            if(targetChar == inputChar){
                builder.append(targetChar);
            }
            else if(targetWord.indexOf(inputChar) > -1){
                builder.append("!");
            }
            else{
                builder.append('*');
            }
        }

        remainingLives--;
        if(remainingLives == 0)
            return "Game over! The correct word was: " + targetWord;

        return builder.toString();
    }

    public String getTargetWord(){
        return targetWord;
    }
    
}
