import React, { useState } from 'react'
import FuncFive from './FuncFive'

const FuncFour = ({ userData}) => {
  const [data, setData] = useState("")
  return (
    <div>
      <div className="card">
        <div className="card-body">
          <p>Function four here</p>
        <p>This is data,,,,{userData.id}</p>
          <button onClick={() => {setData(userData)}}>X</button>
        </div>
      </div>
      {
        data &&
        <FuncFive value={data} />
      }
    </div>
  )
}

export default FuncFour