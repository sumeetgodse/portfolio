import React from 'react'
import resume from "./resume.png"
import "./css/home.css"

export default function HomePage() {
    return (
        <div className="home-page">
            <img src={resume} className="resume" />
        </div>
    )
}
