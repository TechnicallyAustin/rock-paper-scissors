let choices = ["rock", "paper", "scissors"]
function getComputerChoice() {
// randomly returns an element of the choices array
// case Insensitive rock or ROCK or RoCk
let choices = ["rock", "paper", "scissors"];
let cpuChoice = Math.floor(Math.random() * 2);

}

function play(playerSelection, computerSelection) {
    // plays a single roung of rock paper scissors
    //return results

}

function game() {
    // call play() function at least 5 times to simulate a game
    for (let i = 0; i < 5; i++){
        play(promptUser(),)
    }
}

function promptUser() {
let userInput = prompt("Please enter Rock Paper or Scissors", "Rock").toLowerCase()
return userInput 

}



