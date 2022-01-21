import React from "react"
import { createPortal } from "react-dom";
import './App.css';
const axios = require("axios");


function App() {
  const [color, setColor] = React.useState('')
  const [count, setCount]= React.useState(0)
  let random = Math.floor(Math.random() *7)+1;
  React.useEffect(function(){
    
    axios.get("https://www.colr.org/json/colors/random/7")
      .then(res => setColor(res.data.colors[random].hex) )
      .catch(err => console.log(err))
    console.log("ran")
  },[count])

  
  const styles = {
    backgroundColor:`#${color}`,
    
  }   
 function counting(){
   setCount(prevCount=> prevCount= prevCount +1)
 }
  
  return (
    <div className="App" style = {styles}>
     <button onClick={counting}>Change Color</button>
    </div>
  );
}

export default App;
