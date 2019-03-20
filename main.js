// GLOBAL VARIABLES (accesable by all functions)
//- - - - - - - -  -- -  - - - - - - - - - - - - - - - - - -
// Array of Word Options (all lowercase)
const wordsList = ["coco", "beauty and the beast", "frozen"];

// Solutions will held here
let choseWord = "";


// This will break the solutions into individual letters to be stored in an array.
var lettersInChosenWord = [];

//This will be the number of blanks we show based on the solution
var numBlanks = 0;

// Holds a mix of blank and solved letters (ex: a_p_le)
var blankAndSuccesses = [];

// Holds all of the wrong guesses
var wrongGuesses = [];

// Game counters 
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 9;


// FUNCTIONS
//- - - - - - - - - - - - - - -  - - - - - - - -  

/* It's how well start and restart the game. It's not being run here. It's just being made for future use. */
function startGame() {
    // Starts over the guesses al specified number
    numGuesses = 10;

    // Solution  is chosen randomly from wordList
    choseWord = wordsList[Math.floor(Math.random() * wordsList.length)];

    // The word is broken into individual letters
    lettersInChosenWord = choseWord.split("");

    //We count the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    // We print the solution in the console (for testing)
    console.log(choseWord);

    //CRITICAL LINE - Here we reset the guess and success array at each round
    blankAndSuccesses = [];

    //CRITICAL LINE - Here we reset the wrong guessesfrom the previous round
    wrongGuesses = [];

    // Fill out the blanksAndSuccesses list with appropiate number of blanks,
    // which is based on the number of letter in solution
    for (var i = 0; i < numBlanks; i++){
        blankAndSuccesses.push("_");
    }

        // Print the initial blanks in console.
        console.log (blankAndSuccesses);

        //Reprints the guessleft to 9
        document.getElementById("guesses-left").innerHTML = numGuesses;

        // Prints the blanks at the begining of each round in the Html
        document.getElementById("word-blank").innerHTML = blankAndSuccesses.join(" ");

        // Clears the wrong guesses from thr previous round
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
        
    
}