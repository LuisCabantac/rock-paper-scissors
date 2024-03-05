function getComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3);

    let ComputerChoice;
    switch (randomNumber) {
        case 0:
            console.log("Rock");
            break;
        case 1:
            console.log("Paper");
            break;
        case 2:
            console.log("Scissors");
            break;
    }
    return ComputerChoice;
}