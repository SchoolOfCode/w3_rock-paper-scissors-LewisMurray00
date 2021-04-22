//DOM
const computerGuess = document.querySelector(".computerGuess");
const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");
const guessResult = document.querySelector(".guessResult");

//game variables
let userScore = 0;
let computerScore = 0;

//Randomly generated word

//let computerChoices = ["rock", "paper", "scissors"];
//let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];

//function randomComputerChoice(){
//    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
//}

//randomComputerChoice();

function computerPlay(){
    const move = ['rock', 'paper', 'scissors']
    return move[Math.floor(Math.random() * 3)];
}

function checkRock(){
    let newGuess = computerPlay();
    if (newGuess === "scissors"){
        guessResult.innerText = "You win";
    } else if (newGuess === "paper"){
        guessResult.innerText = "You lose";
    } else{
        guessResult.innerText = "It is a tie";
    }
}

rockButton.addEventListener("click", checkRock);

function checkPaper(){
    let newGuess = computerPlay();
    if (newGuess === "rock"){
        guessResult.innerText = "You win";
    } else if (newGuess === "scissors"){
        guessResult.innerText = "You lose";
    } else{
        guessResult.innerText = "It is a tie";
    }
}

paperButton.addEventListener("click", checkPaper);

function checkScissors(){
    let newGuess = computerPlay();
    if (newGuess === "paper"){
        guessResult.innerText = "You win";
    } else if (newGuess === "rock"){
        guessResult.innerText = "You lose";
    } else{
        guessResult.innerText = "It is a tie";
    }
}

scissorsButton.addEventListener("click", checkScissors);
//User input

//let stillPlaying = true;

//while(stillPlaying === true){
//
//    let userChoices = prompt("Rock, Paper or Scissors?");
//    let userChoice = userChoices.toLowerCase();
//
//   while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
//        userChoice = prompt("You have to put in Rock,Paper or Scissors...");
//    }
//
//    console.log("You have chosen: " + userChoice);
//
//Computer randomly generated input
//
 //   let computerChoices = ["rock", "paper", "scissors"];
//    let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
//
//function for the randomly generated wordBreak: 
//Working out who won?
//
//    var results = function(choice1, choice2) {
//        if(choice1 == choice2) {
//        alert("The result is a tie!");
//    }
//    
//    if(choice1 == "rock") {
//        if(choice2 == "scissors") {
//            alert("The user wins with rock");
//            userScore++;
//        } else {
//           alert("The computer wins with paper");
//            computerScore++;
//        }
//    }
//    
//    else if(choice1 == "paper") {
//        if(choice2 == "rock") {
//            alert("The user wins with paper");
//            userScore++;
//        } else {
//            alert("The computer wins with scissors");
 //           computerScore++;
//        }
//    }

//    if(choice1 == "scissors") {
//        if(choice2 == "rock") {
//            alert("The user wins with scissors");
//            userScore++;
//        } else {
//            alert("The computer wins with rock");
//            computerScore++;
//            }
//        }
//    };
    
//    results(userChoice, computerChoice);
//    randomComputerChoice();
//    console.log(
//        "You have: " + userScore + " points and the computer has: " + computerScore + " points" 
//    );
//        let playAgain = prompt("Would you like to play again ? Please type yes or no");
//        if(playAgain == "yes"){
//            stillPlaying = true
//        } else{
 //           stillPlaying = false
//        }
            
//}

