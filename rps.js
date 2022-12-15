let userGameScore = 0;
let cpuGameScore = 0;
const totalRoundsPlayed = 10;
let roundCounter = 0

function createButtons() {
  let gameDiv = document.getElementById("game-div");
  let rockDiv = document.getElementById("rock-div");
  let paperDiv = document.getElementById("paper-div");
  let scissorDiv = document.getElementById("scissor-div");

  let rockButton = rockDiv.appendChild(document.createElement("button"));
  rockButton.setAttribute("id", "rock-button");
  let rockButtonImg = rockButton.appendChild(document.createElement("img"));
  rockButtonImg.setAttribute("src", "assests/rock.jpg");
  rockButtonImg.setAttribute("id", "rock-button-image");

  let paperButton = paperDiv.appendChild(document.createElement("button"));
  paperButton.setAttribute("id", "paper-button");
  let paperButtonImg = paperButton.appendChild(document.createElement("img"));
  paperButtonImg.setAttribute("src", "assests/paper.jpg");
  paperButtonImg.setAttribute("id", "paper-button-image");

  let scissorButton = scissorDiv.appendChild(document.createElement("button"));
  scissorButton.setAttribute("id", "scissor-button");
  let scissorButtonImg = scissorButton.appendChild(
    document.createElement("img")
  );
  scissorButtonImg.setAttribute("src", "assests/scissors.jpg");
  scissorButtonImg.setAttribute("id", "paper-button-image");
}

  // function addButtonEventListeners() {
  //   let rockBtnSelector = document.getElementById("rock-button");
  //   let rockEvent = rockBtnSelector.addEventListener("click", () => {
  //     play(getUserInput(), getComputerChoice());
  //   });
  // 
  //   const paperBtnSelector = document.getElementById("paper-button");
  //   let paperEvent = paperBtnSelector.addEventListener("click", () => {
  //     play("paper", getComputerChoice());
  //   });
  // 
  //   const scissorBtnSelector = document.getElementById("scissor-button");
  //   let scissorsEvent = scissorBtnSelector.addEventListener("click", () => {
  //     play("scissors", getComputerChoice());
  //   });
  // }


  function rock() {
    let userInput = "rock";
    return userInput;
  }

    function paper() {
      let userInput = "paper";
      return userInput;
    }

function getUserInput() {
  const rockBtnSelector = document.getElementById("rock-button");
  let rockInput = rockBtnSelector.addEventListener("click", () => {
    rock()
  });

  const paperBtnSelector = document.getElementById("paper-button");
  let paperInput = paperBtnSelector.addEventListener("click", () => {
    let userInput = "paper"
    play(userInput, getComputerChoice());
  });

  const scissorBtnSelector = document.getElementById("scissor-button");
  let scissorsInput = scissorBtnSelector.addEventListener("click", () => {
    let userInput = "scissor"
    play(userInput, getComputerChoice())
  });
}

function getComputerChoice() {
  let choices = ["rock", "paper", "scissors"];
  let cpuChoice = choices[Math.floor(Math.random() * 3)];
  return cpuChoice;
}

function play(userChoice, cpuChoice) {
  let results = document.getElementById("match-value-text");
  let userScore = document.getElementById("user-value-text");
  let cpuScore = document.getElementById("cpu-value-text");
  let roundsPlayed = document.getElementById("round-value-text");
  let winner = document.getElementById("winner-value-text");
  let selection = document.getElementById("selection-text");

  switch (userChoice) {
    case "rock":
      if (cpuChoice === "rock") {
        selection.textContent = `It's a Draw, Computer picked ${cpuChoice}`;
        results.textContent = "Draw";
        userScore.textContent = `${userGameScore}`;
        cpuScore.textContent = `${cpuGameScore}`;
        winner.textContent = "Winner is...";
      } else if (cpuChoice === "Paper") {
        selection.textContent = `You Lose, Computer picked ${cpuChoice}`;
        results.textContent = "Lose";
        userScore.textContent = `${userGameScore}`;
        cpuScore.textContent = `${(cpuGameScore += 1)}`;
        winner.textContent = "Winner is...";
      } else if (cpuChoice === "Scissors") {
        selection.textContent = `You Win, Computer picked ${cpuChoice}`;
        results.textContent = "Win";
        userScore.textContent = `${(userGameScore += 1)}`;
        cpuScore.textContent = `${cpuGameScore}`;
        winner.textContent = "Winner is...";
      }
      break;
    case "paper":
      if (cpuChoice === "rock") {
        selection.textContent = `You Win, Computer picked ${cpuChoice}`;
        results.textContent = "Win";
        userScore.textContent = `${(userGameScore += 1)}`;
        cpuScore.textContent = `${cpuGameScore}`;
        winner.textContent = "Winner is...";
      } else if (cpuChoice === "paper") {
        selection.textContent = `It's a Draw, Computer picked ${cpuChoice}`;
        results.textContent = "Draw";
        userScore.textContent = `${userGameScore}`;
        cpuScore.textContent = `${cpuGameScore}`;
        winner.textContent = "Winner is...";
      } else if (cpuChoice === "scissors") {
        selection.textContent = `You Lose, Computer picked ${cpuChoice}`;
        results.textContent = "Lose";
        userScore.textContent = `${userGameScore}`;
        cpuScore.textContent = `${(cpuGameScore += 1)}`;
        winner.textContent = "Winner is...";
      }
      break;
    case "scissors":
      if (cpuChoice === "rock") {
        selection.textContent = `You Lose, Computer picked ${cpuChoice}`;
        results.textContent = "Lose";
        userScore.textContent = `${userGameScore}`;
        cpuScore.textContent = `${(cpuGameScore += 1)}`;
        winner.textContent = "Winner is...";
      } else if (cpuChoice === "paper") {
        selection.textContent = `You Win, Computer picked ${cpuChoice}`;
        results.textContent = "Win";
        userScore.textContent = `${(userGameScore += 1)}`;
        cpuScore.textContent = `${cpuGameScore}`;
        winner.textContent = "Winner is...";
      } else if (cpuChoice === "scissors") {
        selection.textContent = `It's a Draw, Computer picked ${cpuChoice}`;
        results.textContent = "Draw";
        userScore.textContent = `${userGameScore}`;
        cpuScore.textContent = `${cpuGameScore}`;
        winner.textContent = "Winner is...";
      }
      break;
    default:
  }
  roundsPlayed.textContent = `${(roundCounter += 1)}`;
}

// function 

    function game() {
        createButtons()

        play(getUserInput(), getComputerChoice())
    }

//  function winner() {}
//
//  function loser() {}
