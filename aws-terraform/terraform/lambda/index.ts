export const handler = async (event) => {
  // Your Lambda function logic here

  console.log(JSON.stringify(event));
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
    message: "Hello from Lambda!"
    // Add more data as needed
  })
};

return response;
};

export const guess = (word:string): string => {
    const wordOfTheDay = 'words';

    // validators
    if(word.length != 5) {
        return "error";
    }
    // TODO: dictionary test?

    const result: string = word
    .toLowerCase()
    .split("")
    .map((char, i) => verifyLetter(char, wordOfTheDay, i))
    .join("");
  return result;
};

// "tranform the guess to the output verion"
const verifyLetter = (guess:string, wordOfTheDay:string, position: number): string => {
    if (!wordOfTheDay.includes(guess)) {
        return '_';
    } else if (wordOfTheDay.charAt(position) != guess) {
        return guess.toLowerCase()
    } else {
        return guess.toUpperCase();
    }
}