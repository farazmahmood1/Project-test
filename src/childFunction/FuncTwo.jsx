import React from 'react'
import { useState } from 'react'
import FuncThree from './FuncThree'

const FuncTwo = ({ value }) => {
    const [first, setfirst] = useState('')
    console.log(value.id)
    return (
        <div>
           
            <div className='card m-2'>
                <div className='card-body'>
                    <p>Function Two</p>
                    <p>This is data,,,,{value.id}</p>
                    <button onClick={() => { setfirst(value) }}>X</button>
                </div>
            </div>
            {
                first &&
                <FuncThree values={first} />
            }
        </div>
    )
}

export default FuncTwo