import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const QuestionTwo = () => {

    const [userData, setUserData] = useState('')

    const funcOne = () => {
        // props.value
        // value={'sdjk'}
        console.log("i am first function");
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then((res) => setUserData(res.data))
            .catch((error) => console.log(error))
    }

    const funcTwo = () => {
        // props.value
        // value={'sdjk'}
        console.log("i am second function")
    }

    const funcThree = () => {
        // props.value
        // value={'sdjk'}
        console.log("i am third function")
    }

    const funcFour = (props) => {
        // props.value
        // value={'sdjk'}
        console.log("i am fourth function")
    }

    const funcFive = (props) => {
        // props.value
        // value={'sdjk'}
        console.log("i am fifth function")

    }

    const funcSix = () => {
        // value={'sdjk'}
        console.log("i am sisxth function")
        userData.map((items) => {
            return (
                <h1>hello</h1>
            )
        })
        alert("i am from sixth function")
    }

    useEffect(() => { funcOne() }, [])

    return (
        <div>
            {
                userData.map((items) => {
                    return (
                        <h2>Question 2</h2>
                    )
                })
            }
        </div>
    )
}

export default QuestionTwo