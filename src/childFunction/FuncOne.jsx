import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import FuncTwo from './FuncTwo'

const FuncOne = ({func}) => {
    const [userData, setUserData] = useState([])
    const [data, setData] = useState("")
    const getData = () => {
        axios.get('https://digicardapis.khannburger.com/api/getallitems')
            .then(res => {
                setUserData(res.data.items)
                console.log(res)
            })
            .catch(error => {
                console.log(error)
            })
    }
    useEffect(() => { getData() }, [])

    return (
        <div className='container  col-lg-7'>
            {
                data &&
                <FuncTwo value={data} />
            }
            {
                userData.map((item) => {
                    return (
                        <>
                            <div className='card m-2'>
                                <div className='card-body'>
                                    <p>{item.id}</p>
                                    <p>{item.item_name}</p>
                                    <p>{item.describtion}</p>
                                    <p>{item.item_price}</p>
                                    <button onClick={() => setData(item)}>X</button>
                                    <button onClick={() => {func()}}>AlertFunction</button>
                                </div>
                            </div>

                        </>
                    )
                })
            }

        </div>
    )
}

export default FuncOne