
// Generate computer choice
function getComputerChoice() {
    // Choose random int 1-3
    const compChoice = (Math.floor(Math.random() * 3) + 1);

    switch (compChoice) {
        case 1:
            return "rock";
        case 2:
            return "paper";
        case 3:
            return "scissors";
    }
}

// Get human choice
function getHumanChoice() {

    const humChoice = prompt(`(Round ${round}/5) Choose Rock, Paper, or Scissors`).toLowerCase().trim();

    switch (humChoice) {
        case "rock":
            return "rock";
        case "paper":
            return "paper";
        case "scissors":
            return "scissors";
        default:
            alert("Invalid input, try again.")
            return getHumanChoice(); // Retry
    }
}

// Compute the winner for a round
function computeWinner(humChoice, compChoice) {

    // Tie
    if (humChoice === compChoice) {
        return "It's a tie!";
    }

    // Compute winning combinations
    if (
        (humChoice === "rock" && compChoice === "scissors") ||
        (humChoice === "paper" && compChoice === "rock") ||
        (humChoice === "scissors" && compChoice === "paper")
    ) {
        humanScore++;
        return "You win!";
    }

    else {
        computerScore++;
        return "You lost!";
    }
}

// Play game for i rounds
function playRound() {

    for (let i = 1; i <= 5; i++) {
        let compChoice = getComputerChoice();
        let humChoice = getHumanChoice();

        alert(`You chose ${humChoice}. Computer chose ${compChoice}. ${computeWinner(humChoice, compChoice)}`);
        round++;
    }

}

// Initialize round/score variables and start game
let round = 1;
let humanScore = 0;
let computerScore = 0;
playRound();

// Declare winner
if (humanScore > computerScore) {
    alert(`You beat the computer! Your score: ${humanScore}. Refresh to play again.`);
}

else if (humanScore === computerScore) {
    alert(`It was a tie!`);
}
    
else {
    alert(`You lost!: Your score: ${humanScore}. Refresh to play again.`);
}