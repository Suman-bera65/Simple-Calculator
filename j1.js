

// store numbers  and operation
let firstNumber = null;
let currentOperation = null;
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
    firstNumber = Number(display.value);   
    currentOperation = operation;         
    display.value = "";                    
}




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
