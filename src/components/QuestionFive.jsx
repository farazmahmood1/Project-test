import React from 'react'
import { useState } from 'react';

const QuestionFive = () => {

    const [boxColor, setBoxColor] = useState('black')
    const [borderColor, setBorderColor] = useState('yellow')

    return (
        <div>
            <div className='box' style={{ backgroundColor: `${boxColor}`, borderColor: `${borderColor}` }}>

            </div>
            <div>
                <input type="text" className='from-control' placeholder='enter boxColor' onChange={(e) => setBoxColor(e.target.value)} />
                <input type="text" placeholder='enter bordercolor' onChange={(e) => setBorderColor(e.target.value)} />
            </div>
        </div>
    )
}

export default QuestionFive



