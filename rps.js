let userScore = 0;
let cpuScore = 0;

function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let cpuChoice = choices[Math.floor(Math.random() * 3)];
    return cpuChoice;
}

function userInput() {}

function play(userChoice, cpuChoice) {
    let results =;
    let userScore=;
    let cpuScore =;
    let roundsPlayed=;
    let winner =;
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
    let rockDiv = document.getElementById("rock-div") ;
    let paperDiv = document.getElementById("paper-div") ;
    let scissorDiv = document.getElementById("scissor-div") ;

    let rockButton = rockDiv.appendChild(document.createElement("button"));
    rockButton.setAttribute('id', 'rock-button')
    let rockButtonImg = rockButton.appendChild(document.createElement('img'));
    rockButtonImg.setAttribute("src", "assests/rock.jpg");
    rockButtonImg.setAttribute('id', 'rock-button-image')

    let paperButton = paperDiv.appendChild(document.createElement("button"));
    paperButton.setAttribute('id', 'paper-button')
    let paperButtonImg = paperButton.appendChild(document.createElement("img"));
    paperButtonImg.setAttribute("src", "assests/paper.jpg");
    paperButtonImg.setAttribute("id", "paper-button-image");

    let scissorButton = scissorDiv.appendChild(document.createElement("button"));
    scissorButton.setAttribute('id', 'scissor-button')
    let scissorButtonImg = scissorButton.appendChild(document.createElement("img"));
    scissorButtonImg.setAttribute("src", "assests/scissors.jpg");
    scissorButtonImg.setAttribute("id", "paper-button-image");

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