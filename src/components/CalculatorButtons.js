import React from 'react'
import './CalculatorButtons.css'
const CalculatorButtons = ({func, symbol}) => {
  return (
    <div className='calc_buttons'>
        <button onClick={func}>{symbol}</button>
    </div>
  )
}

export default CalculatorButtons
