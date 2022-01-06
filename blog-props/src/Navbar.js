import React from "react"
import Data from "./data"

export default function Navbar(){
    return(
        <nav className = "nav">
            <h3 className="title">Start Bootstrap</h3>
            <ul className="navLinks">
                <li><a href="">Home</a></li>
                <li><a href="">About</a></li>
                <li><a href="">Sample Post</a></li>
                <li><a href="">Contact</a></li>
               
            </ul>
        </nav>
    )
}