// rock-paper-scissors.js


// Array of choices
const choices = ["rock", "paper", "scissors"];

// Scores
let computerScore = 0;
let humanScore = 0;

// Choose a random integer from 0 to 2 and return the choice from the array
let getComputerChoice = () => { return choices[ Math.floor( Math.random() * 3 ) ] };

// Play a round of rock-paper-scissors
let gameOver = false;
function playRound(computerChoice, humanChoice) {

    // Result element
    const resultElement = document.querySelector("p.result");

    // Functions for wins, losses, and ties
    let win = () => {
        resultElement.textContent = "You win! " + humanChoice + " beats " + computerChoice + "!";
        humanScore++;
    };

    let lose = () => {
        resultElement.textContent = "You lose! " + computerChoice + " beats " + humanChoice + "!";
        computerScore++;
    };

    let tie = () => {
        resultElement.textContent = "It's a tie!";
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

// Display scores
let updateScores = () => {
    const humanScoreDisplay = document.querySelector("p.h-score");
    const computerScoreDisplay = document.querySelector("p.c-score");

    humanScoreDisplay.textContent = "Your score: " + humanScore;
    computerScoreDisplay.textContent = "Computer score: " + computerScore;

    // If a score is at least 5, then they are the winner
    const winnerDisplay = document.querySelector("p.winner");
    if (humanScore >= 5) {
        gameOver = true;
        winnerDisplay.textContent = "You win!";
    } else if (computerScore >= 5) {
        gameOver = true;
        winnerDisplay.textContent = "You lose!";
    }
};

// Define button behaviors
let rockButton = () => {
    playRound(getComputerChoice(), "rock");
    updateScores();
};

let paperButton = () => {
    playRound(getComputerChoice(), "paper");
    updateScores();
};

let scissorsButton = () => {
    playRound(getComputerChoice(), "scissors");
    updateScores();
};

// Assign button behaviors
const rButton = document.querySelector("button.rock");
rButton.addEventListener("click", rockButton);

const pButton = document.querySelector("button.paper");
pButton.addEventListener("click", paperButton);

const sButton = document.querySelector("button.scissors");
sButton.addEventListener("click", scissorsButton);

