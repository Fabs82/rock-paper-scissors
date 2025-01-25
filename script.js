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

// Function asking the player to choose using a prompt
function getPlayerChoice() {
    let playerChoice = prompt("Your turn now. Rock - Paper - Scissors?: ").toLowerCase();
    return playerChoice;
}

// Function for one round. Take computer and player choices as parameters, check the winner and return a value 0 - 1 - 2
function playRound(computer, player) {
    console.log(`You chose ${player}. Computer chose ${computer}`);
    if (computer === player) {
        console.log("It`s a draw.");
        return 0;
    }
    else if (
        computer === "rock" && player === "scissors" ||
        computer === "paper" && player === "rock" ||
        computer === "scissors" && player === "paper") {
        console.log(`Computer wins! ${computer} beats ${player}`);
        return 1;
    }
    else {
        console.log(`You win! ${player} beats ${computer}`);
        return 2;
    }
}

// Function keeping track of the scores and announcing the winner
function announceWinner(computerScore, playerScore) {
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
// Function that manages the entire game using a while loop
function playGame() {
    let roundNumber = 1;
    let computerScore = 0;
    let playerScore = 0;

    while ((roundNumber <= 5)) {
        console.log(`ROUND ${roundNumber}`);
        let result = playRound(getComputerChoice(), getPlayerChoice()); // catch the return value from playRound 

        switch (result) {
            case 1:
                computerScore++;
                break;

            case 2:
                playerScore++;
                break;

            default:
                break;
        }
        roundNumber++; // increase the round number
    }
    console.log(announceWinner(computerScore, playerScore));
}

playGame();