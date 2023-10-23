let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
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
            case "Rock": return "TIE";
            case "Paper": return "LOSS";
            case "Scissors": return "WIN";
        }
        case "Paper": switch(computerchoice) {
            case "Rock": return "WIN";
            case "Paper": return "TIE";
            case "Scissors": return "LOSS";
        }
        case "Scissors": switch(computerchoice) {
            case "Rock": return "LOSS";
            case "Paper": return "WIN";
            case "Scissors": return "TIE";
        }
        case "None": return "Please choose only one of: 'Rock', 'Paper', or 'Scissors', with no spaces, and no quotes."
    }
}


console.log(playRound(playerChoice,computerChoice));