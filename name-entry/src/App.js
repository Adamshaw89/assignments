import React from "react"
import List from "./List"
export default function App(){
    const [formData, setFormData] = React.useState({
        name:""
    })
    const [names, setNames] = React.useState([])
    const [heading, setHeading] = React.useState("")
    
    let list

    function handleSubmit(event){
        event.preventDefault()
        setNames(prevNames=> [...prevNames, formData.name]) 
    }
    
    
    function handleChange(event){
        const {name, value} = event.target
        setHeading(value)
        setFormData(prevData =>{
            return{
                ...prevData,
                [name]: value
            }
        })
    }
    return(
        <div className="container">
            <form onSubmit={handleSubmit}>
            <input 
                placeholder="Enter Name"
                onChange={handleChange}
                type="text"
                name="name"
                value={formData.name}
                required
                ></input>
            <h1>{heading}</h1>    
            <button>Submit</button>
            </form>
            <List
                names = {names}
            />
            
        </div>
    )
}