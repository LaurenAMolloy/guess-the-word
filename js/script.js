//Step 1 select elements and place holder
//Global Variables

const guessedLetters = document.querySelector(".guessed-letters");
const buttonGuess = document.querySelector(".guess");
const inputGuess =  document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuesses = document.querySelector(".remaining");
const remainingGuessesSpan = document.querySelector(".remaining span");
const playerMessage = document.querySelector(".message");
const buttonPlayAgain = document.querySelector(".play-again");

const word = "Lauren";

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

buttonGuess.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = inputGuess.value;
    console.log(guess);
    inputGuess = "";
});
