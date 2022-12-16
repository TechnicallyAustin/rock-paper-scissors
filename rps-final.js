const game = () => {
    // exposes variables to all nested functions
    const userScore = 0;
    const cpuScore = 0;
    const round = 0;

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
                // when clicked this should

                    // add to the round counter x /10 rounds
                    // add to Round

                    // call cpuChoice


                    // evaluates win combinations
                        // winner(userChoice, CpuChoice)

                    // update score values on the page
                    // destermine when the game ends)

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