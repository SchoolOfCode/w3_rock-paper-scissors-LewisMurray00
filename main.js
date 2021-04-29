//Assigning the buttons to a JavaScript variable
const computerGuess = document.querySelector(".computerGuess");
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const guessResult = document.querySelector(".guessResult");
const userName = document.querySelector("#uName");
const scoreChecker = document.querySelector(".scores");
//game variables
let userScore = 0;
let computerScore = 0;

//Randomly generated word

function computerPlay(){
    const move = ['rock', 'paper', 'scissors']
    return move[Math.floor(Math.random() * 3)];
}

//Rock function
function checkRock(){
    let newGuess = computerPlay();
    if (newGuess === "scissors"){
        userScore++;
        guessResult.innerText =" You win and you now have " + userScore + " points";
    } else if (newGuess === "paper"){
        computerScore++;
        guessResult.innerText = "You lose and the computer now has " + computerScore + " points";
    } else{
        guessResult.innerText = "It is a tie";
    }
}

rockButton.addEventListener("click", checkRock);

//Paper function
function checkPaper(){
    let newGuess = computerPlay();
    if (newGuess === "rock"){
        userScore++;
        guessResult.innerText = "You win and you now have " + userScore + " points";
    } else if (newGuess === "scissors"){
        computerScore++;
        guessResult.innerText = "You lose and the computer now has " + computerScore + " points";
    } else{
        guessResult.innerText = "It is a tie";
    }
}

paperButton.addEventListener("click", checkPaper);

//Scissors function
function checkScissors(){
    let newGuess = computerPlay();
    if (newGuess === "paper"){
        userScore++;
        guessResult.innerText = "You win and you now have " + userScore + " points";
    } else if (newGuess === "rock"){
        computerScore++;
        guessResult.innerText = "You lose and the computer now has " + computerScore + " points";
    } else{
        guessResult.innerText = "It is a tie";
    }
}

scissorsButton.addEventListener("click", checkScissors);

