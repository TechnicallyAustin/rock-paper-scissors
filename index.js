
function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let cpuChoice = Math.floor(Math.random() * 2);
    return choices[cpuChoice]

}

function play(playerSelection, computerSelection) {
    // plays a single round of rock paper scissors
    //return results
    switch(playerSelection) {
        case rock:
            if (computerSelection === "scissors") {
                console.log(`you picked: rock -- the computer picked ${computerSelection}`)
                console.log
            }
        break

        case papper:

        break

        case scissors:

        break

        default:
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
return userInput 

}



