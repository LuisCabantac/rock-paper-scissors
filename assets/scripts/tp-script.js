const emojiIconsPo = document.querySelector("#result-p1");
const emojiIconsPt = document.querySelector("#result-p2");
const btnSelectionPo = document.querySelectorAll(".btn-selection-p1");
const btnSelectionPt = document.querySelectorAll(".btn-selection-p2");
const btnResult = document.querySelector("#result-both");
const resetBtn = document.querySelector("#reset-btn");
let playerOneSelection = "";
let playerTwoSelection = "";
let playerOneScore = 0;
let playerTwoScore = 0;
let tieScore = 0;

function getPlayerOneSelection () {
  playerOneSelection = this.value;
  console.log(playerOneSelection)
};

function getPlayerTwoSelection () {
  playerTwoSelection = this.value;
  console.log(playerTwoSelection)
};

btnSelectionPo.forEach(el => {
  el.addEventListener("click", getPlayerOneSelection);
});

btnSelectionPt.forEach(el => {
  el.addEventListener("click", getPlayerTwoSelection);
});

document.addEventListener("keydown", event => {
  const key = event.key.toUpperCase();
  if (key === "A" || key === "S" || key === "D" ) {
    if (key === "A") {
      playerOneSelection = "✊";
    } else if (key === "S") {
      playerOneSelection = "✋";
    } else if (key === "D") {
      playerOneSelection = "✌️";
    }
  }
});

document.addEventListener("keydown", event => {
  const key = event.key.toUpperCase();
  if (key === "J" || key === "K" || key === "L" ) {
    if (key === "J") {
      playerTwoSelection = "✊";
    } else if (key === "K") {
      playerTwoSelection = "✋";
    } else if (key === "L") {
      playerTwoSelection = "✌️";
    }
  }
});

btnResult.addEventListener("click", () => {
  getResult();
});

document.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("result-both").click();
  }
});

resetBtn.addEventListener("click", () => {
    resetAll();
});

document.addEventListener("keyup", event => {
  if (event.code === "Space") {
    resetAll();
  }
});

function resetAll() {
    playerOneSelection = "";
    playerTwoSelection = "";
    playerOneScore = 0;
    playerTwoScore = 0;
    tieScore = 0;
    emojiIconsPo.textContent = `-`;
    emojiIconsPo.style.color = "#666666";
    emojiIconsPt.textContent = `-`;
    emojiIconsPt.style.color = "#666666";
    updateScore();
};

function getResult() {
  if (playerOneSelection && playerTwoSelection) {
    playRound(playerOneSelection, playerTwoSelection);

    const result = playRound(playerOneSelection, playerTwoSelection);
    if (result === 'win') {
      playerOneScore++;
    } else if (result === "tie") {
      tieScore++;
    } else {
      playerTwoScore++;
    }
    playerOneSelection = "";
    playerTwoSelection = "";
    setTimeout(() => {
      updateScore();
    }, 1000)
  }
}

function playRound(playerOneSelection, playerTwoSelection) {
  let playerOne = playerOneSelection;
  let playerTwo = playerTwoSelection;
  if (playerOne === playerTwo ) {
    emojiIconsPo.style.color = "#666666";
    emojiIconsPt.style.color = "#666666";
    emojiIconsPo.textContent = `-`;
    emojiIconsPt.textContent = `-`;
    setTimeout(() => {
    emojiIconsPo.textContent = "It's a tie!";
    emojiIconsPt.textContent = "It's a tie!";
    emojiIconsPo.style.color = "#3498DB";
    emojiIconsPt.style.color = "#3498DB";
    emojiIconsPo.style.transform = "scale(1.1)";
    emojiIconsPt.style.transform = "scale(1.1)";
    }, 1000)
    return "tie";
  }

  if (
    (playerOne === "✊" && playerTwo === "✌️") ||
    (playerOne === "✋" && playerTwo === "✊") ||
    (playerOne === "✌️" && playerTwo === "✋")
  ) {
    emojiIconsPo.style.color = "#666666";
    emojiIconsPt.style.color = "#666666";
    emojiIconsPo.textContent = `-`;
    emojiIconsPt.textContent = `-`;
    setTimeout(() => {
    emojiIconsPo.textContent = `You Win! ${playerOneSelection} beats ${playerTwoSelection}`;
    emojiIconsPo.style.color = "#2ECC71";
    emojiIconsPt.textContent = `You Lose! ${playerTwoSelection} beats ${playerOneSelection}`;
    emojiIconsPt.style.color = "#E74C3C";
    emojiIconsPo.style.transform = "scale(1.1)";
    emojiIconsPt.style.transform = "scale(1.1)";
    }, 1000)
    return "win"
  } else {
    emojiIconsPo.style.color = "#666666";
    emojiIconsPt.style.color = "#666666";
    emojiIconsPo.textContent = `-`;
    emojiIconsPt.textContent = `-`;
    setTimeout(() => {
    emojiIconsPo.textContent = `You Lose! ${playerTwoSelection} beats ${playerOneSelection}`;
    emojiIconsPo.style.color = "#E74C3C";
    emojiIconsPt.textContent = `You Win! ${playerTwoSelection} beats ${playerOneSelection}`;
    emojiIconsPt.style.color = "#2ECC71";
    emojiIconsPo.style.transform = "scale(1.1)";
    emojiIconsPt.style.transform = "scale(1.1)";
    }, 1000)
    return "lose"
  }
}

function updateScore() {
  document.querySelector("#won-text-p1").textContent = playerOneScore;
  document.querySelector("#lose-text-p1").textContent = playerTwoScore;
  document.querySelector("#draw-text-p1").textContent = tieScore;
  document.querySelector("#won-text-p2").textContent = playerTwoScore;
  document.querySelector("#lose-text-p2").textContent = playerOneScore;
  document.querySelector("#draw-text-p2").textContent = tieScore;
}