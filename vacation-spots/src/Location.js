import React from "react"



export default function Location(props){
   
    return(
        <div className="container">
        <div id = "card">
            <h1>{props.place}</h1>
            <h2>${props.price}</h2>
            <h3 id = "season">{props.time}</h3>

        </div></div>
    )
    

}


