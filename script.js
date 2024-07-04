let currentInput = '0'; // This variable stores the current input in the display
let previousInput = ''; // This variable stores the previous input for calculations
let operator = null; // This variable stores the current operator

// Function to update the display
function updateDisplay() {
    
    document.getElementById('result').innerText = currentInput;
}

// Function to clear the display and reset variables
function clearDisplay() {
    
    currentInput = '0';
    previousInput = '';
    operator = null;
    updateDisplay();
}

// Function to append a number to the current input
function appendNumber(number) {
    if (currentInput === '0' && number !== '.') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

// Function to append an operator
function appendOperator(op) {
    if (operator === null) {
        previousInput = currentInput;
        currentInput = '0';
    } else {
        calculate();
        previousInput = currentInput;
        currentInput = '0';
    }
    operator = op;
}

// Function to toggle the sign of the current input
function toggleSign() {
    if (currentInput !== '0') {
        currentInput = currentInput.startsWith('-') ? currentInput.slice(1) : '-' + currentInput;
    }
    updateDisplay();
}

// Function to calculate percentage
function percent() {
    currentInput = (parseFloat(currentInput) / 100).toString();
    updateDisplay();
}

// Function to perform the calculation based on the operator
function calculate() {
    if (operator === null) return;
    let result;
    const prev = parseFloat(previousInput);
    const curr = parseFloat(currentInput);
    switch (operator) {
        case '+':
            result = prev + curr;
            break;
        case '-':
            result = prev - curr;
            break;
        case '*':
            result = prev * curr;
            break;
        case '/':
            result = prev / curr;
            break;
    }
    currentInput = result.toString();
    operator = null;
    updateDisplay();
}
