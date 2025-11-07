// rock-paper-scissors.js
const choices = ["rock", "paper", "scissors"];


// Choose a random integer from 0 to 2 and return the choice from the array
let getComputerChoice = () => { return choices[ Math.floor( Math.random() * 3 ) ] };

// 
