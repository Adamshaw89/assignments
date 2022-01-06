import React from "react"
import BlogList from "./BlogList"

export default function BlogPost(props){
    return(
        <div className="post">
            <a className="article" href="">{props.title}</a>
            <h3 className="sub">{props.subTitle}</h3>
            <p className="author">{`Posted by ${props.author} on ${props.date}`}</p>
        </div>
    )
}