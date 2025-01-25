// A function that pick a random number between 1 and 3 included and return the corresponding string
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "rock";
    }
    else if (number === 2) {
        return "paper";
    }
    else {
        return "scissors";
    }
}

let computerChoice = getComputerChoice();
console.log(computerChoice);

// A function that asks the player choice and return it always lowercase
function getPlayerChoice() {
    let playerChoice = prompt("Your turn now. Rock - Paper - Scissors?: ").toLowerCase();
    return playerChoice;
}

let playerChoice = getPlayerChoice();
console.log(playerChoice);

// Set variables to keep track of Computer and Player scores
let computerScore = 0
let playerScore = 0

// Function for one round
function playRound(computer, player) {
    if (computer === player) {
        console.log("It`s a draw.")
        computerScore++
        playerScore++
    }
    else if (
        computerChoice === "rock" && playerChoice === "scissors" ||
        computerChoice === "paper" && playerChoice === "rock" ||
        computerChoice === "scissors" && playerChoice === "paper") {
        console.log("Computer wins!")
        computerScore++
    }
    else {
        console.log("You win!")
        playerScore++
    }
}

playRound(computerChoice, playerChoice)
console.log(`Computer Score: ${computerScore}`)
console.log(`Player Score: ${playerScore}`)
