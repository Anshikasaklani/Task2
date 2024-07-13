let displayValue = '';

function addToDisplay(value) {
    displayValue += value;
    document.getElementById('display').value = displayValue;
}

function clearDisplay() {
    displayValue = '';
    document.getElementById('display').value = displayValue;
}

function addOperator(operator) {
    if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
        displayValue += operator;
        document.getElementById('display').value = displayValue;
    }
}

function calculate() {
    if (displayValue !== '' && !isNaN(displayValue.charAt(displayValue.length - 1))) {
        let result = eval(displayValue);
        document.getElementById('display').value = result;
        displayValue = result.toString();
    }
}
