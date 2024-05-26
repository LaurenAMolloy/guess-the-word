//Step 1 select elements and place holder
//Global Variables

const guessedLettersElement = document.querySelector(".guessed-letters");
const guessLetterButton = document.querySelector(".guess");
const letterInput =  document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessesElement = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "Magnolia";
//Add a New Global Variable for Player Guesses
const guessedLetters = [];

//Write a Function to Add Placeholders for Each Letter
const placeHolder = function (word) {
    const placeholderLetters = [];
    for (const letter of word) {
        console.log(letter);
        placeholderLetters.push("●");
    }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeHolder(word);

//Add an Event Listener for the Button

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    //empty message paragraph
    message.innerText = "";
    //grab what was entered in the input
    const guess = letterInput.value;
    //make sure it is a single letter
    const goodGuess = validateInput(guess);

    if (goodGuess) {
        // We've got a letter! Let's guess!
        makeGuess(guess);
      }
    letterInput.value = "";
  });
   
//create a function to check players input

const validateInput = function (input) {
    const acceptedLetter = /[a-zA-Z]/;
    if (input.length === 0) {
    message.innerText ="Please enter a letter.";
    } else if (input.length > 1) {
        message.innertext = "Please enter a single letter";
    } else if (!input.match(acceptedLetter)) {
        message.innerText = "Please enter a letter from A to Z.";
    } else {
        return input;
    }
};

//Create a Function to Capture Input

const makeGuess = function (guess) {
    guess = guess.toUpperCase();
    if (guessedLetters.includes(guess)) {
        message.innerText = "You already guessed that letter silly";
    } else {
        guessedLetters.push(guess);
        console.log(guessedLetters);
    }
};
