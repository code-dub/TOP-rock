const options = ['Rock', 'Paper', 'Scissors']

// to get a random choice from computer 

function getComputerChoice() {
    const computerSelection =  options[Math.floor(Math.random() * options.length)];
    return computerSelection.toUpperCase();
}


// to get a choice from options from the player

function getPlayerChoice() {
    const playerSelection = prompt('What is your choice').toUpperCase()

    if ((playerSelection == "ROCK") ||                 (playerSelection == "PAPER") ||
    (playerSelection == "SCISSORS")) {
        return playerSelection;
    } else {
        alert('Wrong choice');
        getPlayerChoice();
    }
}


function playRound(playerSelection, computerSelection){
    const a = getPlayerChoice();
    let b = getComputerChoice().toUpperCase();
    let winner = [];
  
    if ((a == 'ROCK' && b == 'PAPER') || 
        (a == 'SCISSORS' && b == 'ROCK') || 
        (a == 'PAPER' && b == 'SCISSORS')) {
            return winner=['Computer',`You lose! ${a} beats ${b}`];
    } else if ((a == 'ROCK' && b == 'SCISSORS') || 
        (a == 'SCISSORS' && b == 'PAPER') || 
        (a == 'PAPER' && b == 'ROCK')) {
            return winner=['Player',`You win! ${b} beats ${a}`];
    } else {
        return winner=['draw','Round is draw'];
    } 
}

function game(){
    let scoreComputer = 0;
    let scorePlayer = 0;
    let scoreDraw = 0;

    for (let i =0; i< 5; i++){
        const winner = playRound();
        if (winner[0] == 'Computer'){ 
            console.log(winner[1]);
            scoreComputer += 1;
        } else if (winner[0] == 'Player'){
            console.log(winner[1]);
            scorePlayer += 1;
        } else {
            console.log('round draw');
            scoreDraw += 1;
        }
    }

    scoreComputer == scorePlayer ? console.log("It is a draw") : scoreComputer > scorePlayer ? console.log(`The winner is computer with wins in ${scoreComputer} rounds`) : console.log(`The winner is player with wins in ${scorePlayer} rounds`)

    console.log(`player has won ${scorePlayer} rounds, computer has won ${scoreComputer} rounds and ${scoreDraw} rounds are draw`)
}

game();
