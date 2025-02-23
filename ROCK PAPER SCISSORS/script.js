// Get HTML elements
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const resultText = document.getElementById('result-text');
const winsDisplay = document.getElementById('wins');
const lossesDisplay = document.getElementById('losses');
const tiesDisplay = document.getElementById('ties');

// Initialize scores
let wins = 0;
let losses = 0;
let ties = 0;

// Function to generate computer's choice
function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

// Function to play the game
function playGame(userChoice) {
  const computerChoice = getComputerChoice();

  // Display choices
  userChoiceDisplay.textContent = userChoice;
  computerChoiceDisplay.textContent = computerChoice;

  // Determine the result
  let result = '';
  if (userChoice === computerChoice) {
    result = 'It\'s a tie!';
    ties++;
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'scissors' && computerChoice === 'paper') ||
    (userChoice === 'paper' && computerChoice === 'rock')
  ) {
    result = 'You win!';
    wins++;
  } else {
    result = 'You lose!';
    losses++;
  }

  // Display the result and update score
  resultText.textContent = result;
  updateScores();
}

// Function to update the score display
function updateScores() {
  winsDisplay.textContent = wins;
  lossesDisplay.textContent = losses;
  tiesDisplay.textContent = ties;
}

// Event listeners for user choice buttons
document.getElementById('rock').addEventListener('click', () => playGame('rock'));
document.getElementById('paper').addEventListener('click', () => playGame('paper'));
document.getElementById('scissors').addEventListener('click', () => playGame('scissors'));
