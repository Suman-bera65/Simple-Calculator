//alert("c1.js loaded");

// store numbers inputs and operation
let firstNumber = null;
let currentOperation = null;

// get the display element (this works now because script uses "defer")
const display = document.getElementById("display");

// add numbers to the display
function appendToDisplay(value) { //multiple digits can be added 123 .. so on
    display.value += value;
}

// clear calculator
function clearDisplay() {
    display.value = "";
    firstNumber = null;
    currentOperation = null;
}

// store the chosen operation
function setOperation(operation) {
    firstNumber = Number(display.value);   // convert string('1') to number 1
    currentOperation = operation;          // "+", "-", "*", "/" //pass the operation
    display.value = "";                    // empty display, for second number display
}

//why only firstNumber and currentOperation are used in setOperation function but not secondNumber?
// because secondNumber is obtained later when calculate() is called
//first number can be more than one digit, so we need to store it as a number
// second number is obtained from display when "=" is clicked


// calculate result when "=" is clicked
function calculate() {
    const secondNumber = Number(display.value);
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
