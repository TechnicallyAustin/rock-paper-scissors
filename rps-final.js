const game = () => {
    // exposes variables to all nested functions
    const userScore = 0;
    const cpuScore = 0;
    const round = 0;


        const playGame = () => {
          // function to select the buttons and add event listeners to them
          const rockButton = document.getElementById("rock-button");
          const paperButton = document.getElementById("papeer-butotn");
          const scissorsButton = document.getElementById("scissors-button");
          const playerChoices = [rockButton, paperButton, scissorsButton];
          const roundsPlayed = document.getElementById("round-value-text");
          const cpuChoices = ["rock", "paper", "scissors"];
          const element = Math.floor(Math.Random() * 3);
          const cpuPick = cpuChoices[element];

          // loops through player choices to evaluatee player choice
          playerChoices.forEach((choice) => {
            choice.addEventListener("click", function () {
              round++;
              winner(choice, cpuPick);
              if (round === 10) {
                endOfGame(playerChoices, roundsPlayed);
              }
            });
          });
        

    const createButtons = () => {
        

        ids.forEach(id => {
            if (id === 'rock'){
            const rockDiv = document.getElementById("rock-div")
            const rockButton = rockDiv.appendChild(document.createElement("button"))
            const rockImage = rockButton.appendChild(document.createElement("img"));
                rockImage.setAttribute("id", "rock-button-image");
                rockImage.setAttribute("src", "assets/rock.jpg");
                rockImage.setAttribute("alt", "image of a rock");
            } else if (id ===' paper'){
                const paperDiv = document.getElementById("paper-div");
                const paperButton = paperDiv.appendChild(document.createElement("button"));
                const paperImage = paperButton.appendChild(document.createElement("img"));
                paperImage.setAttribute("id", "paper-button-image");
                paperImage.setAttribute("src", "assets/paper.jpg");
                paperImage.setAttribute("alt", "image of paper");
            } else {
                    const scissorDiv = document.getElementById("scissor-div");
                    const scissorButton = scissorDiv.appendChild(document.createElement("button"));
                    const scissorImage = scissorButton.appendChild(document.createElement("img"));
                    scissorImage.setAttribute("id", "scissor-button-image");
                    scissorImage.setAttribute("src", "assets/scissors.jpg");
                    scissorImage.setAttribute("alt", "image of scissors");
            }
        })
    }

    
    const winner = (userChoice, cpuChoice) => {
         let results = document.getElementById("match-value-text");
         let userScoreText = document.getElementById("user-value-text");
         let cpuScoreText = document.getElementById("cpu-value-text");
         let selection = document.getElementById("selection-text");

         if (cpuChoice === userChoice){
            selection.textContent = `It's a Draw! Computer Picked ${cpuChoice}`
            results.textContent = 'Draw'
        } else if (cpuChoice === 'rock'){
                if (userChoice === 'paper'){
                    selection.textContent = `You Win! Computer Picked ${cpuChoice}`
                    userScore++
                    userScoreText.textContent = `${userScore}`
                    results.textContent = 'Win'
                } else {
                     selection.textContent = `You Lose! Computer Picked ${cpuChoice}`
                     results.textContent = 'Lose'
                     cpuScore++
                     cpuScoreText.textContent = `${cpuScore}`
                }
            
            } else if (cpuChoice === 'paper'){
                if (userChoice === 'scissors'){
                    selection.textContent = `You Win! Computer Picked ${cpuChoice}`
                    userScore++
                    userScoreText.textContent = `${userScore}`
                } else {
                    selection.textContent = `You Lose! Computer Picked ${cpuChoice}`
                    cpuScore++
                    cpuScoreText.textContent = `${cpuScoreText}`
                }
            } else if (cpuChoice === 'scissors'){
                if (userChoice === 'rock'){
                    selection.textContent = `You Win! Computer Picked ${cpuChoice}`
                    userScore++
                    userScoreText.textContent = `${userScore}`
                }
            } else if (userChoice === 'paper'){
                selection.textContent = `You Lose! Computer Picked ${cpuChoice}`
                cpuScore++
                cpuScoreText.textContent = `${cpuChoice}`
            }
        }

        const endOfGame = (userChoices, round) => {
            let winner = document.getElementById("winner-value-text");
            // compares user wins to cpu wins
                // if userwins are higher the user wins
                    // updates the score board with the over all winner
            // else computer wins
                // update scoreboard
                if (userScore === cpuScore){
                    winner.textContent = "It's a Tie!"
                } else if (userScore > cpuScore){
                    winner.textContent = 'You Win the Game!'
                } else {
                    winner.textContent = 'You Lose!'
                }
        }
        playGame();


}

};
