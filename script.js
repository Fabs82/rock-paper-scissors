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

// Function for one round. Take computer and player choices as parameters, check the winner and return a value 0 - 1 - 2
function playRound(computer, player) {
    const roundResult = document.querySelector(".result");
    const message = `You chose ${player}. Computer chose ${computer} - `;

    if (computer === player) {
        roundResult.textContent = message + "It`s a draw.";
        return 0;
    }
    else if (
        computer === "rock" && player === "scissors" ||
        computer === "paper" && player === "rock" ||
        computer === "scissors" && player === "paper") {
        roundResult.textContent = message + `Computer wins! ${computer} beats ${player}`;
        return 1;
    }
    else {
        roundResult.textContent = message + `You win! ${player} beats ${computer}`;
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
    };
};

// Function that manages the entire game 
function playGame() {
    const buttonContainer = document.querySelector(".buttonContainer");
    const winnerResult = document.querySelector(".winnerResult");
    let computerScore = 0;
    let playerScore = 0;

    buttonContainer.addEventListener("click", (event) => {
        switch (event.target.textContent.toLowerCase()) {
            case "rock":
                playerChoice = "rock";
                break;
            case "paper":
                playerChoice = "paper";
                break;
            case "scissors":
                playerChoice = "scissors";
                break;
            default:
                return; // or handle invalid clicks if needed
        };

        let result = playRound(getComputerChoice(), playerChoice);
        switch (result) {
            case 1:
                computerScore++;
                break;

            case 2:
                playerScore++;
                break;
        }
        if (computerScore === 5 || playerScore === 5) {
            winnerResult.textContent = announceWinner(computerScore, playerScore);
            buttons = document.querySelectorAll(".btn");
            buttons.forEach(button => button.disabled = true);
        };
    });

};

playGame();