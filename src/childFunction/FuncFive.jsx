import React, { useState } from 'react'
import FuncFour from './FuncFour'
import FuncOne from './FuncOne'

const FuncFive = ({ value }) => {
  const [func, setFunc] = useState('')
  const alertFunction = () => {
    alert("I'm function Five")
  }
  return (
    <div>
      <div className='card m-2'>
        <div className='card-body'>
          <p>Function 5</p>
          <p>This is data,,,,{value.id}</p>
          <button onClick={() => { setFunc(alertFunction) }}>alertFunction</button>
        </div>
      </div>
      <FuncOne alertF={func} />
    </div>
  )
}

export default FuncFive