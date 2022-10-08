import React, { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import "./css/blogs.css"
import "./css/search.css"
import { Posts } from "./Posts"

export default function Blogs() {

    const [input, setInput] = useState("")
    const [newPosts, setNewPosts] = useState(Posts)

    const clear = () => {
        setInput("")
        setNewPosts(Posts)
        document.getElementById('InputID').value = ""
    }

    const search = () => {
        const searchedPost = Posts.filter((item) => (item.title.toLowerCase() === input.toLowerCase()))
        setNewPosts(searchedPost)
    }

    return (
        <>
            <div className="search-container">
                <input type="text" id="InputID" onChange={(e) => setInput(e.target.value)} placeholder="Search by Title..." className="input-id" />
                <button className="search" onClick={search} >Search</button>
                <button className="clear" onClick={clear} >Clear</button>
            </div>
            <div style={{ width: "80%", marginLeft: "10%" }}>
                <div className="row">
                    {
                        newPosts.map((data) => {
                            return (
                                <div className="column">
                                    <div className="card">
                                        <img src={`./${data.img}.png`} />
                                        <h3 style={{ fontWeight: "bolder" }}>{data.title}</h3>
                                        <p>{data.about}</p>
                                        <a href={data.visit} target="_blank"><div className="visit">Visit</div></a>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}




