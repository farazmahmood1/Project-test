import React,{useState} from 'react';
import FuncFour from './FuncFour.jsx'

const FuncThree = ({ values }) => {
    const [first, setfirst] = useState('')
    return (
        <div>
            <div className='card m-2'>
                <div className='card-body'>
                    <p>Function three</p>
                    <p>This is data,,,,{values.id}</p>
                    <button onClick={() => { setfirst(values) }}>X</button>
                </div>
            </div>
{
    values && 
    <FuncFour userData={first}/>
}
        </div>
    )
}

export default FuncThree