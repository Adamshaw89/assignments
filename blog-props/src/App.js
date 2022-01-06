import React from "react"
import Header from "./Header"
import BlogList from "./BlogList"
import Footer from "./Footer"

function Button(){
    return(
        <div className="buttonDiv">
        <button className="button">Older Posts</button>
        </div>
    )
}
export default function App(){
    return(
        <div className="page">
            <Header/>
            <BlogList/>
            <Button/>
            <Footer/>
        </div>
    )
}