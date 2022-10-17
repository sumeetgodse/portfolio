import React from 'react'
import { Link } from "react-router-dom"
import "./css/navbar.css"

export default function Navbar() {
    return (
        <ul>
            <li><Link to="/">Portfolio</Link></li>
            <li style={{ float:"right" }}>
                <a 
                    style={{ padding:"5px", marginRight: "10px" }}
                    href="https://www.instagram.com/sumeet_godse/" 
                    target="_blank"
                >
                    <img style={{ height:"40px", width:"40px" }} src={`./instagram.png`} />
                </a>
            </li>
            <li style={{ float:"right" }}>
                <a 
                    style={{ padding:"5px", marginRight: "10px" }}
                    href="https://www.linkedin.com/in/sumeetgodse/" 
                    target="_blank"
                >
                    <img style={{ height:"40px", width:"40px" }} src={`./linkedin.png`} />
                </a>
            </li>
        </ul>
    )
}
