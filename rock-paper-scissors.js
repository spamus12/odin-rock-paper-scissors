// rock-paper-scissors.js


// Array of choices
const choices = ["rock", "paper", "scissors"];

// Scores
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

// Play 5 rounds of rock-paper-scissors
function playGame() {

    // Reset scores
    computerScore = 0;
    humanScore = 0;

    // Loop 5 times
    for (let k = 0; k < 5; k++) {

        // Get choices
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        // Play the round
        playRound(computerChoice, humanChoice);

    }

    // Display scores
    console.log("Computer score: " + computerScore);
    console.log("Your score: " + humanScore);

    // Say who won
    if (computerScore > humanScore) console.log("You lose!");
    else if (computerScore < humanScore) console.log("You win!");
    else console.log("It's a tie!");

}

playGame();
