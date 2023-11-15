/*

#1 Take computer selection
#2 Get player selection -> validate player selection -> use correct case for word
#3 check if score of computer or player is less than 5 -> play round else display final result
#4 Log total score with each play plus score of that round
#5 Display final score and reset counters

*/



const options = ['Rock', 'Paper', 'Scissors']
let playerScore = 0;
let computerScore = 0; 
let tieScore = 0;

// to get a random choice from computer 

function getComputerChoice() {
    const computerSelection =  options[Math.floor(Math.random() * options.length)];
    return computerSelection.toLowerCase();
}


// to get a choice from options from the player

// function getPlayerChoice() {
//     const playerSelection = prompt('What is your choice').toUpperCase()

//     if ((playerSelection == "ROCK") ||                 (playerSelection == "PAPER") ||
//     (playerSelection == "SCISSORS")) {
//         return playerSelection;
//     } else {
//         alert('Wrong choice');
//         getPlayerChoice();
//     }
// }

// New introduction - to get playerSelection via buttons

const btnRock = document.querySelector('.rock');
const btnPaper = document.querySelector('.paper');
const btnScissors = document.querySelector('.scissors');

btnRock.addEventListener('click', (e) => {
    console.log(btnRock.textContent);
    playerSelection = btnRock.textContent.toLowerCase();
    playRound(playerSelection);

})

btnPaper.addEventListener('click', (e) => {
    console.log(btnPaper.textContent);
    playerSelection = btnPaper.textContent.toLowerCase();
    playRound(playerSelection);
})

btnScissors.addEventListener('click', (e) => {
    console.log(btnScissors.textContent);
    playerSelection = btnScissors.textContent.toLowerCase();
    playRound(playerSelection);

})


// play one round when called 
function playRound(playerSelection){
    // const a = getPlayerChoice();  -> changed to input via eventListener
    if (playerScore == 5 || computerScore == 5){
        // gameOver();
        finalScore();
    }
    let computerSelection = getComputerChoice();
  
    if (computerSelection == playerSelection){
        tieScore +=1;
        printRoundScore('Draw');
    } else if ((playerSelection == 'rock' && computerSelection == 'scissors') || 
        (playerSelection == 'scissors' && computerSelection == 'paper') || 
        (playerSelection == 'paper' && computerSelection == 'rock')) {
            playerScore += 1;
            printRoundScore('Player');
    } else {
        computerScore += 1;
        printRoundScore('Computer');
    } 

    if (playerScore == 5 || computerScore == 5){
        finalScore();
        // gameOver();
    }
}

function printRoundScore(winner) { 
    const firstDiv = document.querySelector('.firstDiv');
    const para = document.createElement('div');
    firstDiv.textContent = '';
    if(winner == 'Draw') {
        para.textContent = `This round is a draw. Current Score     Computer: ${computerScore},     Player: ${playerScore},     Total Draws: ${tieScore}.`
        para.style.setProperty('padding','20px');
        para.style.cssText = 'color: #C4DFE6; font-size: 20px; font-weight: bold; text-align: center;';
        para.style.setProperty('padding','20px');

    } else if(winner == 'Player') {
        para.textContent = `Congratulations! You win this round. 
        Current Score     Computer: ${computerScore},     Player: ${playerScore},     Total Draws: ${tieScore}.`;
        para.style.cssText = 'color: #C4DFE6; font-size: 20px; font-weight: bold; text-align: center;';
        para.style.setProperty('padding','20px');
    } else {
        para.textContent = `Sorry, you lose this round. Current Score     Computer: ${computerScore},     Player: ${playerScore},     Total Draws: ${tieScore}.`;
        para.style.cssText = 'color: #C4DFE6; font-size: 20px; font-weight: bold; text-align: center;';
        para.style.setProperty('padding','20px');

    }

    firstDiv.appendChild(para);
}

function finalScore(){

    const newDiv = document.createElement('div');
    const parentDiv = document.querySelector('.firstDiv')

    if (playerScore == 5){
        parentDiv.textContent = '';
        newDiv.textContent = `The player has won the game. Final Score - Computer: ${computerScore} Player: ${playerScore} Total Draws: ${tieScore}`;
        newDiv.style.cssText = 'color: #C4DFE6; font-size: 20px; font-weight: bold; text-align: center;'
        newDiv.style.setProperty('padding','20px');

    } else {
        
        parentDiv.textContent = '';

        newDiv.textContent = `The computer has won the game. Final Score - Computer: ${computerScore} Player: ${playerScore} Total Draws: ${tieScore}`;
        newDiv.style.cssText = 'color: #C4DFE6; font-size: 20px; font-weight: bold; text-align: center;'
        newDiv.style.setProperty('padding','20px');  

    }

    parentDiv.appendChild(newDiv);

    computerScore = 0;
    playerScore = 0;
    tieScore = 0;
}

// function gameOver(){
//     const firstDiv = document.querySelector('.firstDiv');
//     // firstDiv.textContent ='';


// }
// Pre-UI logic
// function game(){
//     let scoreComputer = 0;
//     let scorePlayer = 0;
//     let scoreDraw = 0;

//     for (let i =0; i< 5; i++){
//         const winner = playRound();
//         if (winner[0] == 'Computer'){ 
//             console.log(winner[1]);
//             scoreComputer += 1;
//         } else if (winner[0] == 'Player'){
//             console.log(winner[1]);
//             scorePlayer += 1;
//         } else {
//             console.log('round draw');
//             scoreDraw += 1;
//         }
//     }

//     scoreComputer == scorePlayer ? console.log("It is a draw") : scoreComputer > scorePlayer ? console.log(`The winner is computer with wins in ${scoreComputer} rounds`) : console.log(`The winner is player with wins in ${scorePlayer} rounds`)

//     console.log(`player has won ${scorePlayer} rounds, computer has won ${scoreComputer} rounds and ${scoreDraw} rounds are draw`)
// }

// game();
