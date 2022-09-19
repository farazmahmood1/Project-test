import React from 'react'
import { useState } from 'react'

const QuestionSix = () => {
    const [a, setFirstData] = useState('')
    const [b, setSecondData] = useState("")
    const [c, setThirdData] = useState('')

    const middle = () => {
        if (a > b && a < c) {
            return (
                <h3>first is middle</h3>
            )
        }
        else if (b > a || b < c) {
            return (
                <h3>second is middle</h3>
            )
        }
        else if (c > a && c < b) {
            console.log("fdsa")
        }
        else {
            return (
                <h1>something is wrong</h1>
            )
        }
    }

    return (
        <div>
            <input type="text" onChange={(e) => setFirstData(e.target.value)} placeholder='enter first number' />
            <input type="text" onChange={(e) => setSecondData(e.target.value)} placeholder='enter second number' />
            <input type="text" onChange={(e) => setThirdData(e.target.value)} placeholder='enter third number' />

            <h1>{middle()}</h1>
        </div>
    )
}

export default QuestionSix