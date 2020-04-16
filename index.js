var Word = require("./Word");
var inquirer = require("inquirer");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var guessMovieArray = ["Jurassic Park", "The Godfather", "The Wizard of Oz", "Citizen Kane", "The Shawshank Redemption", "Pulp Fiction", "Casablanca", "Star Wars", "Back to the Future", "Forest Gump", "Good Fellas"];

var randomizer = Math.floor(Math.random() * guessMovieArray.length),
randomMovie = guessMovieArray[randomizer], 
computerChoice = new Word(randomMovie),
newWord = false,
incorrectGuesses = [],
correctGuesses = [],
maxGuesses = 10;

function wordGuess() {
    if(newWord) {
        randomizer;
        console.log(randomizer);
        randomMovie;
        console.log(randomMovie);
    }
};
console.log(wordGuess);

