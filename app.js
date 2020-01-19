let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const lizard_div = document.getElementById("s");
const spock_div = document.getElementById("sp");

function computerPlay() {
    const items = ['rock', 'paper', 'scissors', 'lizard', 'spock']
    return items[Math.floor(Math.random() * items.length)]
}
const smallUserWord = "user".fontsize(3).sub();
const smallCompWord = "comp".fontsize(3).sub();

function convertToCapital(userSelection) {
    if (userSelection === "rock") return "Rock";
    if (userSelection === "paper") return "Paper";
    if (userSelection === "scissors") return "Scissors";
    if (userSelection === "lizard") return "Lizard";
    return "Spock";
}
function convertToCapital(computerSelection) {
    if (computerSelection === "rock") return "Rock";
    if (computerSelection === "paper") return "Paper";
    if (computerSelection === "scissors") return "Scissors";
    if (computerSelection === "lizard") return "Lizard";
    return "Spock";
}

function win(userSelection, computerSelection) {
    userScore++
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = convertToCapital(userSelection) + `${smallUserWord}` +" beats " + convertToCapital(computerSelection) + `${smallCompWord}` + ". You win!"
}

function lose(userSelection, computerSelection) {
    computerScore++
    computerScore_span.innerHTML = computerScore;
    result_div.innerHTML = convertToCapital(computerSelection) + `${smallCompWord}` + " beats " + convertToCapital(userSelection) + `${smallUserWord}` + ". You lose!"
}

function draw() {
    result_div.innerHTML = "Same same. Try again!"
}

function game(userSelection) {
    const computerSelection = computerPlay().toLowerCase();
    switch(userSelection + computerSelection) {
        case "rockscissors":
        case "paperrock":
        case "scissorspaper":
        case "scissorslizard":
        case "paperspock":
        case "rocklizard":
        case "spockrock":
        case "lizardspock":
        case "lizardpaper":
            win(userSelection, computerSelection);
            break;
        case "rockpaper":
        case "paperscissors":
        case "scissorsrock":
        case "lizardscissors":
        case "spockpaper":
        case "lizardrock":
        case "spockrock":
        case "spocklizard":
        case "paperlizard":
            lose(userSelection, computerSelection);
            break;
        case "rockrock":
        case "paperpaper":
        case "scissorsscissors":
        case "lizardlizard":
        case "spockspock":
            draw(userSelection, computerSelection);
            break;
    }
}
console.log(computerPlay());

game();

function main() {
rock_div.addEventListener('click', function() {
    game("rock");
})
paper_div.addEventListener('click', function() {
    game("paper");
})
scissors_div.addEventListener('click', function() {
    game("scissors");
})
lizard_div.addEventListener('click', function() {
    game("lizard");
})
spock_div.addEventListener('click', function() {
    game("spock");
})

};

main();
