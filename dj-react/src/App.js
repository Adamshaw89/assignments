import React from "react"
import Squares from "./Squares"
import './App.css';

export default function App() {
  const [colors, setColors] = React.useState(["white", "white", "white", "white"])
  let square = colors.map(color=> <Squares id={colors.indexOf(color)} color={color}/>)
  // handles button click to change colors. Captures button id for if statement.
  function buttons(event){
    let x = event.target.id
    console.log(x)
    
    return setColors(prevColors=>{
      let newArr=[...prevColors];
      if(x == 1 && newArr[0] == "white"){
        newArr.map(color =>newArr.splice("black"))
      }else if(x == 2){
        newArr[0] = "purple"
        newArr[1] = "purple"
      }else if (x == 3){
        newArr[2] = "blue"
        console.log(newArr)
      }else if (x == 4){
        newArr[3] = "blue"
      }else if (x == 5){
        newArr[0]= "white"
      }else if (x == 6){
        newArr[1]= "pink"
      }else if (x == 7){
        newArr[2]= "orange"
      }else if (x == 8){
        newArr[3]= 'white'
      }else if (x == 9){
        
      }
    return newArr 
    })
  }
 
  return (
    <div className="page">  
      <div className="container">{square}</div>
      <div className="buttonBox">
        <button id="1" onClick={buttons}>Small Time DJ</button>
        <button id="2" onClick={buttons}>Party DJ</button>
        <button id="3"  onClick={buttons}>Professional DJ 1</button>
        <button id="4" onClick={buttons}>Professional DJ 2</button>
        <button id="5"  onClick={buttons}>Big Time1</button>
        <button id="6" onClick={buttons}>Big Time2</button>
        <button id="7" onClick={buttons}>Big Time3</button>
        <button id="8"  onClick={buttons}>Big Time4</button>
        <button id="9" onClick={buttons}>One of the Greats</button>
        
        </div>
    </div>
  );
}


