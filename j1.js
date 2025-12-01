
let firstNumber = null;
let currentOperation = null;

const display = document.getElementById("display");

// add numbers to the display
function appendToDisplay(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
    firstNumber = null;
    currentOperation = null;
}
// store the chosen operation
function setOperation(operation) {
    firstNumber = Number(display.value);
    currentOperation = operation;
    display.value += " " + operation + " ";
}

function calculate() {
    const parts = display.value.split(currentOperation);//returns an list of strings
    const secondNumber = Number(parts[1].trim());// convert second part to number, trim removes any extra spaces
    let result;

    switch (currentOperation) {
        case "+":
            result = firstNumber + secondNumber;
            break;
        case "-":
            result = firstNumber - secondNumber;
            break;
        case "*":
            result = firstNumber * secondNumber;
            break;
        case "/":
            result = firstNumber / secondNumber;
            break;
        default:
            result = "Error";
    }

    display.value = result;
    // reset so next calculation starts fresh
    firstNumber = null;
    currentOperation = null;
}
