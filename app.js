function getComputerChoice(){
    rps = ['rock', 'paper', 'scissors'];
    choice = rps[Math.floor(Math.random() * rps.length)];
    return choice;
  }
  
  let computerScore = 0;
  let playerScore = 0;
  
  function playRound(){
    playerSelection = prompt('Choose rock, paper or scissors: ')
    playerSelection = playerSelection.toLowerCase();
    computerSelection = getComputerChoice();
    console.log(`The computer chose ${computerSelection}`);
    
    if (playerSelection !== 'rock' && playerSelection !== 'paper' && playerSelection !== 'scissors'){
      console.log('Invalid input');
      return;
    }
    else if (playerSelection === computerSelection){
      console.log('It\'s a draw')
    }
    else if ((playerSelection === 'rock' && computerSelection === 'scissors') 
      || (playerSelection === 'scissors' && computerSelection === 'paper')
      || (playerSelection === 'paper' && computerSelection === 'rock')){
      console.log(`You win! ${playerSelection} beats ${computerSelection}`)
      playerScore += 1;
    }
    else {
      console.log(`You lose, ${computerSelection} beats ${playerSelection}`)
      computerScore += 1;
    }
  }
  
  function game(){
    rounds = parseInt(prompt('How many rounds would you like to play?'))
    for (i = 0; i < rounds; i++){
      playRound();
      console.log(`The score is Player ${playerScore}-${computerScore} Computer`)
    }
    if (playerScore > computerScore){
      console.log('You win!')
    }
    else if(playerScore < computerScore){
      console.log('You lose.')
    }
    else {
      console.log('It\'s a draw.')
    }
  }
  
  console.log(game());