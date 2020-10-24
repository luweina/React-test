import React, {useState, useEffect} from 'react'
import axios from 'axios'
export const ApiData = () => {
    const [posts, setPost] = useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/photos/?_limit=10').then (res => {
            console.log (res)
            setPost(res.data)
        }).catch(error => {
            console.log(error)
        })
    }, [])
    return (
        <div>
            <ul>
                {
                      posts.map(post => <li key = {post.id}>{post.id}{post.title} <img alt = '' src = {post.url}></img> </li>)

                }
               

            </ul>

        </div>
    )
}

export default ApiData
