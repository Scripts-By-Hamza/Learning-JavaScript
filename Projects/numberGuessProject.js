const secretNumber = Math.floor(Math.random() * 10) + 1;
console.log(secretNumber);

let attempts = 0;

function checkGuess() {
  const guess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");
  attempts++;

  if (guess === secretNumber) {
    result.textContent = `🎉 Correct! You guessed it in ${attempts} attempts.`;
    result.style.color = "green";
  } else if (guess > secretNumber) {
    result.textContent = "📉 Too high! Try again.";
    result.style.color = "red";
  } else if (guess < secretNumber) {
    result.textContent = "📈 Too low! Try again.";
    result.style.color = "red";
  } else {
    result.textContent = "❌ Please enter a valid number.";
  }
}