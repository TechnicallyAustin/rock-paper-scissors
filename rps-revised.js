function setupGame() {
    createButtons()
    createButtonEventListener()
}

function createButtons() {
    // calls on button creation methods
    createRockButton()
    createPaperButton()
    createScissorsButton();
}

function createRockButton() {
    // creates a Rock button
    let rockDiv = document.getElementById('rock-div')
    let rockButton = rockDiv.appendChild(document.createElement('button'))
    let rockImage = rockButton.appendChild(document.createElement('img'))
    rockImage.setAttribute('id', 'rock-button-image')
    rockImage.setAttribute('src', "assets/rock.jpg")
    rockImage.setAttribute('alt', "image of a rock")

}

function createPaperButton() {
    //creates a Paper button
    let paperDiv = document.getElementById('paper-div')
    let paperButton = paperDiv.appendChild(document.createElement('button'))
    let paperImage = paperButton.appendChild(document.createElement('img'))
     paperImage.setAttribute("id", "paper-button-image");
     paperImage.setAttribute("src", "assets/paper.jpg");
     paperImage.setAttribute("alt", "image of paper");
}

function createScissorsButton() {
    //creates a Scissor button
    let scissorDiv = document.getElementById('scissor-div')
    let scissorButton = scissorDiv.appendChild(document.createElement('button'))
    let scissorImage = scissorButton.appendChild(document.createElement('img'))
     scissorImage.setAttribute("id", "scissor-button-image");
     scissorImage.setAttribute("src", "assets/scissors.jpg");
     scissorImage.setAttribute("alt", "image of scissors");
}

function createButtonEventListener() {
    // calls on Button event listener methods
    rockEventListener()
    PaperEventListener()
    scissorsEventListener()
}

function rockEventListener() {
    // creates a rock evenet listener
    let rockButton = document.getElementById('rock-button-image')
    let rockEvent = rockButton.addEventListener("click", () => {
        getUserChoice("rock")
    })
}

function PaperEventListener() {
    // createse a paper event listener
    let rockButton = document.getElementById("paper-button-image");
    let rockEvent = rockButton.addEventListener("click", () => {
      getUserChoice("paper");
    });
}

function scissorsEventListener() {
    // creates a scissors event listener
    let rockButton = document.getElementById("scissor-button-image");
    let rockEvent = rockButton.addEventListener("click", () => {
      getUserChoice("scissors");
    });
}


function getComputerChoice() {
// generates the computeres selection
const choices = ["rock", "paper", "scissors"]
let element = Math.floor(Math.random() *3)
let cpuChoice = choices[element]
return cpuChoice
}

function getUserChoice(string) {
let userInput = string;
return userInput
}

function playRound(userChoice, computerChoice) {
    // plays a single roung of RPS
}

function winner() {
    // after n rounds comparee user wins to computer wins
}

function gameLength() {
    // controls how many rounds the game will run for
}


