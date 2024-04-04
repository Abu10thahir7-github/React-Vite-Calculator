import { useState } from 'react';
import './App.css';

function App() {
  const [currValue, setCurrValue] = useState("");
  const [preValue, setPreValue] = useState("");
  const [operation, setOperation] = useState(null);
  const handleNumberClick = (number) => {
    if (number === "." && currValue.includes(".")) return;
    setCurrValue(currValue + number);
    console.log(number);
  };

  const handleDelete = () => {
    setCurrValue(currValue.slice(0, -1));
  };

  const handleAllClear = () => {
    setCurrValue("");
    setPreValue("");
    setOperation(null);
  };

  const chooseOperation = (op) => {
    if (currValue === "") return;
    if (preValue !== "") {
      calculate();
    }
    setOperation(op);
    setPreValue(currValue);
    setCurrValue("");
  };

  const calculate = () => {
    let computation;
    const prev = parseFloat(preValue);
    const current = parseFloat(currValue);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operation) {
      case '+':
        computation = prev + current;
        break;
      case '-':
        computation = prev - current;
        break;
      case '*':
        computation = prev * current;
        break;
      case '/':
        computation = prev / current;
        break;
      default:
        return;
    }
    setCurrValue(computation.toString());
    setOperation(null);
    setPreValue("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <div className="previous-operand">{preValue} {operation}</div>
          <div className="current-operand">{currValue}</div>
        </div>
        <button onClick={handleAllClear} className="span-two">AC</button>
        <button onClick={handleDelete}>DEL</button>
        <button onClick={() => chooseOperation('/')}>/</button>
        <button onClick={() => handleNumberClick('1')}>1</button>
        <button onClick={() => handleNumberClick('2')}>2</button>
        <button onClick={() => handleNumberClick('3')}>3</button>
        <button onClick={() => chooseOperation('*')}>*</button>
        <button onClick={() => handleNumberClick('4')}>4</button>
        <button onClick={() => handleNumberClick('5')}>5</button>
        <button onClick={() => handleNumberClick('6')}>6</button>
        <button onClick={() => chooseOperation('+')}>+</button>
        <button onClick={() => handleNumberClick('7')}>7</button>
        <button onClick={() => handleNumberClick('8')}>8</button>
        <button onClick={() => handleNumberClick('9')}>9</button>
        <button onClick={() => chooseOperation('-')}>-</button>
        <button onClick={() => handleNumberClick('0')}>0</button>
        <button onClick={() => handleNumberClick('.')}>.</button>
        <button onClick={calculate} className="span-two">=</button>
      </div>
    </div>
  );
}

export default App;
