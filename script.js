function getComputedChoice() {
    let n = Math.floor(Math.random() * 3);
    if (n==0) {return "Rock"};
    if (n==1) {return "Paper"};
    return "Scissors";
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    let p = playerSelection;
    let c = computerSelection;
    if ( p=="rock" && c=="paper" ) {return "You lose! Paper beats Rock"};
    if ( p=="paper" && c=="rock" ) {return "You win! Paper beats Rock"};
    if ( p=="paper" && c=="scissors" ) {return "You lose! Scissors beat Paper"};
    if ( p=="scissors" && c=="paper" ) {return "You win! Scissors beat Paper"};
    if ( p=="scissors" && c=="rock" ) {return "You lose! Rock beats Scissors"};
    if ( p=="rock" && c=="scissors" ) {return "You win! Rock beats Scissors"};
    return playRound(playerSelection, getComputedChoice());
}

function game() {
    console.log("Welcome to my tiny best-of-5 Rock-Paper-Scissors game");
    let gamesWon = 0;
    for (let i=0; i<5; i++) {
        let playerSelection = prompt("Choose Rock, Scissors, or Paper", getComputedChoice());
        let resultOfGame = playRound(playerSelection, getComputedChoice());
        console.log(resultOfGame);
        if (resultOfGame.slice(0, 5)=="You w") {gamesWon++};
    }
    if (gamesWon<3) {console.log("You lost...Try again.")}
    else {console.log("You won!!!Congratulations.")};
}