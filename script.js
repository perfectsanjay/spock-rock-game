import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";


const playerScoreEl = document.getElementById('playerScore')
const playerChoiceEl = document.getElementById('playerChoice');
const computerScoreEl = document.getElementById('computerScore')
const computerChoiceEL = document.getElementById('computerChoice')
const resultText = document.getElementById('resultText')

const playerRock = document.getElementById('playerRock')
const playerPaper = document.getElementById('playerPaper')
const playerScissors = document.getElementById('playerScissors')
const playerLizard = document.getElementById('playerLizard')
const playerSpock = document.getElementById('playerSpock')

const computerRock = document.getElementById('computerRock')
const computerPaper = document.getElementById('computerPaper')
const computerScissors = document.getElementById('computerScissors')
const computerLizard = document.getElementById('computerLizard')
const computerSpock = document.getElementById('computerSpock')

const allGameIcons = document.querySelectorAll('.far')

// console.log(allGameIcons)

const choices = {
  rock: { name: 'Rock', defeats: ['scissors', 'lizard'] },
  paper: { name: 'Paper', defeats: ['rock', 'spock'] },
  scissors: { name: 'Scissors', defeats: ['paper', 'lizard'] },
  lizard: { name: 'Lizard', defeats: ['paper', 'spock'] },
  spock: { name: 'Spock', defeats: ['scissors', 'rock'] },
};

let playerScoreNumber = 0
let computerScoreNumber = 0
let computerChoice = '';

// Reset all 'selected' icons
function resetSelected(){
  allGameIcons.forEach((icon) => {
    icon.classList.remove('selected')
  })
  stopConfetti()
  removeConfetti()
}
// reset score
function resetAll(){
  playerScoreNumber = 0
  computerScoreNumber = 0
  playerScoreEl.textContent = playerScoreNumber
  computerScoreEl.textContent = computerScoreNumber
  playerChoiceEl.textContent = ''
  computerChoiceEL.textContent = '';
  resultText.textContent = '';
  resetSelected();

}
window.resetAll = resetAll

// Random computer choice
function computerRandomChoice(){
  const computerChoiceNumber = Math.random();
  // console.log(computerChoiceNumber)
  if (computerChoiceNumber < 0.2) {
    computerChoice = 'rock';
  }
  else if (computerChoiceNumber <=0.4){
    computerChoice = 'paper';
  }
  else if (computerChoiceNumber <= 0.6){
    computerChoice = 'scissors'
  }else if (computerChoiceNumber <= 0.8){
    computerChoice = 'lizard';
  }else{
    computerChoice = 'spock'
  }
  
}

// add selectedc sytling and computer choice
function displayComputerChoice(){
  switch (computerChoice){
    case 'rock' :
      computerRock.classList.add('selected')
      computerChoiceEL.textContent = ' --- Rock';
      break;

    case 'paper':
      computerPaper.classList.add('selected')
      computerChoiceEL.textContent = ' --- Paper'
      break;
     
    case 'scissors':
      computerScissors.classList.add('selected');
      computerChoiceEL.textContent = ' ---Scissors';
      break;
    
    case 'lizard':
      computerLizard.classList.add('selected');
      computerChoiceEL.textContent = ' --- Lizard';
      break;
    case 'spock':
      computerSpock.classList.add('selected')
      computerChoiceEL.textContent = ' --- Spock';
      break;
      
    default:
      break;  
  }


}

function updateScore(playerChoice){
  if (playerChoice === computerChoice){
    resultText.textContent = "It's a tie";
  }else{
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1){
      startConfetti()
      resultText.textContent = "You Won!";
      playerScoreNumber++;
      playerScoreEl.textContent = playerScoreNumber
    }else{
      resultText.textContent = 'You Lost!';
      computerScoreNumber++;
      computerScoreEl.textContent = computerScoreNumber;
    }
  }
}

function checkResult(playerChoice){
  resetSelected();
  computerRandomChoice();
  displayComputerChoice();
  updateScore(playerChoice)
}



function select(playerChoice){
  checkResult(playerChoice)
  // Add 'selected' styling & playerchoice
  switch (playerChoice){
    case 'rock' :
      playerRock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Rock';
      break;

    case 'paper':
      playerPaper.classList.add('selected')
      playerChoiceEl.textContent = ' --- Paper'
      break;
     
    case 'scissors':
      playerScissors.classList.add('selected');
      playerChoiceEl.textContent = ' ---Scissors';
      break;
    
    case 'lizard':
      playerLizard.classList.add('selected');
      playerChoiceEl.textContent = ' --- Lizard';
      break;
    case 'spock':
      playerSpock.classList.add('selected')
      playerChoiceEl.textContent = ' --- Spock';
      break;
      
    default:
      break;  
  }

}
window.select = select;

resetAll()