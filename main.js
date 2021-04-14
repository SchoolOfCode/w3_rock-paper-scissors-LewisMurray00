
//User input

let userChoices = prompt("Rock, Paper or Scissors?");
let userChoice = userChoices.toLowerCase();

while (userChoice !== "rock" && userChoice !== "paper" && userChoice !== "scissors") {
    userChoice = prompt("You have to put in Rock,Paper or Scissors...");
}

console.log("You have chosen: " + userChoice);

//Computer randomly generated input

let computerChoices = ["rock", "paper", "scissors"];
let computerChoice = computerChoices[Math.floor(Math.random()*computerChoices.length)];
console.log("The computer chose: " + computerChoice);

//function for the randomly generated wordBreak: 

function randomComputerChoice(){
    return computerChoices[Math.floor(Math.random()*computerChoices.length)];
}

randomComputerChoice();

//Working out who won?

var results = function(choice1, choice2) {
    if(choice1 === choice2) {
      alert("The result is a tie!");
}
if(choice1 === "rock") {
    if(choice2 === "scissors") {
        alert("The user wins with rock");
    } else {
        alert("The computer wins with paper");
    }
}
if(choice1 === "paper") {
    if(choice2 === "rock") {
        alert("The user wins with paper");
    } else {
        if(choice2 === "scissors") {
            alert("The computer wins with scissors");
    }
}
if(choice1 === "scissors") {
    if(choice2 === "rock") {
        alert("The computer wins with rock");
    } else {
        if(choice2 === "paper") {
           alert("The user wins");
        }
    }
}
}
};

results(userChoice, computerChoices);
