
let userWins = 0;
let cpuWins = 0;

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
        userWins += 1
        console.log(`you win ${playerSelection}`, userWins)
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        userWins += 1
        console.log(`you win ${playerSelection}`, userWins);
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        userWins += 1
        console.log(`you win ${playerSelection}`, userWins)
    } else {
        cpuWins += 1
        console.log("you lose", cpuWins)
    }


}

function game() {
    userWins = 0;
    cpuWins = 0;
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



