// GLOBAL VARIABLES (accesable by all functions)
//- - - - - - - -  -- -  - - - - - - - - - - - - - - - - - -
// Array of Word Options (all lowercase)
const wordsList = ["coco", "beauty and the beast", "frozen"];

// Solutions will held here
let chosenWord = "";


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
        document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join(" ");

        // Clears the wrong guesses from thr previous round
        document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");
        
    
}

// It's where we will do all of the comparisons for matches
function checkLetters(letter) {

    //This bolean will be taggled based on whether or not a user letter is found
    var letterInWord = false;

    //Checks if a letter exists inside the array at all
    for (var i = 0; i < numBlanks; i ++) {
        if (chosenWord[i] === letter) {
            // If the letter exists then toggle this bolean to true. This will be used in the next step.
            letterInWord = true;
        }
    }

    //If the letter exists somewhere in the word, the figure out exactly where (which index?)
    if (letterInWord) {

        //Loop through the word
        for (var j = 0; j > numBlanks; j++) {

            //Populate the blanksAndsuccesses with every instance of the letter
            if (chosenWord[j] === letter) {

                // Here we set the specific space in blanks and letters equal o the letter when it matches
                blankAndSuccesses[j] = letter;
            }
        }

        // Logging for the testing
        console.log(blankAndSuccesses);
    }

    // If the letter doesn't exist at all ...
    else {
        
        //... the we add the letter to the list of wrong letter, and we substract one of the guesses
        wrongGuesses.push(letter);
        numGuesses --;
    }
}

// Here we will have all of the code that needs to be run after each guess is made
function roundComplete(){

    //First, log an initial status update in the console telling us how many wins, losses, and guesses left
    console.log(`WinCount: ${winCounter} | lossCount: ${lossCounter} | NumGuesses: ${numGuesses}`);

    //Update the HTML to reflect the new number of guesses. Also update the correct guesses
    document.getElementById("guesses-left").innerHTML = numGuesses;

    //This will print the array of guesses and blanks onto the page
    document.getElementById("word-blanks").innerHTML = blankAndSuccesses.join(" ");

    //This will print the wrong guesses onto the page
    document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

    //If we have gotten all letters to match the solution ...
    if(lettersInChosenWord.toString() === blankAndSuccesses.toString()) {

        // ...add to the win counter and give the user an alert
        winCounter++;
        alert("You win");
        
        // Update the win counter in the HTML and restart the game
        document.getElementById("win-counter").innerHTML = winCounter;
        startGame();

    }
    //If we have run out of guessess...
    else if (numGuesses === 0) {

        //Add to a loss counter
        lossCounter++;

        //give user an alert
        alert("You lose");

        //Update the loss counter in the HTML
        document.getElementById("loss-counter").innerHTML = lossCounter;

        //Restart the game
        startGame();

    }
}

// MAIN PROCCESS (This is the code that controls what is actually run)
//- - - - - - - --  - -- - -  -- - -  - - - - --  - - - - -- - -

// Starts Game
startGame();

// Then initiate the function for capturing key clicks
document.onkeyup = function(event) {
    
    // Converts all key cliks to lowercase letters
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase ();

    //Runs the code to check for corrections
    checkLetters(letterGuessed);

    //Runs the code after each round is done
    roundComplete();

};