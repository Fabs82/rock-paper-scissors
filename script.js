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

function getPlayerChoice() {
    let playerChoice = prompt("Your turn now. Rock - Paper - Scissors?: ").toLowerCase();
    return playerChoice;
}


let computerScore = 0;
let playerScore = 0;

// Function for one round
function playRound(computer, player) {
    console.log(`You chose ${player}. Computer chose ${computer}`);
    if (computer === player) {
        console.log("It`s a draw.");
    }
    else if (
        computer === "rock" && player === "scissors" ||
        computer === "paper" && player === "rock" ||
        computer === "scissors" && player === "paper") {
        console.log(`Computer wins! ${computer} beats ${player}`);
        computerScore++;
    }
    else {
        console.log(`You win! ${player} beats ${computer}`);
        playerScore++;

    }
}

// Function keeping track of the scores and announcing the winner
function announceWinner() {
    if (computerScore === playerScore) {
        return (`Computer Score: ${computerScore} Player Score: ${playerScore}. IT'S A DRAW`);
    }
    else if (computerScore > playerScore) {
        return (`Computer Score: ${computerScore} Player Score: ${playerScore}. COMPUTER WINS`);
    }
    else {
        return (`Computer Score: ${computerScore} Player Score: ${playerScore}. YOU WIN`);
    }
}

function playGame() {
    let roundNumber = 1;

    while ((roundNumber <= 5)) {
        console.log(`ROUND ${roundNumber}`)
        playRound(getComputerChoice(), getPlayerChoice());
        roundNumber++;
    }
    console.log(announceWinner());
}

playGame();