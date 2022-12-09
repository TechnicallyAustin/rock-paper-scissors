

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let cpuChoice = choices[Math.floor(Math.random() * 3)];
  return cpuChoice;
}

function play(playerSelection, computerSelection) {
  let userWins = 0;
  let cpuWins = 0;
  // Change outcome statements to DOM Scoreboard updates
  let win =
    "you win using " +
    `${playerSelection} ` +
    "the cpu picked " +
    `${computerSelection} ` +
    "Score -- " +
    "User: " +
    `${userWins += 1} ` +
    "Cpu: " +
    `${cpuWins} `;

  let lose =
    "you lose using " +
    `${playerSelection} ` +
    "the cpu picked " +
    `${computerSelection} ` +
    "Score -- " +
    "User: " +
    `${userWins} ` +
    "Cpu: " +
    `${cpuWins += 1} `;

  let draw =
    "It's a Draw! " +
    "you used " +
    `${playerSelection} ` +
    "the cpu picked " +
    `${computerSelection} ` +
    "Score -- " +
    "User: " +
    `${userWins} ` +
    "Cpu: " +
    `${cpuWins} `;

  // plays a single round of rock paper scissors
  //return results
  if (playerSelection === computerSelection) {
    alert(draw);
    // Change Alert here to a DOM update

  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    userWins += 1;
    //alert(win);
    let userDivSelector = document.getElementById("user-div");
    userDivSelector.textContent = `${userWins += 1}`

    // Change Alert here to a DOM update
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    userWins += 1;
    alert(win);
    // Change Alert here to a DOM update
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    userWins += 1;
    alert(win);
    // Change Alert here to a DOM update
  } else {
    cpuWins += 1;
    alert(lose);
    // Change Alert here to a DOM update
  }
}

function addButtons() {
  let gameDiv = document.body.appendChild(document.createElement('div'))
  gameDiv.setAttribute('id', 'game-div')
  let rockButton = gameDiv.appendChild(document.createElement("button"));
  rockButton.textContent = "Rock"
  rockButton.setAttribute('id', 'rock-button')
  let paperButton = gameDiv.appendChild(document.createElement("button"));
  paperButton.textContent = "Paper"
  paperButton.setAttribute('id', 'paper-button')
  let scissorsButton = gameDiv.appendChild(document.createElement("button"));
  scissorsButton.textContent = "Scissors"
  scissorsButton.setAttribute('id', 'scissor-button')
};

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

function addResultsDiv() {
  // Selectors
    // div selectors
  let userDivSelector = document.getElementById("user-div")
  let cpuDivSelector = document.getElementById("cpu-div")
  let totalRoundsDivSelector = document.getElementById("total-div")
  let resultsDivSelector = document.getElementById("reslts-div")
  let winnerDivSelector = document.getElementById("winner-div")
  let scoreDivSelector = document.getElementById("score-div")
  let gameDivSelector = document.getElementById("game-div")
    // label selectors
      // or use document.querySelectorAll('div') to gather all divs
        // give the divs specific Id's or classes to
  let resultsDivLabelSelector = document.getElementById("results-div")
  let userDivLabelSelector = document.getElementById("user-div")
  let cpuDivLabelSelector = document.getElementById("cpu-div")
  let totalRoundsDivLabelSelector = document.getElementById("total-div")
  let winnerDivLabelSelector = document.getElementById("winner-div")
  // creates parent Div
  let resultsDiv = document.body.appendChild(document.createElement('div'))
    // creates child Divs
  let userDiv = resultsDiv.appendChild(document.createElement('div'))
  let cpuDiv = resultsDiv.appendChild(document.createElement("div"));
  let totalRoundsDiv = resultsDiv.appendChild(document.createElement("div"));
  let winnerDiv = resultsDiv.appendChild(document.createElement('div'))
  let scoreDiv = resultsDiv.appendChild(document.createElement('div'))
    // creates child Div id's
  resultsDiv.setAttribute('id','results-div' )   
  userDiv.setAttribute('id','user-div' )  
  cpuDiv.setAttribute('id','cpu-div' )
  totalRoundsDiv.setAttribute('id','total-div' )
  winnerDiv.setAttribute('id','winner-div' )
  scoreDiv.setAttribute('id','score-div' )
  // creates div labels
  //let scoreDivLabel = gameDivSelector.appendChild(document.createElement('h2'))
  let userDivLabel = userDiv.appendChild(document.createElement('h3'))
  let cpuDivLabel = cpuDiv.appendChild(document.createElement("h3"));
  let totalRoundsDivLabel = totalRoundsDiv.appendChild(document.createElement("h3"));
  let winnerDivLabel = winnerDiv.appendChild(document.createElement('h3'))
  // assigns label inner text and id's
  //scoreDivLabel.textContent = "Scoreboard"
  //scoreDivLabel.setAttribute('id', 'results-label')
  userDivLabel.textContent = "You"
  userDivLabel.setAttribute('id', 'user-label')
  cpuDivLabel.textContent = "Computer"
  cpuDivLabel.setAttribute('id', 'cpu-label')
  totalRoundsDivLabel.textContent = "Rounds Played:"
  totalRoundsDivLabel.setAttribute('id', 'total-label')
  winnerDivLabel.textContent = "The Winner is...."
  winnerDivLabel.setAttribute('id', 'winner-label')
}

function createScoreDiv() {
  let gameDiv = document.getElementById('game-div');
  let scoreTitle = gameDiv.insertAdjacentElement("afterend", document.createElement('h2'))
  scoreTitle.textContent = "Scoreboard"
}

function game() {
  addButtons()
  addButtonEventListeners()
  createScoreDiv()
  addResultsDiv()
  //let totalWins = cpuWins + userWins;
  // call play() function at least 5 times to simulate a game
 /* for (let i = 0; i < 5; i++) {
    play(promptUser(), getComputerChoice());
  }
    if (totalWins === 5 && userWins > cpuWins) {
      alert("You Win the Game!");
      // return "You Win the Game!
    } else if (totalWins === 5 && userWins === cpuWins) {
      alert("It's a Draw!");
      // return "It's a Draw!!
    } else {
      alert("You Lose the Game!");
      // return "You Lose the Game!
    }
  userWins = 0;
    cpuWins = 0;
    */
}

function winner() {
  // add a you win or you lost message
  // evaluate cpuWins vs userWins
  // if user wins are greater output a "You won the game method"
  // otherwise output "you lost the game"
}

function promptUser() {
  let userInput = prompt("Please enter Rock Paper or Scissors", "Rock")
    .toString()
    .toLowerCase();
  return userInput;
}
