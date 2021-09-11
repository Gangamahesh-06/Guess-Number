let gameResult = document.getElementById("gameResult");
let userInput = document.getElementById("userInput");
let randomNumber = Math.ceil(Math.random() * 100);
function checkGuess() {
    let guessedNummber = parseInt(userInput.value);
    if (guessedNummber > randomNumber) {
        gameResult.textContent = "Too High! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNummber < randomNumber) {
        gameResult.textContent = "Too Low! Try Again.";
        gameResult.style.backgroundColor = "#1e217c";
    }
    else if (guessedNummber === randomNumber) {
        gameResult.textContent = "Congratulation! Try Again.";
        gameResult.style.backgroundColor = "green";
    }
}