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
    bio:"",
        
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
  const [Badges, setBadges] = React.useState([

  ])
  function handleSubmit(event){
    event.preventDefault()
    console.log("submitted")
     setBadges(prevBadge=>{
                return[ 
                  ...prevBadge,
                  {firstName : formData.firstName,
                    lastName : formData.lastName,
                    phone : formData.phone,
                    email : formData.email,
                    birthPlace : formData.birthPlace,
                    food : formData.food,
                    bio : formData.bio 
                   }  
                                             
                   ]         
      }) 

      setFormData(prevFormData=>{
        return{
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        birthPlace:"",
        food:"",
        bio:"",
            
      }})
                          
  }
  
  return (
    <div className="container">
    <form onSubmit ={handleSubmit}>
      <input 
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
        minLength="3"
        required
      />
      <input 
        type="text"
        placeholder="Last Name"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        minLength="3"
        required
      />
      <input 
        type="email"
        placeholder="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        minLength="3"
        required
      />
       <input 
        type="tel"
        placeholder="Phone"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
        pattern="[0-9]{3}[0-9]{3}[0-9]{4}"
        required
        onInvalid={e => e.target.setCustomValidity('Enter Numbers Only')}
        onInput={e => e.target.setCustomValidity('')}
      />
      <input 
        type="text"
        placeholder="Place of birth"
        name="birthPlace"
        value={formData.birthPlace}
        onChange={handleChange}
        minLength="3"
        required
      />
      <input 
        type="text"
        placeholder="Favorite Food"
        name="food"
        value={formData.food}
        onChange={handleChange}
        minLength="3"
        required
      />
      <input 
        type="textarea"
        className="textBlock"
        placeholder="Tell us about yourself."
        name="bio"
        value={formData.bio}
        onChange={handleChange}
        minLength="3"
        required
      />
      <br/>
      <button>Submit</button>
    </form>
    <ul>
    <Badge 
     badges = {Badges}
    />
    </ul>
    </div>
  );
}

export default App;
