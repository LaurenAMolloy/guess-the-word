//Global Variables

const guessedLettersElement = document.querySelector(".guessed-letters");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

word = "magnolia";
//This array will hold the player guesses
const guessedLetters = [];

//Write a function to Add Place Holders for Each Letter
//Hint: Copy and paste the ● symbol into your code!
//” Hint: You’ll need to use an array and then join it back to a string using the .join("") method.

const placeHolder = function (word) {
  //The empty array will be used to store the number of letters in each word passed to the function
  const placeholderLetters = [];
  // Loop through each letter in the word
  for (const letter of word) {
    console.log(letter);
    // Add a placeholder (●) for each letter to the placeholderLetters array
    placeholderLetters.push("●");
  }
  wordInProgress.innerText = placeholderLetters.join("");
};

placeHolder(word);

//write an event listener for when the player clicks the guess button
guessButton.addEventListener("click", function (e) {
  e.preventDefault();
  //empty the text of the message element
  message.innerText = "";
  //create a variable to capture the value of the input
  const guess = letterInput.value;
  //make sure it is a valid guess
  const goodGuess = validatePlayerInput(guess);

  //This is the bit I do not get....

  if (goodGuess) {
    makeGuess(guess)
  }
  letterInput.value = "";
});

const validatePlayerInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  //check if the the input is empty
  if (input.length === 0) {
    message.innerText = "Hey, enter a letter!";
  } else if (input.length > 1) {
    //check if only one letter has been entered
    message.innerText = "Hey, only one letter is allowed";
  } else if (!input.match(acceptedLetter)) {
    message.innerText = "Hey, enter a letter from a-z!";
  } else {
  return input;
}
};

//Create a Function to Capture Input and accepts a letter as the parameter
const makeGuess = function (guess) {
  guess = guess.toUpperCase();
  if (guessedLetters.includes(guess)) {
    message.innerText = "You already guessed that letter, try again";
  } else {
    guessedLetters.push(guess);
    console.log(guessedLetters);
    showGuessedLetters();
    updateWordInProgress(guessedLetters);
  }
};

//Create a Function to Show the Guessed Letters

const showGuessedLetters = function () {
    //clear the list first
    guessedLettersElement.innerHTML = "";
    //I did not know this...
    // loop over the letters
    for (const letter of guessedLetters) {
        //create list element
        const li = document.createElement("li");
        //add the letter to the html element
        li.innerText = letter;
        //append guessed letters to the list
        guessedLettersElement.append(li);
    }
};

//Create a Function to Update the Word in Progress

const updateWordInProgress = function (guessedLetters) {
const wordUpper = word.toUpperCase();
const wordArray = wordUpper.split("");
const revealWord = [];

for (const letter of wordArray) {
if (guessedLetters.includes(letter)) {
revealWord.push(letter.toUpperCase());
} else {
  revealWord.push("●");
}
}
console.log(revealWord);
wordInProgress.innerText = revealWord.join("");
};

//Create a Function to Check If the Player Won

const checkIfWon = function () {
  if (word.toUpperCase() === wordInProgress.innerText){
    message.classList.add("win");
    message.innerHTML=<p class="highlight">You guessed correct the word! Congrats!</p>
  }
}