const options = ['Rock', 'Paper', 'Scissors']

// to get a random choice from computer 

function getComputerChoice() {
    const computerSelection =  options[Math.floor(Math.random() * options.length)];
    return computerSelection.toUpperCase();
}

console.log(getComputerChoice())

// to get a choice from options from the player

function getPlayerChoice() {
    const playerSelection = prompt('What is your choice').toUpperCase()

    if ((playerSelection == "ROCK") || (playerSelection == "PAPER") || (playerSelection == "SCISSORS")) {
        return playerSelection;
    } else {
        alert('Wrong choice');
        getPlayerChoice();
    }
}

function playRound(playerSelection, computerSelection){
    let a = getPlayerChoice();
    let b = getComputerChoice().toUpperCase();
    let winner;
  
    if (a == 'ROCK' && b == 'PAPER') {
        let winner = 'Computer';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'ROCK' && b == 'SCISSORS') {
        let winner = 'Player';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'ROCK' && b == 'ROCK' ) {
        let winner = 'Draw';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'SCISSORS' && b == 'PAPER') {
        let winner= 'Player';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'SCISSORS' && b == 'ROCK') {
        let winner = 'Computer';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'SCISSORS' && b == 'SCISSORS') {
        let winner = 'Draw';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'PAPER' && b == 'PAPER') {
        let winner = 'Draw';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'PAPER' && b == 'ROCK') {
        let winner = 'Player';
        console.log(`The winner is ${winner}`);
        return winner;
    } else if (a == 'PAPER' && b == 'SCISSORS') {
        let winner = 'Computer';
        console.log(`The winner is ${winner}`);
        return winner;
    }
}


function game(){
    let scoreComputer = 0;
    let scorePlayer = 0;
    let scoreDraw = 0;

    for (let i =0; i< 5; i++){
        winner = playRound();
        if (winner == 'Computer'){
            scoreComputer += 1;
        } else if (winner == 'Player'){
            scorePlayer += 1;
        } else {
            scoreDraw += 1;
        }
    }

    console.log(`player has won ${scorePlayer} rounds, computer has won ${scoreComputer} rounds and ${scoreDraw} rounds are draw`)
}

game();
