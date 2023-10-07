//game
// Function to generate a random number between min and max
function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to play the Craps game
function playCraps() {
    // Generate two random dice rolls
    const die1 = getRandomNumber(1, 6);
    const die2 = getRandomNumber(1, 6);

    // Calculate the sum of the dice
    const sum = die1 + die2;

    // Get the result element
    const resultElement = document.getElementById("result");
    const diceResultElement = document.getElementById("diceResult");

    // Display the dice result
    diceResultElement.innerHTML = `Dice Roll: ${die1} + ${die2} = ${sum}`;

    // Check game conditions
    if (sum === 7 || sum === 11) {
        resultElement.innerHTML = "CRAPS – You lose!";
    } else if (die1 === die2 && die1 % 2 === 0) {
        resultElement.innerHTML = "You won!";
    } else {
        resultElement.innerHTML = "You pushed!";
    }
}

// Get the play button element and attach the playCraps function to its click event
const playButton = document.getElementById("playButton");
playButton.addEventListener("click", playCraps);