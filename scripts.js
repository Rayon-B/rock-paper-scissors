// getComputerChoice() 
// this function needs to return a random choice of rock paper or scissors
// try researching Math

let optionsRPS = ["Rock", "Paper", "Scissors"]

function getComputerChoice() {
   return optionsRPS[(Math.floor(Math.random() * optionsRPS.length))];
}



// playRound()
// take the user and computers choices and alert the winner
// steps...
// it will compare two inputs
// it will know each win condition 
// it will display a message on win


const playerSelection = prompt("Pick one: ")
const computerSelection = getComputerChoice()

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        if (computerSelection == "Paper") {
            alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}`);
        }
        else if (computerSelection == "Scissors") {
            alert(`You won! You choose ${playerSelection} vs. ${computerSelection}`);
        } 
        else {
            alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}`);
        }
    } else if (playerSelection == "Paper"){
        if (computerSelection == "Rock") {
            alert(`You Won! You choose ${playerSelection} vs. ${computerSelection}`);
        }
        if (computerSelection == "Scissors") {
            alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}`);
        }
        else {
            alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}`);
        }
    } else if (playerSelection == "Scissors"){
        if (computerSelection == "Rock") {
            alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}`);
        }
        if (computerSelection == "Paper") {
            alert(`You won! You choose ${playerSelection} vs. ${computerSelection}`);
        }
        else {
            alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}`);
        }
    } else {
        alert(`I'm not sure! You choose ${playerSelection} vs. ${computerSelection}`);
    }
}

playRound(playerSelection, computerSelection)

