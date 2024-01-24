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

const human = document.querySelector(".human");
const computer = document.querySelector(".computer");
const options = document.querySelectorAll("button");
for (let i = 0; i < 3; i++) {
    options[i].addEventListener("click", () => {
        if (computer.innerHTML==5) {
            alert("You lost...Try again.");
            computer.innerHTML=0;
            human.innerHTML=0;
        }
        if (human.innerHTML==5) {
            alert("You won...Congratulations.");
            computer.innerHTML=0;
            human.innerHTML=0;
        }
    })
        const choice = options[i].innerHTML;
        const result = playRound(choice, getComputedChoice());
        if (result.substring(0,5)=="You w") {human.innerHTML++}
        else computer.innerHTML++;
};