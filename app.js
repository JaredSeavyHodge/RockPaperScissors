let computerScore = 0;
let playerScore = 0;
let playerSelector = document.getElementById("player-score");
let computerSelector = document.getElementById("computer-score");
let resultSelector = document.getElementById("game-result");
let matchSelector = document.getElementById("match-result");

let buttons = document.querySelectorAll("button");
for (let button of buttons) {
    button.addEventListener("click",() => {game(button.id)});
}

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) { return "Draw!"}
    if (playerSelection === "rock") {
        result = computerSelection === "scissors" ? "You Won!" : "You Lost";
    }
    if (playerSelection === "scissors") {
        result = computerSelection === "paper" ? "You Won!" : "You Lost";
    }
    if (playerSelection === "paper") {
        result = computerSelection === "rock" ? "You Won!" : "You Lost";
    }
    return result;
}

function game(playerSelection) {

    const computerSelection = getComputerChoice();
    console.log(playerSelection + " VS " + computerSelection);
    let result = playRound(playerSelection, computerSelection);

    switch (result) {
        case "You Won!":
            console.log("Win");
            playerScore++;
            playerSelector.innerHTML = playerScore;
            matchSelector.innerHTML = "You won that one.";
            break;
        case "You Lost":
            console.log("Loss");
            computerScore++;
            computerSelector.innerHTML = computerScore;
            matchSelector.innerHTML = "Too bad.";
            break;
        case "Draw!":
            console.log("Draw");
            matchSelector.innerHTML = "Draw.";
            break;
    }
    if (!(computerScore >= 5 || playerScore >=5)) {
        console.log("Keep Playing");
        return;
    }
    if (computerScore === playerScore) {
        console.log("It was a draw. Both players scored " + playerScore);
        resultSelector.innerHTML = "Draw";
    }
    else if (playerScore > computerScore) {
        console.log("You Won! The score was " + playerScore + " to " + computerScore);
        resultSelector.innerHTML = "You Won!";
    }
    else {
        console.log("You Lost! The score was " + playerScore + " to " + computerScore);
        resultSelector.innerHTML = "You Lost!";
    }
}