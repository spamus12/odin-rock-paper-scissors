// rock-paper-scissors.js


// Array of choices
const choices = ["rock", "paper", "scissors"];

// Scoring
let computerScore = 0;
let humanScore = 0;

// Choose a random integer from 0 to 2 and return the choice from the array
let getComputerChoice = () => { return choices[ Math.floor( Math.random() * 3 ) ] };

// Get the player to choose an option
// The choices are case-insensitive
let getHumanChoice = () => {
    let choice = prompt("Rock, paper, or scissors?");
    return choice.toLowerCase();
};

console.log(getHumanChoice());
