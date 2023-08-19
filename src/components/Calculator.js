import React, { useState } from 'react';
import './Calculator.css';
import Button from './Button';
import calculate from '../logic/calculate';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({});
  const { total, next } = calculatorData;
  const result = next || total || '0';

  function handleClick(buttonName) {
    const newCalculatorData = calculate(calculatorData, buttonName);
    setCalculatorData(newCalculatorData);
  }

  const buttonLayout = [
    ['AC', '+/-', '%', '÷'],
    ['7', '8', '9', 'x'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '='],
  ];

  return (
    <div className="calculator">
      <div className="screen">
        {result}
      </div>
      <div className="buttons">
        {buttonLayout.map((row, rowIndex) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className="row" key={rowIndex}>
            {row.map((label) => (
              <Button
                key={label}
                label={label}
                onClick={() => handleClick(label)}
                special={label === '÷' || label === 'x' || label === '-' || label === '+' || label === '='}
                doubleWidth={label === '0'}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calculator;
