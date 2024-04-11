// Jokenpô Game vs Computer

function computerPlay(text) {
    let getRandom = Math.floor(Math.random()*3);
    if (getRandom === 0){
        console.log(text + "Rock")
    } else if (getRandom === 1) {
        console.log(text + "Paper")
    } else {
        console.log(text + "Scissor")
    }
    return getRandom;
}

// computerPlay()

function singleRound() {
    let playerSelection = computerPlay("Player hand: ");
    let computerSelection = computerPlay("Computer hand: ");
    if (playerSelection == 0) {
        if (computerSelection == 2) {
            console.log("You win! Rock wins of scissor");
        } else if (computerSelection == 1) {
            console.log("You lose! Paper beats rock"); 
        } else {
            console.log("Ahhhwww. It's a draw");
        }
    } else if (playerSelection == 2) {
        if (computerSelection == 1) {
            console.log("You win! Scissor wins of paper");
        } else if (computerSelection == 0) {
            console.log("You lose! Rock beats scissor"); 
        } else {
            console.log("Ahhhwww. It's a draw");
        }
    } else if (playerSelection == 1) {
        if (computerSelection == 0) {
            console.log("You win! Paper wins of rock");
        } else if (computerSelection == 2) {
            console.log("You lose! Scissor beats paper"); 
        } else {
            console.log("Ahhhwww. It's a draw");
        }
    }
}

singleRound()

// const playerSelection = ["Rock", "Paper", "Scissor"];
// const computerSelection = ["Rock", "Paper", "Scissor"];
// 0 Rock > 2 Scissor
// 0 Rock < 1 Paper
// 0 Rock == 0 Rock
// 2 Scissor > 1 Paper
// 2 Scissor < 0 Rock
// 2 Scissor == 2 Scissor
// 1 Paper > 0 Rock
// 1 Paper < 2 Scissor
// 1 Paper == 1 Paper