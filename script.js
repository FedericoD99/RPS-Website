let userName = "";
let userWins = 0;
let computerWins = 0;
let roundsPlayed = 0;
userScore = 0
computerScore = 0


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
      userScore++
      document.getElementById('userScore').innerText =`You: ${userScore}`;
      return computerChoice === 'paper' ? "Computer wins!" : "You win!";
    }
  
    if (userChoice === 'paper') {
      userScore++
      document.getElementById('userScore').innerText =`You: ${userScore}`;
      return computerChoice === 'scissors' ? "Computer wins!" : "You win!";
      
    }
  
    
    if (userChoice === 'scissors') {
      userScore++
      document.getElementById('userScore').innerText =`You: ${userScore}`;
      return computerChoice === 'rock' ? "Computer wins!" : "You win!";
    }

    

  };
  
  
 function playGame(userChoice){
 
    
    const computerChoice = getComputerChoice();
  
    console.log(`User chose: ${userChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    document.getElementById('choose').innerText = `Computer has selected: ${computerChoice}`;
    document.getElementById('chose').innerText = `User has selected: ${userChoice}`;
  
    
    const result = determineWinner(userChoice, computerChoice);
    console.log(result);
  };

  



  
  
  
  
  

