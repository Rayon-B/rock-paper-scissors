// // getComputerChoice() 
// // this function needs to return a random choice of rock paper or scissors
// // try researching Math

// let optionsRPS = ["Rock", "Paper", "Scissors"]

// function getComputerChoice() {
//    return optionsRPS[(Math.floor(Math.random() * optionsRPS.length))];
// }



// // // playRound()
// // // take the user and computers choices and alert the winner
// // // steps...
// // // it will compare two inputs
// // // it will know each win condition 
// // // it will display a message on win


// const playerSelection = prompt("Pick one: ").toLowerCase()
// const computerSelection = getComputerChoice().toLocaleLowerCase()

// function playRound(playerSelection, computerSelection) {



//     if (playerSelection == "rock") {
//         if (computerSelection == "paper") {
//             alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}`);
//         }
//         else if (computerSelection == "scissors") {
//             alert(`You won! You choose ${playerSelection} vs. ${computerSelection}`);
//         } 
//         else {
//             alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}`);
//         }





//     } else if (playerSelection == "paper"){
//         if (computerSelection == "rock") {
//             alert(`You Won! You choose ${playerSelection} vs. ${computerSelection}`);
//         }
//         if (computerSelection == "scissors") {
//             alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}`);
//         }
//         else {
//             alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}`);
//         }





//     } else if (playerSelection == "scissors"){
//         if (computerSelection == "rock") {
//             alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}`);
//         }
//         if (computerSelection == "paper") {
//             alert(`You won! You choose ${playerSelection} vs. ${computerSelection}`);
//         }
//         else {
//             alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}`);
//         }





//     } else {
//         alert(`I'm not sure! You choose ${playerSelection} vs. ${computerSelection}`);
//     }
// }

// playRound(playerSelection, computerSelection)


// play a round of RPS based on the game(parameter) aka number of rounds
function playGames(rounds) {
    let playerScore = 0;
    let computerScore = 0;
    let gameStart = prompt("Would you like to play a game of Rock, Paper, Scissors? (Y/N): ").toUpperCase();
    let optionsRPS = ["Rock", "Paper", "Scissors"];

    // loop rounds with the user input of "y" and cap set to rounds parameter 
    while (gameStart == "Y" && playerScore < rounds && computerScore < rounds) {

        // player selection
        alert("You started a game!")
        const playerSelection = prompt("Pick Rock, Paper, or Scissors: ").toLowerCase()
        // computer selection
        function getComputerChoice() {
            return optionsRPS[(Math.floor(Math.random() * optionsRPS.length))];
        }
        
        const computerSelection = getComputerChoice().toLocaleLowerCase()

        // Rock, Paper, Scissors game, Match player and computer selection and track score
        function playRound(playerSelection, computerSelection) {

            if (playerSelection == "rock") {
                if (computerSelection == "paper") {
                    computerScore++;
                    alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }
                else if (computerSelection == "scissors") {
                    playerScore++;
                    alert(`You won! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                } 
                else {
                    alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }
            } else if (playerSelection == "paper"){
                if (computerSelection == "rock") {
                    playerScore++;
                    alert(`You Won! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }
                if (computerSelection == "scissors") {
                    computerScore++;
                    alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }
                else {
                    alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }
            } else if (playerSelection == "scissors"){
                if (computerSelection == "rock") {
                    computerScore++;
                    alert(`You lost! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }
                if (computerSelection == "paper") {
                    playerScore++;
                    alert(`You won! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }
                else {
                    alert(`its a tie! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
                }  
            } else {
                alert(`I'm not sure! You choose ${playerSelection} vs. ${computerSelection}\nYour Score: ${playerScore} Computer Score: ${computerScore}`);
            }
        }
        
        playRound(playerSelection, computerSelection)
        if (playerScore == rounds || computerScore == rounds)
            alert(`Game over!\nPlayer Score: ${playerScore}\nComputer Score: ${computerScore}`)    

    }


}

playGames(2)

