import React from "react"
import ReactDOM from "react-dom"
import {Friends} from "./components/Friendlist"


function App(){
    return(
        <div>
            <Friends/>
            
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById("root"))
