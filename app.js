function getComputerChoice() {
  rps = ['rock', 'paper', 'scissors'];
  choice = rps[Math.floor(Math.random() * rps.length)];
  return choice;
}

let computerScore = 0;
let playerScore = 0;

function playRound(choice) {
  playerSelection = choice;
  computerSelection = getComputerChoice();

  if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors') {
    document.getElementById('score').innerHTML = 'Invalid input';
  }
  else if ((playerSelection === 'rock' && computerSelection === 'scissors')
    || (playerSelection === 'scissors' && computerSelection === 'paper')
    || (playerSelection === 'paper' && computerSelection === 'rock')) {
    playerScore += 1;
  }
  else if (playerSelection === computerSelection) {
    playerScore += 0;
    computerScore += 0;
  }
  else {
    computerScore += 1;
  }

  document.getElementById('score').innerHTML = `Player ${playerScore} - ${computerScore} Computer`;
  document.getElementById('selected').innerHTML = `Player chose ${playerSelection}, Computer chose ${computerSelection}`;

  if (playerScore === 5) {
    document.getElementById('selected').innerHTML = `Player wins!`;
    computerScore = 0;
    playerScore = 0;
    return;
  }
  else if (computerScore === 5) {
    document.getElementById('selected').innerHTML = 'Computer wins!';
    computerScore = 0;
    playerScore = 0;
    return;
  }
}