
let userWins = 0;
let cpuWins = 0;


function getComputerChoice() {
    let choices = ["rock", "paper", "scissors"];
    let cpuChoice = choices[Math.floor(Math.random() * 3)];
    return cpuChoice

}

function play(playerSelection, computerSelection) {
let win =
  "you win using " +
  `${playerSelection} ` +
  "the cpu picked " +
  `${computerSelection} ` +
  "Score -- " +
  "User: " +
  `${userWins + 1} ` +
  "Cpu: " +
  `${cpuWins} `;

let lose =
  "you lose using " +
  `${playerSelection} ` +
  "the cpu picked " +
  `${computerSelection} `+
  "Score -- " +
  "User: " +
  `${userWins} ` +
  "Cpu: " +
  `${cpuWins + 1} `;

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
    `${cpuWins + 1} `;


  // plays a single round of rock paper scissors
    //return results
    if (playerSelection === computerSelection) {
        alert(draw);
    }
    else if ((playerSelection === "rock") && (computerSelection === "scissors")) {
        userWins += 1;
       // console.log(win);
        alert(win);
    
    } else if ((playerSelection === "scissors") && (computerSelection === "paper")) {
        userWins += 1;
      //  console.log(win);
        alert(win)
    
    } else if ((playerSelection === "paper") && (computerSelection === "rock")){
        userWins += 1;
        alert(win);
    
    } else {
        cpuWins += 1
      //  console.log(lose);
        alert(lose);
    }
}

function game() {
    // call play() function at least 5 times to simulate a game
    for (let i = 0; i < 5; i++){
        play(promptUser(), getComputerChoice())
    }
}

function promptUser() {
let userInput = prompt("Please enter Rock Paper or Scissors", "Rock").toLowerCase()
let currentScore
return userInput 

}



