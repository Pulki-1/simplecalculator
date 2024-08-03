document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('keydown', handleKeyboardInput);
});

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteChar() {
    const currentDisplay = document.getElementById('display').value;
    document.getElementById('display').value = currentDisplay.slice(0, -1);
}

function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function calculateResult() {
    const currentDisplay = document.getElementById('display').value;
    if (currentDisplay) {
        document.getElementById('display').value = eval(currentDisplay);
    }
}

function handleKeyboardInput(event) {
    const key = event.key;
    if (key >= '0' && key <= '9') {
        appendToDisplay(key);
    } else if (key === '.') {
        appendToDisplay(key);
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        deleteChar();
    } else if (key === 'Escape') {
        clearDisplay();
    }
}

