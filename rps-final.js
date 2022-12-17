const game = () => {
    // exposes variables to all nested functions
    const userScore = 0;
    const cpuScore = 0;
    const round = 0;


        const playGame = () => {
          // function to select the buttons and add event listeners to them
          const gameDiv = document.getElementById("game-div");
          const newRockButton = gameDiv.appendChild(document.createElement("button"));
          const newPaperButton = gameDiv.appendChild(document.createElement("button"));
          const newScissorButton = gameDiv.appendChild(document.createElement("button"));
          const rockButtonSelector = document.getElementById("rock-button");
          const paperButtonSelector = document.getElementById("paper-butotn");
          const scissorsButtonSelector = document.getElementById("scissors-button");
          const playerChoices = [rockButtonSelector, paperButtonSelector, scissorsButtonSelector];
          const roundsPlayed = document.getElementById("round-value-text");
          const cpuChoices = ["rock", "paper", "scissors"];
          const element = Math.floor(Math.random() * 3);
          const cpuPick = cpuChoices[element];

           const createButtons = () => {
                playerChoices.forEach(id => {
                    if (id === 'rock'){
                        newRockButton.setAttribute("id", "rock-button");
                        newRockButton.setAttribute("src", "assets/rock.jpg");
                        newRockButton.setAttribute("alt", "image of a rock");
                    } else if (id ===' paper'){
                        newPaperButton.setAttribute("id", "paper-button");
                        newPaperButton.setAttribute("src", "assets/paper.jpg");
                        newPaperButton.setAttribute("alt", "image of paper");
                    } else {
                        newScissorButton.setAttribute("id", "scissor-button");
                        newScissorButton.setAttribute("src", "assets/scissors.jpg");
                        newScissorButton.setAttribute("alt", "image of scissors");
                    }
                })
            }

            playerChoices.forEach(choice => {
                choice.addEventListener('click', () => {
                    round++;
                    winner(choice, cpuPick);
                        if (round === 10) {
                            endOfGame(playerChoices, roundsPlayed)
                        }
                });
            });
        
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

};
