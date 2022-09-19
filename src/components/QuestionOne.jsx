import React from 'react'
import { useState } from 'react'

const QuestionOne = () => {
    const [inputOne, setInputOne] = useState('')
    const [inputTwo, setInputTwo] = useState('')
    const [addForm, setAddForm] = useState({
        inputOne: "",
        inputTwo: ""
    });

    const array = ["fdsfa", ...inputOne]
    const arrayTwos = [...inputTwo]
    const add = () => {
        array.concat(`${setAddForm}`)
    }

    const arrayTwo = () => {
        array.push(inputTwo)
    }

    if (array.length === arrayTwo.length) {
        console.log("Arrays are not of equal length")
    }


    // console.log(array.length)
    // console.log(arrayTwo.length)

    // const formData = (event) => {

    //     const fieldName = event.target.getAttribute("array");
    //     const fieldValue = event.target.value;

    //     const newFormData = { ...addForm };
    //     newFormData[fieldName] = fieldValue;

    //     setAddForm(newFormData);
    //   };

    console.log(array)
    return (
        <div>
            <div className='container col-lg-7 mt-5'>
                <h3>Please Enter Two numbers</h3>
                <input type="number" className='form-control mb-2' onChange={(e) => setInputOne(e.target.value)} />
                <button className='btn btn-secondary mb-2' onClick={add}>Add Data1</button>
                <input type="number" className='form-control mb-2' onChange={(e) => setInputTwo(e.target.value)} />
                <button className='btn btn-secondary' onClick={arrayTwo}>Add Data1</button>
                <div className='mt-2'>
                    <p> Input One: <b> {inputOne} </b>, Input Two <b> {inputTwo} </b> </p>
                </div>
                <p>Length of first array is {array.length}</p>
                <p>Length of first array is {arrayTwos.length}</p>

            </div>
        </div>
    )
}

export default QuestionOne