function appendNumber(number) {
    document.getElementById('display').value += number;
}

function appendOperator(operator) {
    document.getElementById('display').value += ` ${operator} `;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function calculate() {
    let displayValue = document.getElementById('display').value;
    try {
        // Evaluate the expression
        const result = eval(displayValue.replace(/ /g, ''));
        // Check the result for custom outputs
        if (result === 143) {
            document.getElementById('display').value = 'I love you';
        } else if (displayValue.trim() === '1 + 1') {
            document.getElementById('display').value = 'I miss you';
        } else {
            document.getElementById('display').value = result;
        }
    } catch (e) {
        document.getElementById('display').value = 'Error';
    }
}
