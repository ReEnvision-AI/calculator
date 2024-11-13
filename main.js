const display = document.getElementById('display');

let history = localStorage.getItem('calculatorHistory') || '';
let currentExpression = '';
display.value = history;

function updateDisplay(value) {
  history += value + '\n';
  display.value = history;
  localStorage.setItem('calculatorHistory', history);
  display.scrollTop = display.scrollHeight;
  currentExpression = '';
}

window.appendToDisplay = (value) => {
  currentExpression += value;
  display.value = history + currentExpression;
};

window.clearDisplay = () => {
  display.value = '';
  history = '';
  currentExpression = '';
  localStorage.removeItem('calculatorHistory');
};

window.calculate = () => {
  if (currentExpression) {
    try {
      const result = eval(currentExpression);
      updateDisplay(`${currentExpression} = ${result}`);
    } catch (error) {
      updateDisplay(`${currentExpression} = Error`);
    }
  }
};

window.sin = () => {
  if (currentExpression) {
    const value = eval(currentExpression);
    const result = Math.sin(value);
    updateDisplay(`sin(${value}) = ${result}`);
  }
};

window.cos = () => {
  if (currentExpression) {
    const value = eval(currentExpression);
    const result = Math.cos(value);
    updateDisplay(`cos(${value}) = ${result}`);
  }
};

window.tan = () => {
  if (currentExpression) {
    const value = eval(currentExpression);
    const result = Math.tan(value);
    updateDisplay(`tan(${value}) = ${result}`);
  }
};

window.log = () => {
  if (currentExpression) {
    const value = eval(currentExpression);
    const result = Math.log10(value);
    updateDisplay(`log(${value}) = ${result}`);
  }
};

window.sqrt = () => {
  if (currentExpression) {
    const value = eval(currentExpression);
    const result = Math.sqrt(value);
    updateDisplay(`√(${value}) = ${result}`);
  }
};

window.factorial = () => {
  if (currentExpression) {
    const n = eval(currentExpression);
    if (n < 0 || !Number.isInteger(n)) {
      updateDisplay(`${n}! = Error`);
      return;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    updateDisplay(`${n}! = ${result}`);
  }
};

// Ensure the display shows the history when the page loads
display.value = history;
display.scrollTop = display.scrollHeight;
