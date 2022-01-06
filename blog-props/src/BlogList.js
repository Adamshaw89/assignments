import React from "react"
import Data from "./data"
import BlogPost from "./BlogPost"

export default function BlogList(){
    let posts = Data.map(info =>{
        return(
            <div className="blog">
                <BlogPost 
                    title = {info.title}
                    subTitle = {info.subTitle}
                    author = {info.author}
                    date = {info.date}
                />
                
            </div>
    )}
        )
    return posts
}