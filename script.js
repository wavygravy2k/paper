var humanScore = 0;
var computerScore = 0;

function getComputerChoice(){

    var pcChoice = Math.floor(Math.random() * 3) + 1;

    switch(pcChoice) {
        
        case 1:

            pcChoice = 'rock';

        break;

        case 2:

            pcChoice = 'paper';

        break;        

        case 3:

            pcChoice = 'scissors';

        break;        

    }

    return pcChoice;
}

function getHumanChoice(){

   var sign = prompt("'rock','paper','scissors'");

    return sign;
    
}

// Play multiple rounds

for (let i = 0; i < 5; i++) playGame(i);

if (humanScore > computerScore) {
    console.log(`You won with a score of ${humanScore}! Congrats! Refresh the page to play again.`)
} else if (humanScore < computerScore) {
    console.log(`The computer won with a score of ${computerScore}! Refresh the page to play again.`)
} else {
    console.log(`You tied with scores of ${humanScore}! Refresh the page to play again.`)
}

function playGame(){

    function playRound(humanChoice, computerChoice) {
        
        if (humanChoice == "rock") {
            if (computerChoice == "scissors") {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
                humanScore += 1;
            } else if (computerChoice == "paper") {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
            } else {
                console.log(`You picked the same choice! No winners this round.`);
            }
        }

        if (humanChoice == "paper") {
            if (computerChoice == "rock") {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
                humanScore += 1;
            } else if (computerChoice == "scissors") {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
            } else {
                console.log(`You picked the same choice! No winners this round.`);
            }
        }

        if (humanChoice == "scissors") {
            if (computerChoice == "paper") {
                console.log(`You win this round! ${humanChoice} beats ${computerChoice}.`);
                humanScore += 1;
            } else if (computerChoice == "rock") {
                console.log(`You lose this round! ${computerChoice} beats ${humanChoice}.`);
                computerScore += 1;
            } else {
                console.log(`You picked the same choice! No winners this round.`);
            }
        }
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();

    playRound(humanSelection, computerSelection);

    console.log(`Scores: You - ${humanScore}, Computer - ${computerScore}`);

}

