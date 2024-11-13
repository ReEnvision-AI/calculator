import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [display, setDisplay] = useState('');
  const [history, setHistory] = useState('');
  const [currentExpression, setCurrentExpression] = useState('');
  const textareaRef = useRef(null);

  useEffect(() => {
    const savedHistory = localStorage.getItem('calculatorHistory') || '';
    setHistory(savedHistory);
    setDisplay(savedHistory);
  }, []);

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.scrollTop = textareaRef.current.scrollHeight;
    }
  }, [display]);

  const updateDisplay = (value) => {
    const newHistory = history + value + '\n';
    setHistory(newHistory);
    setDisplay(newHistory);
    localStorage.setItem('calculatorHistory', newHistory);
    setCurrentExpression('');
  };

  const appendToDisplay = (value) => {
    setCurrentExpression(prev => prev + value);
    setDisplay(history + currentExpression + value);
  };

  const clearDisplay = () => {
    setDisplay('');
    setHistory('');
    setCurrentExpression('');
    localStorage.removeItem('calculatorHistory');
  };

  const calculate = () => {
    if (currentExpression) {
      try {
        const result = eval(currentExpression);
        updateDisplay(`${currentExpression} = ${result}`);
      } catch (error) {
        updateDisplay(`${currentExpression} = Error`);
      }
    }
  };

  const performOperation = (operation, func) => {
    if (currentExpression) {
      const value = eval(currentExpression);
      const result = func(value);
      updateDisplay(`${operation}(${value}) = ${result}`);
    }
  };

  const factorial = () => {
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

  return (
    <div className="calculator">
      <textarea
        ref={textareaRef}
        value={display}
        readOnly
      />
      <div className="buttons">
        <button onClick={clearDisplay}>C</button>
        <button onClick={() => appendToDisplay('(')}>(</button>
        <button onClick={() => appendToDisplay(')')}>)</button>
        <button onClick={() => appendToDisplay('/')}>/</button>
        <button onClick={() => appendToDisplay('7')}>7</button>
        <button onClick={() => appendToDisplay('8')}>8</button>
        <button onClick={() => appendToDisplay('9')}>9</button>
        <button onClick={() => appendToDisplay('*')}>*</button>
        <button onClick={() => appendToDisplay('4')}>4</button>
        <button onClick={() => appendToDisplay('5')}>5</button>
        <button onClick={() => appendToDisplay('6')}>6</button>
        <button onClick={() => appendToDisplay('-')}>-</button>
        <button onClick={() => appendToDisplay('1')}>1</button>
        <button onClick={() => appendToDisplay('2')}>2</button>
        <button onClick={() => appendToDisplay('3')}>3</button>
        <button onClick={() => appendToDisplay('+')}>+</button>
        <button onClick={() => appendToDisplay('0')}>0</button>
        <button onClick={() => appendToDisplay('.')}>.</button>
        <button onClick={calculate}>=</button>
        <button onClick={() => appendToDisplay('**')}>^</button>
        <button onClick={() => performOperation('sin', Math.sin)}>sin</button>
        <button onClick={() => performOperation('cos', Math.cos)}>cos</button>
        <button onClick={() => performOperation('tan', Math.tan)}>tan</button>
        <button onClick={() => performOperation('log', Math.log10)}>log</button>
        <button onClick={() => performOperation('√', Math.sqrt)}>√</button>
        <button onClick={() => appendToDisplay('Math.PI')}>π</button>
        <button onClick={() => appendToDisplay('Math.E')}>e</button>
        <button onClick={factorial}>n!</button>
      </div>
    </div>
  );
};

export default App;
