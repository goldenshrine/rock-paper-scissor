
let user1Wins = 0;
let user2Wins = 0;


function determineWinner(user1Choice, user2Choice) {
    if (user1Choice === user2Choice) {
        return "It's a tie!";
    } else if (
        (user1Choice === "rock" && user2Choice === "scissors") ||
        (user1Choice === "scissors" && user2Choice === "paper") ||
        (user1Choice === "paper" && user2Choice === "rock")
    ) {
        user1Wins++;
        return "User 1 wins!";
    } else {
        user2Wins++;
        return "User 2 wins!";
    }
}


while (true) {
    
    let user1Choice = prompt("User 1: Enter rock, paper, or scissors").toLowerCase();
    let user2Choice = prompt("User 2: Enter rock, paper, or scissors").toLowerCase();

    
    if (!["rock", "paper", "scissors"].includes(user1Choice) || !["rock", "paper", "scissors"].includes(user2Choice)) {
        alert("Invalid input. Please enter 'rock', 'paper', or 'scissors'.");
        continue;
    }

   
    let result = determineWinner(user1Choice, user2Choice);
    alert(result);


    alert(`Scores:\nUser 1: ${user1Wins} wins\nUser 2: ${user2Wins} wins`);

   
    let playAgain = prompt("Do you want to play again? (yes/no)").toLowerCase();
    if (playAgain !== "yes") {
        alert("Thanks for playing!");
        break;
    }
}
