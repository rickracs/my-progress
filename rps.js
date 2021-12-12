let playerWins = 0;
let computerWins = 0;

let darkModeCounter = 0;

function computerPlay() {
    let pick = Math.floor(Math.random() * 3) + 1;
    if (pick == 1) return "Rock"
    else if (pick == 2) return "Paper"
    return "Scissors";
}

function playRound(e) {

    let computerSelection = computerPlay();
    let playerSelection = e.srcElement.innerHTML;

    if (playerWins == 5 || computerWins == 5) return;

    if (playerSelection == computerSelection) result.textContent = "It's a DRAW!";
    else if (playerSelection == "Rock" && computerSelection == "Scissors" ||
        playerSelection == "Paper" && computerSelection == "Rock" ||
        playerSelection == "Scissors" && computerSelection == "Paper") {
        playerWins++;
        yourScore.textContent = "Your score: " + playerWins;
        result.textContent = "You WON! " + playerSelection + " beats " + computerSelection + ".";
        if (playerWins == 5) gameEval();
    }
    else {
        computerWins++;
        computerScore.textContent = "Computer score: " + computerWins;
        result.textContent = "You LOST! " + computerSelection + " beats " + playerSelection + ".";
        if (computerWins == 5) gameEval();
    }

}

function gameEval() {
    //show the final score

    if (playerWins == 5) rematch.textContent = "Congratulations! You were first to 5! Want a rematch?";
    if (computerWins == 5) rematch.textContent = "Game over! The computer was first to 5! Want a rematch?";
    endGame.appendChild(rematch);
    rematchButton.textContent = "Restart game";
    
    endGame.appendChild(rematchButton);
}

function resetGame() {
    playerWins = 0;
    computerWins = 0;
    result.textContent = "-"
    yourScore.textContent = "Your score: " + playerWins;
    computerScore.textContent = "Computer score: " + computerWins;
    endGame.removeChild(rematch);
    endGame.removeChild(rematchButton);

}

function switchToDark (e) {
    if (darkModeCounter==0){
    bodyStyle.style.backgroundColor="#444";
    bodyStyle.style.color="#EEEEEE";
   darkModeCounter=1;
    
    }else {
    bodyStyle.style.backgroundColor="#EEEEEE";
    bodyStyle.style.color="#444";
    darkModeCounter=0;
    }
}

const yourScore = document.querySelector("#yourScore");
const computerScore = document.querySelector("#computerScore");
const result = document.querySelector(".lastGame");
const buttons = document.querySelectorAll(".playerChoice");
const endGame = document.querySelector(".results");
const rematch = document.createElement("div");
const rematchButton = document.createElement("button");
const darkMode = document.querySelector("#darkMode");
const bodyStyle = document.querySelector("body");

rematchButton.style.height = "30px";
rematch.style.padding= "10px";
rematch.style.fontSize = "20px";
rematch.style.fontWeight = "700";

//add listener for button click here, call function playRound
buttons.forEach(btn => {
    btn.addEventListener('click', playRound);
});

//add reset game after 5 wins
rematchButton.addEventListener("click", resetGame);

darkMode.addEventListener("click", switchToDark);



