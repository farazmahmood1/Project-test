import React, { useState } from 'react'

const FilterData = () => {
    const [index, setIndex] = useState('new')
    const [val, setVal] = useState([]);

    const userData = [
        {
            id: "1",
            Post_name: "Faraz",
            Post_Image: "xyz.img",
            post_category: "document",
            price: "1500",
            index: "new"
        },
        {
            id: "2",
            Post_name: "Ahmed",
            Post_Image: "abc.img",
            post_category: "document",
            price: "1000",
            index: "new"
        },
        {
            id: "3",
            Post_name: "Farhan",
            Post_Image: "def.img",
            post_category: "document",
            price: "2000",
            index: "new"
        },
        {
            id: "4",
            Post_name: "kashif",
            Post_Image: "ghi.img",
            post_category: "document",
            price: "3000",
            index: "new"
        },
        {
            id: "5",
            Post_name: "Awais",
            Post_Image: "jkl.img",
            post_category: "document",
            price: "3500",
            index: "new"
        },
        {
            id: "6",
            Post_name: "Usman",
            Post_Image: "mno.img",
            post_category: "document",
            price: "4000",
            index: "oldposts"
        },
        {
            id: "7",
            Post_name: "Arsalan",
            Post_Image: "pqr.img",
            post_category: "document",
            price: "4500",
            index: "oldposts"
        },
    ]

    const handleDelete = () => {
        userData.filter((productItem => productItem.id !== index.id))

    }

    return (
        <div className='container col-lg-7'>
            <div className='card'>
                <div className='card-body'>
                    <button className='btn btn-primary' onClick={() => setIndex("new")}>new</button>
                    <button className='btn btn-primary ms-2' onClick={() => setIndex("oldposts")}>old</button>
                    <button className='btn btn-primary ms-2' onClick={() => setIndex("All")}>All</button>

                    <table>
                        <thead>
                            <th>id</th>
                            <th>Post_name</th>
                            <th>Post_Image</th>
                            <th>post_category</th>
                            <th>price</th>
                        </thead>
                        <tbody>
                            {userData.filter((objects) => objects.index === index).map((items) => {
                                return (
                                    <tr>
                                        <td>{items.id}</td>
                                        <td>{items.Post_name}</td>
                                        <td>{items.Post_Image}</td>
                                        <td>{items.post_category}</td>
                                        <td>{items.price}</td>
                                        <td>{items.index}</td>
                                        <td><button className='btn btn-primary' onClick={handleDelete} >X X</button></td>
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default FilterData