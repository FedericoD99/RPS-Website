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
            document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
            return "Computer wins!";
        } else {
            userScore++;
            document.getElementById('userScore').innerText = `You: ${userScore}`;
            return "You win!";
        }
    }

    if (userChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
            return "Computer wins!";
        } else {
            userScore++;
            document.getElementById('userScore').innerText = `You: ${userScore}`;
            return "You win!";
        }
    }

    if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            document.getElementById('computerScore').innerText = `Computer: ${computerScore}`;
            return "Computer wins!";
        } else {
            userScore++;
            document.getElementById('userScore').innerText = `You: ${userScore}`;
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
    document.getElementById('chose').innerText = `Input shows here`;
    document.getElementById('result').innerText = "";
    document.getElementById('resetButton') = 'none'; 
}

// Play the game
function playGame(userChoice) {

    checkIfGameOver();
    const computerChoice = getComputerChoice();

    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    document.getElementById('choose').innerText = `Computer has selected: ${computerChoice}`;
    document.getElementById('chose').innerText = `You have selected: ${userChoice}`;

    const result = determineWinner(userChoice, computerChoice);
    console.log(result);

    responseText.innerText = result;

   
    if (userScore === 3) {
        document.getElementById('result').innerText = "You win the game!";
        document.getElementById('resetButton').innerText = '';  
    } else if (computerScore === 3) {
        document.getElementById('result').innerText = "Computer wins the game!";
        document.getElementById('resetButton').innerText = '';  
    }
}



function checkIfGameOver() {

    if (userScore === 5) {
      prompt('You win (click enter)')
      userScore = 0;
  
      computerScore = 0;
      document.getElementById('computerScore').innerText = computerScore
      document.getElementById('userScore').innerText = userScore
  
    } else if (computerScore === 5) {
      prompt('AI wins (click enter)')
      userScore = 0
      computerScore = 0
      document.getElementById('computerScore').innerText = computerScore
      document.getElementById('userScore').innerText = userScore
    }
  
  }


document.getElementById('resetButton').addEventListener('click', resetGame);