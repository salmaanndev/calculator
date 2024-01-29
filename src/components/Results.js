import React from 'react'
import './Results.css'
const Results = ({results, firstValue, secondValue, symbol}) => {
  return (
    <div className='results'>
        <input type='text' placeholder='Result' value={results} disabled />
    </div>
  )
}

export default Results
