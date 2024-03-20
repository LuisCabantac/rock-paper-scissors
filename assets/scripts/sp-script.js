const emojiIcons = document.querySelector("#result");
const btnSelection = document.querySelectorAll(".btn-selection");
let playerSelection = "";
let playerScore = 0;
let computerScore = 0;
let tieScore = 0;

btnSelection.forEach(el =>{
  el.addEventListener("click", function() {
    playerSelection = this.value;
    const computerSelection = getComputerChoice();;
    playRound(playerSelection, computerSelection);

    const result = playRound(playerSelection, computerSelection);
    if (result === 'win') {
      playerScore++;
    } else if (result === "tie") {
      tieScore++;
    } else {
      computerScore++;
    }
    setTimeout(() => {
    updateScore();
  }, 1000)
  });
});

function getComputerChoice() {
  const randomNumber = Math.floor(Math.random() * 3);

  let computerChoice;
  switch (randomNumber) {
    case 0:
      computerChoice = "✊";
      break;
    case 1:
      computerChoice = "✋";
      break;
    case 2:
      computerChoice = "✌️";
      break;
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let player = playerSelection;
  let computer = computerSelection;
  if (player === computer ) {
    emojiIcons.style.color = "#666666";
    emojiIcons.textContent = `-`;
    setTimeout(() => {
    emojiIcons.textContent = "It's a tie!";
    emojiIcons.style.color = "#3498DB";
    emojiIcons.style.transform = "scale(1.1)";
  }, 1000)
    return "tie";
  }

  if (
    (player === "✊" && computer === "✌️") ||
    (player === "✋" && computer === "✊") ||
    (player === "✌️" && computer === "✋")
  ) {
    emojiIcons.style.color = "#666666";
    emojiIcons.textContent = `-`;
    setTimeout(() => {
    emojiIcons.textContent = `You Win! ${playerSelection} beats ${computerSelection}`;
    emojiIcons.style.color = "#2ECC71";
    emojiIcons.style.transform = "scale(1.1)";
  }, 1000)
    return "win"
  } else {
    emojiIcons.style.color = "#666666";
    emojiIcons.textContent = `-`;
    setTimeout(() => {
    emojiIcons.textContent = `You Lose! ${computerSelection} beats ${playerSelection}`;
    emojiIcons.style.color = "#E74C3C";
    emojiIcons.style.transform = "scale(1.1)";
  }, 1000)
    return "lose"
  }
}

function updateScore() {
  document.querySelector("#won-text").textContent = playerScore;
  document.querySelector("#lose-text").textContent = computerScore;
  document.querySelector("#draw-text").textContent = tieScore;
}