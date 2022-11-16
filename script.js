function getComputerChoice() {
    let randomNumber = (Math.floor(Math.random() * 3));
    switch (randomNumber) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

function getPlayerChoice() {
    let choiceNumber = prompt("Enter Choice: \n1.Rock \n2.Paper \n3.Scissor");
    switch (parseInt(choiceNumber)) {
        case 1:
            return "Rock";
        case 2:
            return "Paper";
        case 3:
            return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Paper") || 
        (playerSelection == "Scissors" && computerSelection == "Rock") || 
        (playerSelection == "Paper" && computerSelection == "Scissors")) {
            return "You lose";
        }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Scissors" && computerSelection == "Paper") || 
        (playerSelection == "Paper" && computerSelection == "Rock")) {
            return "You Win";
        }
    else {
        return "Draw";
    }
}

function game() {
    for (let i = 0; i < 5 ; i++){
        console.log("Round " + (i + 1));
        const computerSelection = getComputerChoice();
        const playerSelection = getPlayerChoice();
        playRound(playerSelection, computerSelection);
        console.log("You chose "+playerSelection+" and Computer chose "+computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
}

console.log(game());