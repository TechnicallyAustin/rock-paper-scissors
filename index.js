let userWins;
let cpuWins;
let winArray = [];

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let cpuChoice = Math.floor(Math.random() * 2);
    return choices[cpuChoice].toLocaleUpperCase()

}

function play(playerSelection, computerSelection) {
    // plays a single round of rock paper scissors
    //return results
    if (playerSelection === computerSelection) {
        console.log("Draw");
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        console.log(`you win ${playerSelection}`);
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        console.log(`you win ${playerSelection}`);
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        console.log(`you win ${playerSelection}`)
    } else {
        console.log("you lose")
    }


}

function game() {
    // call play() function at least 5 times to simulate a game
    for (let i = 0; i < 5; i++){
        play(promptUser(), getComputerChoice)
    }
}

function promptUser() {
let userInput = prompt("Please enter Rock Paper or Scissors", "Rock").toLowerCase()
let currentScore
return userInput 

}



