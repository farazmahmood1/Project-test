import React from 'react'
import { useState } from 'react'

const QuestionSeven = () => {
    const [inputOne, setInputOne] = useState('')
    const [inputTwo, setInputTwo] = useState('')

    const array = ["fdsfa", ...inputOne]
    const arrayTwos = [...inputTwo]
    const add = () => {
        array.concat()
    }

    const arrayTwo = () => {
        array.push(inputTwo)
    }

    if (array.length === arrayTwo.length) {
        console.log("Arrays are not of equal length")
    }


    console.log(array.length)
    console.log(arrayTwo.length)


    const showData = () => {
        return (
            <div className='mt-2'>
                <p> Input One: <b> {inputOne} </b>, Input Two <b> {inputTwo} </b> </p>
            </div>
        )
    }

    console.log(array)
    return (
        <div>
            <div className='container col-lg-7 mt-5'>
                <h3>Please Enter your details</h3>
                <input type="number" className='form-control mb-2' onChange={(e) => setInputOne(e.target.value)} />
                <button className='btn btn-secondary mb-2' onClick={add()}>Item Name</button>
                <input type="number" className='form-control mb-2' onChange={(e) => setInputTwo(e.target.value)} />
                <button className='btn btn-secondary' onClick={arrayTwo}>Item Price</button>
                <button className='ms-2 btn btn-primary' onClick={showData()}>Show Details</button>



            </div>
        </div>

    )
}

export default QuestionSeven