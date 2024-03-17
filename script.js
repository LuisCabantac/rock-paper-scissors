const emojiIcons = document.querySelector("#result");
const playerSelection = document.querySelectorAll(".btn-selection");
let selection = "";
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

playerSelection.forEach(el =>{
  el.addEventListener("click", function() {
    selection = this.value;
    const computerSelection = getComputerChoice();;
    playRound(selection, computerSelection);

    const result = playRound(selection, computerSelection);
    if (result === 'win') {
      playerScore++;
    } else if (result === "tie") {
      tieScore++;
    } else {
      computerScore++;
    }
    updateScore();
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "rock";
      break;
    case 1:
      computerChoice = "paper";
      break;
    case 2:
      computerChoice = "scissors";
      break;
  }
  return computerChoice;
}

function playRound(selection, computerSelection) {
  let player = selection;
  let computer = computerSelection;
  if (player === computer ) {
    emojiIcons.textContent = "It's a tie!";
    return "tie";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    emojiIcons.textContent = `You Win! ${selection} beats ${computerSelection}`;
    return "win"
  } else {
    emojiIcons.textContent = `You Lose! ${computerSelection} beats ${selection}`;
    return "lose"
  }
}

function updateScore() {
  document.querySelector("#won-text").textContent = playerScore;
  document.querySelector("#lose-text").textContent = computerScore;
  document.querySelector("#draw-text").textContent = tieScore;
}