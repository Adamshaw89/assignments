import React from "react"

export default function Squares(props){
    console.log(props)
    let styles = {
        backgroundColor: props.color,
      
    }
    return(
        <div className="square" style = {styles} ></div>
    )
}