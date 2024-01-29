import React, { useState } from 'react'
import './Calculator.css'
import CalculatorButtons from './CalculatorButtons'
import Results from './Results';

const Calculator = () => {
    const [firstValue, setFirstValue] = useState("");
    const [secondValue, setSecondValue] = useState("");
    const [result, setResult] = useState([]);
    const [symbol, setSymbol] = useState("+");

    const add = () => {
        let added = Number(firstValue) + Number(secondValue);
        setSymbol("+");
        setResult(c => Number(c) + Number(added));
        
    }

    const subtract = () => {
        const subtracted = Number(firstValue) - Number(secondValue);
        setSymbol("-");
        setResult(subtracted);
    }

    const multiply = () => {
        const multiplied = Number(firstValue) * Number(secondValue);
        setSymbol("x");
        setResult(multiplied);
    }

    const divide = () => {
        const divided = Number(firstValue) / Number(secondValue);
        setSymbol("/");
        setResult(divided);

    }

    const reset = () => {
        setFirstValue('');
        setSecondValue('');
        setResult('');
        setSymbol('+')
    }

    return (
        <div className='calculator'>
            <p>A Simple React Calculator By Salman Ahmad</p>
            <div className='calc_input'>
                <input type='number' placeholder='Enter first value here' name="firstNum" value={firstValue} onChange={(e) => setFirstValue(e.target.value)} />
                <input type='text' value={symbol} disabled className='symbol' />
                <input type='number' placeholder='Enter second value here' name="secondNum" value={secondValue} onChange={(e) => setSecondValue(e.target.value)} />
            </div>

            <div className='result_field'>
                <Results firstValue={firstValue} secondValue={secondValue} symbol={symbol} results={result} />
            </div>


            <div className='calculator_buttons'>
                <CalculatorButtons func={() => add()} symbol="+" />
                <CalculatorButtons func={() => subtract()} symbol="-" />
                <CalculatorButtons func={() => multiply()} symbol="x" />
                <CalculatorButtons func={() => divide()} symbol="/" />
                <button onClick={() => reset()}>reset</button>
            </div>
        </div>
    )
}

export default Calculator
