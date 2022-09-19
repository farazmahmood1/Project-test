import React, { useState } from 'react'

const AppendArray = () => {
    const [addData, setArrayData] = useState()
    const [arr, setArr] = useState([]);
    const [addDataTwo, setArrayDataTwo] = useState()
    const [arrTwo, setArrTwo] = useState([]);
    const [val, sameVal] = useState('')

    const checkResult = () => {
        if (arr.length !== arrTwo.length) {
            alert("length is not equal")
        }
        else {
            for (let i = 0; i <= arr.length - 1; i++) {

                if (arr[i] === arrTwo[i]) {
                    sameVal(arr[i])
                }
                else {
                    console.log("nothing equal")
                }
            }
        }
    }
    const buttonClick = () => {
        setArr([...arr, addData])
        setArrayData(() => "")
    }

    const secondButton = () => {
        setArrTwo([...arrTwo, addDataTwo])
        setArrayDataTwo(() => "")
    }

    console.log(arr, arrTwo)

    return (
        <div className='container col-lg-7 mt-5' >
            <input type="number" className='form-control' value={addData} onChange={(e) => setArrayData(e.target.value)} />
            <button className='btn btn-primary mt-3' onClick={buttonClick}>ADD IN SECOND ARRAY</button>

            <input type="text" className='form-control mt-2' value={addDataTwo} onChange={(e) => setArrayDataTwo(e.target.value)} />
            <button className='btn btn-primary mt-3' onClick={secondButton}>ADD IN SECOND ARRAY</button>
            <button className='btn btn-secondary mt-3 ms-3' onClick={checkResult}>Results</button>
            <div>
                <h4>Your Array appended is</h4>
                {
                    arr.map((a) => {
                        return (
                            <>
                                <h5 >{a}</h5>
                            </>
                        )
                    })
                }
            </div>
            <h4>Your Array appended is</h4>
            <div>
                {
                    arrTwo.map((item, ) => {
                        return (
                            <h5 >{item}</h5>
                        )
                    })
                }
            </div>
            <p>Result</p>
            <p><b>{val}</b></p>
        </div>
    )
}

export default AppendArray