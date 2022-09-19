import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const QustionThree = () => {
    function childfunction() {

    }
    const [first, setfirst] = useState('')

    const [like, setLike] = useState(false)
    const colorChange = () => {
        setLike(!like)
    }

    const userData = [
        {
            id: "1",
            posted_by: "Faraz",
            post_caption: "Hi there",
            post_image: "image1122",
            like_counts: "32",
            isliked: "setLike",
        },
        {
            id: "2",
            posted_by: "ahmed",
            post_caption: "Hi there",
            post_image: "image1122",
            like_counts: "32",
            isliked: "setLike",
        }, {
            id: "3",
            posted_by: "Faraz",
            post_caption: "Hi there",
            post_image: "image1122",
            like_counts: "32",
            isliked: "setLike",
        }, {
            id: "4",
            posted_by: "Faraz",
            post_caption: "Hi there",
            post_image: "image1122",
            like_counts: "32",
            isliked: "setLike",
        }, {
            id: "5",
            posted_by: "Faraz",
            post_caption: "Hi there",
            post_image: "image1122",
            like_counts: "32",
            isliked: "setLike",
        },
    ]
    const deleteAttribute = (id) => {
        delete userData.id
    }
    return (
        <div>
            {
                userData.map((items) => {
                    return (
                        <div className='container'>
                            <div className='mt-3'>
                                <div className='card'>
                                    <div className='card-body'>
                                        <h1>{items.id}</h1>
                                        <h1>{items.posted_by}</h1>
                                        <h1>{items.post_caption}</h1>
                                        <h1>{items.post_image}</h1>
                                        <h1>{items.like_counts}</h1>
                                        <button className={like === true ? 'btn btn-danger' : 'btn btn-secondary'} onClick={() => colorChange(items.id)}>O</button>
                                        <button className='btn btn-warning ' onClick={() => deleteAttribute(items.id)}>Delete</button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default QustionThree