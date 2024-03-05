function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    let computerChoice;
    switch (randomNumber) {
        case 0:
            computerChoice = "Rock";
            break;
        case 1:
            computerChoice = "Paper";
            break;
        case 2:
            computerChoice = "Scissors";
            break;
    }
    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    const player = playerSelection.toLowerCase();
    const computer = computerSelection.toLowerCase();
    
    if (player === computer) {
        return "It's a tie!";
    }
    
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'paper' && computer === 'rock') ||
        (player === 'scissors' && computer === 'paper')
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    }
    
    return `You Lose! ${computerSelection} beats ${playerSelection}`;
}