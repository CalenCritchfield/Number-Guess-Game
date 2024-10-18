function numberGuessingGame() {
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let attempts = 0;

  const guessButton = document.getElementById("guessButton");
  const guessInput = document.getElementById("guessInput");
  const resultDisplay = document.getElementById("result");
  const attemptsDisplay = document.getElementById("attempts");

  guessButton.addEventListener("click", () => {
    const guess = guessInput.value;
    attempts++;

    // Check if the input is empty
    if (guess === "") {
      resultDisplay.textContent = "Please guess a number from 1-100";
    } else {
      const parsedGuess = parseInt(guess, 10);

      // Check if the parsed input is a valid number
      if (isNaN(parsedGuess)) {
        resultDisplay.textContent = "Please enter a valid number.";
      } else if (parsedGuess < randomNumber) {
        resultDisplay.textContent = "Too low! Try again.";
      } else if (parsedGuess > randomNumber) {
        resultDisplay.textContent = "Too high! Try again.";
      } else {
        resultDisplay.textContent = `Congratulations! You've guessed the number ${randomNumber}.`;
        attemptsDisplay.textContent = `It took you ${attempts} attempts.`;
        guessButton.disabled = true;
      }
    }

    guessInput.value = "";
  });
}

numberGuessingGame();
