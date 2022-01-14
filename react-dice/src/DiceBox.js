import React from "react"
import Die from "./Die"

export default function DiceBox(){
   let numbers = [] 
   function random(){
        while(numbers.length <5){
            numbers.push(Math.floor(Math.random() * 6) + 1)
        }   
        return numbers
        }
    function reDO(){
        numbers = []
        setNumber(random())    
    }

    const [number, setNumber] = React.useState(random())
    
    return(
        <div className="diceBox">
            <Die numbers = {number}/>
            <button  onClick = {reDO} className="button">Click to roll.</button>
        </div>
    )
}

