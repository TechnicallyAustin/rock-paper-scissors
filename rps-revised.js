function setupGame() {
    createButtons()
    createButtonEventListener()
}

function createButtons() {
    createRockButton();
    createPaperButton();
    createScissorsButton();
}

function createRockButton() {
    let rockDiv = document.getElementById('rock-div')
    let rockButton = rockDiv.appendChild(document.createElement('button'))
    let rockImage = rockButton.appendChild(document.createElement('img'))
    rockImage.setAttribute('id', 'rock-button-image')
    rockImage.setAttribute('src', "assets/rock.jpg")
    rockImage.setAttribute('alt', "image of a rock")
}

function createPaperButton() {
    let paperDiv = document.getElementById('paper-div')
    let paperButton = paperDiv.appendChild(document.createElement('button'))
    let paperImage = paperButton.appendChild(document.createElement('img'))
     paperImage.setAttribute("id", "paper-button-image");
     paperImage.setAttribute("src", "assets/paper.jpg");
     paperImage.setAttribute("alt", "image of paper");
}

function createScissorsButton() {
    let scissorDiv = document.getElementById('scissor-div')
    let scissorButton = scissorDiv.appendChild(document.createElement('button'))
    let scissorImage = scissorButton.appendChild(document.createElement('img'))
     scissorImage.setAttribute("id", "scissor-button-image");
     scissorImage.setAttribute("src", "assets/scissors.jpg");
     scissorImage.setAttribute("alt", "image of scissors");
}

function createButtonEventListener() {
    rockEventListener()
    PaperEventListener()
    scissorsEventListener()
}

function rockEventListener() {
    let rockDiv = document.getElementById('rock-div')
    let rockEvent = rockDiv.addEventListener("click", () => {
        let input = "rock"
        playRound(getUserChoice(input), getComputerChoice())
    })
}

function PaperEventListener() {
    let paperDiv = document.getElementById("paper-div");
    let paperEvent = paperDiv.addEventListener("click", () => {
        let input = "paper"
        playRound(getUserChoice(input), getComputerChoice());
    });
}

function scissorsEventListener() {
    let scissorDiv = document.getElementById("scissor-div");
    let scissorEvent = scissorDiv.addEventListener("click", () => {
        let input = "scissors"
        playRound(getUserChoice(input), getComputerChoice());
    });
}


function getComputerChoice() {
const choices = ["rock", "paper", "scissors"]
let element = Math.floor(Math.random() *3)
let cpuChoice = choices[element]
return cpuChoice
}

function getUserChoice(string) {
let userInput = string;
return userInput
}

function playRound(userChoice, cpuChoice) {
    switch (userChoice) {
        case "rock":
            if (cpuChoice === "rock"){}
            rockEvaluation(cpuChoice)
            break
        case "paper":
            if (cpuChoice === "paper") {
                paperEvaluation(cpuChoice)
            }
            break
        case "scissors":
            if (cpuChoice === "scissors") {
                scissorsEvaluation(cpuChoice)
            }
            break
            default:
    }
}

function rockEvaluation(cpuChoice) {
    let results = document.getElementById("match-value-text");
    let userScore = document.getElementById("user-value-text");
    let cpuScore = document.getElementById("cpu-value-text");
    let roundsPlayed = document.getElementById("round-value-text");
    let winner = document.getElementById("winner-value-text");
    let selection = document.getElementById("selection-text");
    if (cpuChoice === "rock") {
        selection.textContent = `It's a Draw! Computer Picked ${cpuChoice}`        
    } else if (cpuChoice === "paper") {
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`
    } else if (cpuChoice === "scissors"){
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`        
    }
}

function paperEvaluation(cpuChoice) {
    let results = document.getElementById("match-value-text");
    let userScore = document.getElementById("user-value-text");
    let cpuScore = document.getElementById("cpu-value-text");
    let roundsPlayed = document.getElementById("round-value-text");
    let winner = document.getElementById("winner-value-text");
    let selection = document.getElementById("selection-text");
       if (cpuChoice === "rock") {
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
         console.log("Win");
       } else if (cpuChoice === "paper") {
        selection.textContent= `It's a Draw! Computer Picked ${cpuChoice}`;
       } else if (cpuChoice === "scissors") {
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
       }
}

function scissorsEvaluation(cpuChoice) {
     let selection = document.getElementById("selection-text");
       if (cpuChoice === "rock") {
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
       } else if (cpuChoice === "paper") {
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
       } else if (cpuChoice === "scissors") {
        selection.textContent = `It's a Draw! Computer Picked ${cpuChoice}`;
        }
}


function roundWinner() {
    // edits the selction-text div
        // updates the scoreboard
}

function winner() {
    // after n rounds comparee user wins to computer wins
}

function gameLength() {
    // controls how many rounds the game will run for
}


