function game() {
  let userScore = 0;
  let cpuScore = 0;
  let rounds = 0;

  const createButtons = () => {
    const gameDiv = document.getElementById("game-div");
    const rockButton = gameDiv.appendChild(document.createElement("button"));
    rockButton.setAttribute("id", "rock-button");
    const rockImage = rockButton.appendChild(document.createElement("img"));
    rockImage.setAttribute("id", "rock-button-image");
    rockImage.setAttribute("src", "assets/rock.jpg");
    rockImage.setAttribute("alt", "image of a rock");

    const paperButton = gameDiv.appendChild(document.createElement("button"));
    paperButton.setAttribute("id", "paper-button");
    const paperImage = paperButton.appendChild(document.createElement("img"));
    paperImage.setAttribute("id", "paper-button-image");
    paperImage.setAttribute("src", "assets/paper.jpg");
    paperImage.setAttribute("alt", "image of paper");

    const scissorButton = gameDiv.appendChild(
      document.createElement("button")
    );
    scissorButton.setAttribute("id", "scissor-button");
    const scissorImage = scissorButton.appendChild(
      document.createElement("img")
    );
    scissorImage.setAttribute("id", "scissor-button-image");
    scissorImage.setAttribute("src", "assets/scissors.jpg");
    scissorImage.setAttribute("alt", "image of scissors");

    const playerChoices = [rockButton, paperButton, scissorButton];
    const roundsPlayed = document.getElementById("round-value-text");
    const cpuChoices = ["rock", "paper", "scissors"];
    let roundsPlayedText = document.getElementById("round-value-text");

    playerChoices.forEach((choice) => {
      choice.addEventListener("click", () => {
        console.log(rounds, choice, cpuChoice);
        rounds++;
        const element = Math.floor(Math.random() * 3);
        const cpuChoice = cpuChoices[element];
        winner(choice.id, cpuChoice);
        roundsPlayedText.textContent = rounds;
        if (rounds === 10) {
          endOfGame(playerChoices, roundsPlayed);
        }
      });
    });
  };
  createButtons();

  const winner = (userChoice, cpuChoice) => {
  let results = document.getElementById("match-value-text");
  let userScoreText = document.getElementById("user-value-text");
  let cpuScoreText = document.getElementById("cpu-value-text");
  let selection = document.getElementById("selection-text");

  switch (cpuChoice) {
    case "rock":
      if (userChoice === "paper") {
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
        userScore++;
      } else if (userChoice === "scissors") {
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
        cpuScore++;
      } else {
        selection.textContent = "It's a draw!";
      }
      break;
    case "paper":
      if (userChoice === "rock") {
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
        cpuScore++;
      } else if (userChoice === "scissors") {
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
        userScore++;
      } else {
        selection.textContent = "It's a draw!";
      }
      break;
    case "scissors":
      if (userChoice === "rock") {
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
        userScore++;
      } else if (userChoice === "paper") {
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
        cpuScore++;
      } else {
        selection.textContent = "It's a draw!";
      }
      break;
  }
  userScoreText.textContent = userScore;
  cpuScoreText.textContent = cpuScore;
};

const endOfGame = (playerChoices, roundsPlayed) => {
  playerChoices.forEach((choice) => {
    choice.removeEventListener("click", () => {});
    choice.style.display = "none";
  });
  roundsPlayed.textContent = "Game Over!";
  if (userScore > cpuScore) {
    selection.textContent = "You won the game!";
  } else if (userScore < cpuScore) {
    selection.textContent = "You lost the game.";
  } else {
    selection.textContent = "The game is a draw.";
  }
};
}
game()
