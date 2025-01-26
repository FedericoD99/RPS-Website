let userName = "";
let userWins = 0;
let computerWins = 0;
let roundsPlayed = 0;
let userScore = 0;
let computerScore = 0;

const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log("Error! Invalid input. Please choose 'rock', 'paper', or 'scissors'.");
    }
};

const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3);  

    if (randomNumber === 0) {
        return 'rock';
    } else if (randomNumber === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

const determineWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    }

    if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            return "Computer wins!";
        } else {
            userScore++;
            return "You win!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            return "Computer wins!";
        } else {
            userScore++;
            return "You win!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            return "Computer wins!";
        } else {
            userScore++;
            return "You win!";
        }
    }
};

// Reset the game
function resetGame() {
    userScore = 0;
    computerScore = 0;
    roundsPlayed = 0;
    document.getElementById('userScore').innerText = `You: ${userScore}`;
    document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
    document.getElementById('choose').innerText = `Waiting...`;
    document.getElementById('chose').innerText = `Go`;
    document.getElementById('result').innerText = "";
    document.getElementById('roundCounter').innerText = "Round: 0/3";
    document.getElementById('resetButton').style.display = 'none'; 
}

// Play the game
function playGame(userChoice) {
    if (roundsPlayed >= 3) {
        document.getElementById('result').innerText = "Game is over! Reset to play again.";
        return;
    }

    const computerChoice = getComputerChoice();

    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    document.getElementById('choose').innerText = `Computer has selected: ${computerChoice}`;
    document.getElementById('chose').innerText = `You have selected: ${userChoice}`;

    const result = determineWinner(userChoice, computerChoice);
    console.log(result);

    document.getElementById('result').innerText = result;

    roundsPlayed++;
    document.getElementById('roundCounter').innerText = `Round: ${roundsPlayed}/3`;

    if (roundsPlayed === 3) {
        if (userScore > computerScore) {
            document.getElementById('result').innerText = "You win the game!";
        } else if (computerScore > userScore) {
            document.getElementById('result').innerText = "Computer wins the game!";
        } else {
            document.getElementById('result').innerText = "It's a tie!";
        }

        document.getElementById('resetButton').style.display = 'block';  
    }

    document.getElementById('userScore').innerText = `You: ${userScore}`;
    document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
}

document.getElementById('resetButton').addEventListener('click', resetGame);
