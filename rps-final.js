const game = () => {
    // exposes variables to all nested functions
    const userScore = 0;
    const cpuScore = 0;
    const round = 0;

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

    const playGame = () => {
        // function to select the buttons and add event listeners to them
        const rockButton = document.getElementById('rock-button')
        const paperButton = document.getElementById('papeer-butotn')
        const scissorsButton = document.getElementById('scissors-button')
        const playerChoices = [rockButton, paperButton, scissorsButton]
        const cpuChoices = ['rock', 'paper', 'scissors']
        const element = Math.floor(Math.Random() * 3)
        const cpuPick = cpuChoices[element]


        // loops through player choices to evaluatee player choice
        playerChoices.forEach(choice => {
            choice.addEventListener('click', function(){
                const roundsPlayed = document.getElementById("round-value-text");
                    round++
                    if (round > 10 ) {
                    roundsPlayed.textContent = `${round} / 10`
                    winner(choice, cpuPick);
                    }
            })
        })

    }
    
    const winner = (userChoice, cpuChoice) => {
         let results = document.getElementById("match-value-text");
         let userScoreText = document.getElementById("user-value-text");
         let cpuScoreText = document.getElementById("cpu-value-text");
         let winner = document.getElementById("winner-value-text");
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


}
