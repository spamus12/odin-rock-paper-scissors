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

// Play a round of rock-paper-scissors
function playRound(computerChoice, humanChoice) {

    // Functions for wins, losses, and ties
    let win = () => {
        console.log("You win! " + humanChoice + " beats " + computerChoice + "!");
        humanScore++;
    };

    let lose = () => {
        console.log("You lose! " + computerChoice + " beats " + humanChoice + "!");
        computerScore++;
    };

    let tie = () => {
        console.log("It's a tie!");
        humanScore++;
        computerScore++;
    }

    // Go through every combination and determine the winner
    switch (humanChoice) {

        case ("rock"):

            switch (computerChoice) {

                case ("rock"):
                    tie();
                    break;

                case ("paper"):
                    lose();
                    break;

                case ("scissors"):
                    win();
                    break;

            }
            break;

        case ("paper"):

            switch (computerChoice) {

                case ("rock"):
                    win();
                    break;

                case ("paper"):
                    tie();
                    break;

                case ("scissors"):
                    lose();
                    break;

            }
            break;

        case ("scissors"):

            switch (computerChoice) {

                case ("rock"):
                    lose();
                    break;

                case ("paper"):
                    win();
                    break;

                case ("scissors"):
                    tie();
                    break;

            }
            break;
    }

}

let computer = getComputerChoice();
let human = getHumanChoice();
playRound(computer, human);
console.log("Computer score: " + computerScore);
console.log("Player score: " + humanScore);
