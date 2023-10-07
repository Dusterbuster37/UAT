// Strings js Arthur Cathcart

// Get references to elements
const inputString = document.getElementById("inputString");
const checkButton = document.getElementById("checkButton");
const resultContainer = document.getElementById("resultContainer");
const result = document.getElementById("result");

// Palidrome check
function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}

// Display the result and prompt for another word
function displayResult() {
    const inputValue = inputString.value.trim();
    if (inputValue === "") {
        result.textContent = "Please enter a word.";
    } else {
        const isPal = isPalindrome(inputValue);
        if (isPal) {
            result.textContent = `${inputValue} is a palindrome!`;
        } else {
            result.textContent = `${inputValue} is not a palindrome.`;
        }

        // Prompt for another word
        const promptDiv = document.createElement("div");
        promptDiv.textContent = "Would you like to enter another word?";
        const yesButton = document.createElement("button");
        yesButton.textContent = "Yes";
        yesButton.addEventListener("click", () => {
            inputString.value = "";
            result.textContent = "";
            resultContainer.removeChild(promptDiv);
        });
        const noButton = document.createElement("button");
        noButton.textContent = "No";
        noButton.addEventListener("click", () => {
            resultContainer.removeChild(promptDiv);
            checkButton.disabled = false;
        });

        promptDiv.appendChild(yesButton);
        promptDiv.appendChild(noButton);
        resultContainer.appendChild(promptDiv);

        // Disable the check button while prompting
        checkButton.disabled = true;
    }
}

// Event listener for the check button
checkButton.addEventListener("click", displayResult);
