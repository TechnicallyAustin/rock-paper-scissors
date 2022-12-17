function game() {
  let userScore = 0;
  let cpuScore = 0;
  let rounds = 0;

const playGame = () => {
  const createButtons = () => {
    const gameDiv = document.getElementById("game-div");
    const roundsPlayed = document.getElementById("round-value-text");
    const cpuChoices = ["rock", "paper", "scissors"];
    const element = Math.floor(Math.random() * 3);
    const cpuChoice = cpuChoices[element];
    let roundsPlayedText = document.getElementById("round-value-text");

    const createRockButton = () => {
      const rockButton = gameDiv.appendChild(document.createElement("button"));
      rockButton.setAttribute("id", "rock-button");
      rockButton.setAttribute("value", "rock")
      const rockImage = rockButton.appendChild(document.createElement("img"));
      rockImage.setAttribute("id", "rock-button-image");
      rockImage.setAttribute("src", "assets/rock.jpg");
      rockImage.setAttribute("alt", "image of a rock");
    };
    createRockButton();

    const createPaperButton = () => {
      const paperButton = gameDiv.appendChild(document.createElement("button"));
      paperButton.setAttribute("id", "paper-button");
      paperButton.setAttribute("value", "paper")
      const paperImage = paperButton.appendChild(document.createElement("img"));
      paperImage.setAttribute("id", "paper-button-image");
      paperImage.setAttribute("src", "assets/paper.jpg");
      paperImage.setAttribute("alt", "image of paper");
    };
    createPaperButton();

    const createScissorsButton = () => {
      const scissorButton = gameDiv.appendChild(document.createElement("button"));
      scissorButton.setAttribute("id", "scissor-button");
      scissorButton.setAttribute("value", "scissors")
      const scissorImage = scissorButton.appendChild(
        document.createElement("img")
      );
      scissorImage.setAttribute("id", "scissor-button-image");
      scissorImage.setAttribute("src", "assets/scissors.jpg");
      scissorImage.setAttribute("alt", "image of scissors");
    };
    createScissorsButton();
    const rockButtonSelector = document.getElementById("rock-button");
    const paperButtonSelector = document.getElementById("paper-button");
    const scissorsButtonSelector = document.getElementById("scissor-button");
    const playerChoices = [
      rockButtonSelector,
      paperButtonSelector,
      scissorsButtonSelector,
    ];
    playerChoices.forEach((choice) => {
      choice.addEventListener("click", () => {
        console.log(rounds, choice.value, cpuChoice);
        rounds++;
        winner(choice.value, cpuChoice);
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
    switch (true) {
      case cpuChoice === userChoice:
        selection.textContent = `It's a Draw! Computer Picked ${cpuChoice}`;
        results.textContent = "Draw";
        userScoreText.textContent = `${userScore}`;
        cpuScoreText.textContent = `${cpuScore}`;
        break;
      case cpuChoice === "rock" && userChoice === "paper":
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
        userScore++;
        userScoreText.textContent = `${userScore}`;
        cpuScoreText.textContent = `${cpuScore}`;
        results.textContent = "Win";
        break;
      case cpuChoice === "rock" && userChoice !== "paper":
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
        results.textContent = "Lose";
        cpuScore++;
        cpuScoreText.textContent = `${cpuScore}`;
        userScoreText.textContent = `${userScore}`;
        results.textContent = "Lose";
        break;
      case cpuChoice === "paper" && userChoice === "scissors":
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
        userScore++;
        userScoreText.textContent = `${userScore}`;
        results.textContent = "Win";
        break;
      case cpuChoice === "paper" && userChoice !== "scissors":
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
        cpuScore++;
        cpuScoreText.textContent = `${cpuScore}`;
        userScoreText.textContent = `${userScore}`;
        results.textContent = "Lose";
        break;
      case cpuChoice === "scissors" && userChoice === "rock":
        selection.textContent = `You Win! Computer Picked ${cpuChoice}`;
        userScore++;
        userScoreText.textContent = `${userScore}`;
        results.textContent = "Win";
        break;
      case cpuChoice === "scissors" && userChoice !== "rock":
        selection.textContent = `You Lose! Computer Picked ${cpuChoice}`;
        cpuScore++;
        cpuScoreText.textContent = `${cpuScore}`;
        userScoreText.textContent = `${userScore}`;
        results.textContent = "Lose";
        break;
    }
};
  

  const endOfGame = (playerChoices, roundsPlayed) => {
    playerChoices.forEach((choice) => {
      choice.disabled = true;
    });
    const resultsText = document.getElementById("match-value-text");
    const userScoreText = document.getElementById("user-value-text");
    const cpuScoreText = document.getElementById("cpu-value-text");
    const selectionText = document.getElementById("selection-text");

    if (userScore > cpuScore) {
      selectionText.textContent = `Congratulations! You won ${userScore} to ${cpuScore}`;
      resultsText.textContent = "Win";
    } else if (cpuScore > userScore) {
      selectionText.textContent = `You lost ${cpuScore} to ${userScore}`;
      resultsText.textContent = "Lose";
    } else {
      selectionText.textContent = `It's a draw! Both players scored ${userScore} points`;
      resultsText.textContent = "Draw";
    }
    userScoreText.textContent = `${userScore}`;
    cpuScoreText.textContent = `${cpuScore}`;
    roundsPlayed.textContent = "10";
  };
};
  playGame();
}
game();
