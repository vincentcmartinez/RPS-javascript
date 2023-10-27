let playerChoice;
let playerScore = 0;
let computerScore = 0;
let roundNumber = 1;
const playerScoreVisual = document.querySelector('#playerScoreVisual');
const computerScoreVisual = document.querySelector('#computerScoreVisual');

const roundNumberVisual = document.querySelector('#roundNumVisual');
const body = document.querySelector("body");

function getComputerChoice() {
    let num = Math.floor(Math.random() * (4 - 1) + 1);
    switch(num) {
        case 1: return "Rock";
        case 2: return "Paper";
        case 3: return "Scissors";
    }
}

function getPlayerChoice() {
    let input = prompt("Rock, Paper, or Scissors?").toUpperCase();

    switch(input) {
        case "ROCK": return "Rock";
        case "PAPER": return "Paper";
        case "SCISSORS": return "Scissors";
        default: return "None";
    }
}

function playRound(playerchoice, computerchoice) {
    switch (playerchoice) {
        case "Rock": switch(computerchoice) {
            case "Rock": return "TIED";
            case "Paper": return "LOST";
            case "Scissors": return "WON";
        }
        case "Paper": switch(computerchoice) {
            case "Rock": return "WON";
            case "Paper": return "TIED";
            case "Scissors": return "LOST";
        }
        case "Scissors": switch(computerchoice) {
            case "Rock": return "LOST";
            case "Paper": return "WON";
            case "Scissors": return "TIED";
        }
        case "None": return "Please choose only one of: 'Rock', 'Paper', or 'Scissors', with no spaces, and no quotes."
    }
}
const choices = document.querySelector(".choices");
choices.addEventListener("click", (event) => {
    if(event.target.tagName === "BUTTON") {
        switch (event.target.id) {
            case "Rock": playerchoice= "Rock";
            case "Paper": playerchoice= "Paper";
            case "Scissors": playerchoice= "Scissors";
        }
        let result = playRound(playerchoice,getComputerChoice());
        updateStuff(result);
    }
});

function updateStuff(result) {
    roundNumber++;
    playerScoreVisual.textContent = `Player score: ${playerScore}`;
    computerScoreVisual.textContent = `Computer score: ${computerScore}`;
    roundNumberVisual.textContent = `Round ${roundNumber}`;
    if(roundNumber === 5) {
        if(playerScore>computerScore) {
            resultVisual.textContent = "You WON! Press a button to play again."
            playerScoreVisual.textContent = `Player score: ${playerScore}`;
        }
        else if(playerScore<computerScore) {
            resultVisual.textContent = "You LOSE! Press a button to play again."
            computerScoreVisual.textContent = `Computer score: ${computerScore}`;
        }
        else {
            resultVisual.textContent = "You TIED! Press a button to play again."
        }

        roundNumber = 1;
        playerScore = 0;
        computerScore = 0;
        return;
    }
    
    switch(result) {
        case "WON": {
            playerScore++;
            playerScoreVisual.textContent = `Player score: ${playerScore}`;
            break;
        }
        case "LOST": {
            computerScore++; 
            computerScoreVisual.textContent = `Computer score: ${computerScore}`;
            break;
        }
    }
    resultVisual.textContent = `You ${result} round ${roundNumber -1}`;
}