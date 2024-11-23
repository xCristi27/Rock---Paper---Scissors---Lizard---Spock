const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerScoreDisplay = document.getElementById("playerScoreDisplay");
const computerScoreDisplay = document.getElementById("computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  let result = "";

  if (playerChoice === computerChoice) {
    result = "IT'S A TIE";
  } else if (playerChoice === "rock") {
    result = computerChoice === "scissors" ? "YOU WIN!" : "YOU LOSE!";
  } else if (playerChoice === "paper") {
    result = computerChoice === "rock" ? "YOU WIN!" : "YOU LOSE!";
  } else if (playerChoice === "scissors") {
    result = computerChoice === "paper" ? "YOU WIN!" : "YOU LOSE!";
  }

  playerDisplay.textContent = `PLAYER: ${playerChoice}`;
  computerDisplay.textContent = `Computer: ${computerChoice}`;
  resultDisplay.textContent = result;

  resultDisplay.classList.remove("greenText", "redText");
  if (result === "YOU WIN!") {
    resultDisplay.classList.add("greenText");
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "YOU LOSE!") {
    resultDisplay.classList.add("redText");
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }
}