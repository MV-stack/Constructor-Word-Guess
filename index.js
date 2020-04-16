var Word = require("./Word");
var inquirer = require("inquirer");
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var guessWordArray = ["Jurassic Park", "The Godfather", "The Wizard of Oz", "Citizen Kane", "The Shawshank Redemption", "Pulp Fiction", "Casablanca", "Star Wars", "Back to the Future", "Forest Gump", "Good Fellas"];

var randomizer = Math.floor(Math.random() * guessWordArray.length);
