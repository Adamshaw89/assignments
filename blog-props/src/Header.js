import React from "react"
import Navbar from "./Navbar"

export default function Header(){
    return(
        <header className="header">
            <Navbar/>
            <div className="titles">
            <h1 className="mainTitle">Clean Blog</h1>
            <h2 className="subTitle">A Blog Theme by Start Bootstrap</h2>
            </div>
        </header>
    )
}