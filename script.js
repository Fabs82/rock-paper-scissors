// A function that pick a random number between 1 and 3 included and return the corresponding string
function getComputerChoice() {
    let number = Math.floor(Math.random() * 3) + 1;
    if (number === 1) {
        return "fireball";
    }
    else if (number === 2) {
        return "ray of frost";
    }
    else {
        return "lightning";
    }
}

// Function for one round. Take computer and player choices as parameters, check the winner and return a value 0 - 1 - 2
function playRound(computer, player, roundResult) {

    const message = `Computer chose ${computer} - `;

    if (computer === player) {
        roundResult.textContent = message + "It`s a draw.";
        return 0;
    }
    else if (
        computer === "fireball" && player === "lightning" ||
        computer === "ray of frost" && player === "fireball" ||
        computer === "lightning" && player === "ray of frost") {
        roundResult.textContent = message + `Computer wins! ${computer} beats ${player}`;
        return 1;
    }
    else {
        roundResult.textContent = message + `You win! ${player} beats ${computer}`;
        return 2;
    };
};

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
    const mainGameContainer = document.querySelector(".mainGameContainer")
    const buttonContainer = document.querySelector(".buttonContainer");
    const winnerResult = document.querySelector(".winnerResult");
    const currentScore = document.querySelector(".currentScore");
    const audioMusic = document.querySelector("#audio");
    let computerScore = 0;
    let playerScore = 0;
    let playerChoice;
    const roundResult = document.querySelector(".result");

    buttonContainer.addEventListener("click", (event) => {
        audioMusic.play()
        switch (event.target.textContent.toLowerCase()) {
            case "fireball":
                playerChoice = "fireball";
                break;
            case "ray of frost":
                playerChoice = "ray of frost";
                break;
            case "lightning":
                playerChoice = "lightning";
                break;
        };

        let result = playRound(getComputerChoice(), playerChoice, roundResult);
        switch (result) {
            case 1:
                computerScore++;
                break;

            case 2:
                playerScore++;
                break;
        }
        currentScore.textContent = `- Current Score - Computer: ${computerScore} vs Player: ${playerScore}`;
        if (computerScore === 5 || playerScore === 5) {
            winnerResult.textContent = announceWinner(computerScore, playerScore);
            buttons = document.querySelectorAll(".btn");
            buttons.forEach(button => button.disabled = true);

            const resetButton = document.createElement("button");
            resetButton.classList.add("btn");
            mainGameContainer.appendChild(resetButton);
            resetButton.textContent = "NEW GAME";
            resetButton.addEventListener("click", () => {
                computerScore = 0;
                playerScore = 0;
                winnerResult.textContent = "";
                currentScore.textContent = `- CURRENT SCORE - Computer: ${computerScore} vs Player: ${playerScore}`;
                roundResult.textContent = "";
                buttons.forEach(button => button.disabled = false);
                mainGameContainer.removeChild(resetButton);
            });
        };
    });
};

playGame();