import React from "react"
import './App.css';
import Badge from "./Badge"

function App() {
  const [formData, setFormData] = React.useState({
    firstName:"",
    lastName:"",
    phone:"",
    email:"",
    birthPlace:"",
    food:"",
    bio:""
  })
  function handleChange(event){
    const {type, name, value} = event.target
    setFormData(prevData => {
        return{
          ...prevData,
          [name]: value 
        }
      })
  }
  let BadgeCard
  function handleSubmit(event){
    event.preventDefault()
    console.log("hi")
    BadgeCard = <Badge 
                  firstName = {formData.firstName}
                  lastName = {formData.lastName}
                  phone = {formData.phone}
                  email = {formData.email}
                  birthPlace = {formData.birthPlace}
                  food = {formData.food}
                  bio = {formData.bio}
                />
    
    console.log(BadgeCard)
      
  }
  
  return (
    <div>
    <form onSubmit ={handleSubmit}>
      <input 
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        
      />
      <input 
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input 
        type="email"
        placeholder="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
       <input 
        type="phone"
        placeholder="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <input 
        type="text"
        placeholder="Place of birth"
        name="birthPlace"
        value={formData.birthPlace}
        onChange={handleChange}
      />
      <input 
        type="text"
        placeholder="Favorite Food"
        name="food"
        value={formData.food}
        onChange={handleChange}
      />
      <input 
        type="textarea"
        placeholder="Tell us about yourself."
        name="bio"
        value={formData.bio}
        onChange={handleChange}
      />
      <button>Submit</button>
    </form>
    {Badge}
    </div>
  );
}

export default App;
