let playerScore = 0;
let computerScore = 0;
let drawScore = 0;

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
        default:
            console.log("Please enter valid number!");
            return getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection) {
    if ((playerSelection == "Rock" && computerSelection == "Paper") || 
        (playerSelection == "Scissors" && computerSelection == "Rock") || 
        (playerSelection == "Paper" && computerSelection == "Scissors")) {
            computerScore++;
            return "You lose";
        }
    else if ((playerSelection == "Rock" && computerSelection == "Scissors") || 
        (playerSelection == "Scissors" && computerSelection == "Paper") || 
        (playerSelection == "Paper" && computerSelection == "Rock")) {
            playerScore++;
            return "You Win";
        }
    else {
        drawScore++;
        return "Draw";
    }
}

function gameResult(playerScore, computerScore) {
    if(playerScore>computerScore){
        return "Congrats! You win.";
    } else if (playerScore<computerScore){
        return "You lose!";
    } else {
        return "Draw!";
    }
}

function game() {
    let computerSelection = '';
    let playerSelection = '';

    for (let i = 0; i < 5 ; i++){
        console.log("Round " + (i + 1));
        computerSelection = getComputerChoice();
        playerSelection = getPlayerChoice();    
        
        console.log("You chose "+playerSelection+" and Computer chose "+computerSelection);
        console.log(playRound(playerSelection, computerSelection));
    }
    console.clear();
    console.log("Result is "+playerScore+" Win(s), "+drawScore+" Draw(s) and "+computerScore+" Loss(es).")
    console.log(gameResult(playerScore, computerScore));
}

console.log(game());