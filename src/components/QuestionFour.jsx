import React from 'react'
import { useState } from 'react'

const QuestionFour = () => {
    const [index, setIndex] = useState("NewPosts")

    const FilterData = () => {
        if (index === "NewPosts") {
            return(

                <table>
                <thead>
                    <th>id</th>
                    <th>Post_name</th>
                
                    <th>Post_Image</th>
                    <th>post_category</th>
                    <th>price</th>
                </thead>
                <tbody>
                    {userData.map((items) => {
                        return (
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.Post_name}</td>
                                <td>{items.Post_Image}</td>
                                <td>{items.post_category}</td>
                                <td>{items.price}</td>
                                <td>{items.index}</td>

                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
            )
        }
        else if (index === "oldposts") {
            return(

            <table>
                <thead>
                    <th>id</th>
                    <th>Post_name</th>
                    <th>Post_Image</th>
                    <th>post_category</th>
                    <th>price</th>
                </thead>
                <tbody>
                    {userData.map((items) => {
                        return (
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.Post_name}</td>
                                <td>{items.Post_Image}</td>
                                <td>{items.post_category}</td>
                                <td>{items.price}</td>
                                <td>{items.index}</td>

                            </tr>
                        )
                    })

                    }
                </tbody>

            </table>
            )

}
        else if (index === "All") {
            <table>
                <thead>
                    <th>id</th>
                    <th>Post_name</th>
                    <th>Post_Image</th>
                    <th>post_category</th>
                    <th>price</th>
                </thead>
                <tbody>
                    {userData.map((items) => {
                        return (
                            <tr>
                                <td>{items.id}</td>
                                <td>{items.Post_name}</td>
                                <td>{items.Post_Image}</td>
                                <td>{items.post_category}</td>
                                <td>{items.price}</td>
                                <td>{items.index}</td>

                            </tr>
                        )
                    })

                    }
                </tbody>
            </table>
        }
        else {
            console.log("fdsfa")
        }
    }

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


    return (
        <div className='container col-lg-7'>
            <div className='card'>
                <div className='card-body'>
                    <button className='btn btn-primary' onClick={() => setIndex("oldposts")}>new</button>
                    <button className='btn btn-primary ms-2' onClick={() => setIndex("NewPosts")}>old</button>
                    <button className='btn btn-primary ms-2' onClick={() => setIndex("All")}>All</button>

                    {/* <table>
                        <thead>
                            <th>id</th>
                            <th>Post_name</th>
                            <th>Post_Image</th>
                            <th>post_category</th>
                            <th>price</th>
                        </thead>
                        <tbody>
                            {userData.map((items) => {
                                return (
                                    <tr>
                                        <td>{items.id}</td>
                                        <td>{items.Post_name}</td>
                                        <td>{items.Post_Image}</td>
                                        <td>{items.post_category}</td>
                                        <td>{items.price}</td>

                                    </tr>
                                )
                            })

                            }
                        </tbody>
                    </table> */}

                    <FilterData/>

                </div>
            </div>
        </div>
    )
}

export default QuestionFour