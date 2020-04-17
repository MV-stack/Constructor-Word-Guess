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
//console.log(randomMovie);
//console.log(randomizer);
//console.log(computerChoice);



var response = computerChoice.log()
//console.log(response)

function wordGuess() {
    if(newWord) {
        randomizer;
        console.log(randomizer);
        randomMovie;
        console.log(randomMovie);
    }
};
//console.log(wordGuess);
// show the console.log with all the _
// call computerChoice.log
// start inquirer, ask for a letter
// for every letter you call the computerChoice.guess(userInput)
// then verify if the letter was correct, if there is more attempts, or if the word is guessed

function ask(){

  inquirer
  .prompt({
    name: "letter",
    type: "input",
    message: "Guess the letter"
    
  
  })
  .then(function(answer) {
    oldResponse = response
    computerChoice.guess(answer.letter)
    //console.log(computerChoice)
    response = computerChoice.log()
    //console.log(response)

    if (oldResponse === response){
      maxGuesses--
      console.log("Wrong! You have " + maxGuesses + " guesses left!\n")

      
      if (maxGuesses===0){
        console.log("You lost! :(");
        process.exit()  // call a menu asking if want to play again if Y get other word and clean the variables 
      }
      // wrong / decrease attemps and verify if you have more attemps
    }
    else{
      console.log("Correct!")
      if(!response.includes("_")){
    
      console.log("You Win!");
      process.exit()
      }
      // verify if response contain any _  if yes then keep going if not then the user WON
    }

    // we need to do the validations 

    ask()

})
}

ask()