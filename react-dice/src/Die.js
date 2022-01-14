import React from "react"

export default function Die(props){
    const dice = props.numbers.map(number=> <div className="die">{number}</div>)
        return dice
}