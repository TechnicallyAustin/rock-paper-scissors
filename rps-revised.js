function createButtons() {
    // calls on button creation methods
    createRockButton()
    createPaperButton()
    createScissorsButton()
}

function createRockButton() {
    // creates a Rock button
    let rockDiv = document.getElementById('rock-div')
    let rockButton = rockDiv.appendChild(document.createElement('button'))
    rockButton.addButtonAttributes('id','rock-button')
    rockButton.addButtonAttributes('src', 'assets/rock.jpg')
    rockButton.addButtonAttributes('alt', 'image of a rock')
}

function createPaperButton() {
    //creates a Paper button
    let paperDiv = document.getElementById('paper-div')
    let paperButton = paperDiv.appendChild(document.createElement('button'))
     paperButton.addButtonAttributes("id", "paper-button");
     paperButton.addButtonAttributes("src", "assets/paper.jpg");
     paperButton.addButtonAttributes("alt", "image of paper");
}

function createScissorsButton() {
    //creates a Scissor button
    let scissorDiv = document.createElement('button')
    let scissorButton = document.appendChild(document.createElement('button'))
     scissorButton.addButtonAttributes("id", "scissor-button");
     scissorButton.addButtonAttributes("src", "assets/scissors.jpg");
     scissorButton.addButtonAttributes("alt", "image of scissors");
}

function createButtonEventListner() {
    // calls on Button event listener methods
    rockEventListener()
    PaperEventListener()
    scissorsEventListener()
}

function rockEventListener() {
    // creates a rock evenet listener
    let rockButton = doucment.getElementById('rock-button')
    rockButton.ad

}

function PaperEventListener() {
    // createse a paper event listener
}

function scissorsEventListener() {
    // creates a scissors event listener
}

function addButtonAttributes() {
    // calls on add attributes methods
    rockAttributes()
    paperAttributes()
    scissorsAttributes()
}

function rockAttributes() {
    // adds id, src, alt
}

function paperAttributes() {
  // adds id, src, alt
}

function scissorsAttributes() {
  // adds id, src, alt
}

function getComputerChoice() {
// generates the computeres selection
}

function getUserChoice() {
    // usereInput is equal to whichevere Event is triggered
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


