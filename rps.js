function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let cpuChoice = choices[Math.floor(Math.random() * 3)];
    return cpuChoice;
}

function userInput() {}

function play(userChoice, cpuChoice) {
    switch (userChoice) {
        case "rock":
            if (cpuChoice === "rock") {
            }
            
            // use Jquery to update the DOM with
                // # of Rounds
                // Winner of current round
                // user and cpu choices
                //
            break
        case "paper":
            console.log(userChoice, cpuChoice);
            break
        case "scissors":
            console.log(userChoice, cpuChoice);
            break
            default:

    }
}

//function game()
//
//function winner() {}
//
//function loser() {}

function createButtons() {
    let gameDiv = document.getElementById("game-div")
    let rockButton = gameDiv.appendChild(document.createElement("button"));
    rockButton.textContent = "Rock"
    rockButton.setAttribute('id', 'rock-button')

    let paperButton = gameDiv.appendChild(document.createElement("button"));
    paperButton.textContent = "Paper"
    paperButton.setAttribute('id', 'paper-button')

    let scissorsButton = gameDiv.appendChild(document.createElement("button"));
    scissorsButton.textContent = "Scissors"
    scissorsButton.setAttribute('id', 'scissor-button')
}

function addButtonEventListeners() {
    const rockBtnSelector = document.getElementById('rock-button')
    let rockEvent = rockBtnSelector.addEventListener('click', () => {
    play("rock", getComputerChoice() )
    });

    const paperBtnSelector = document.getElementById("paper-button");
    let paperEvent = paperBtnSelector.addEventListener("click", () => {
    play("paper", getComputerChoice());
    });

    const scissorBtnSelector = document.getElementById("scissor-button");
    let scissorsEvent = scissorBtnSelector.addEventListener("click", () => {
    play("scissors", getComputerChoice());
    });
}