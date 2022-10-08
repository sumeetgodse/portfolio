import React from 'react'
import { Link } from "react-router-dom"
import "./css/navbar.css"

export default function Navbar() {
    return (
        <ul>
            <li><Link to="/">Portfolio</Link></li>
            <li><Link to="resume">Resume</Link></li>
        </ul>
    )
}
