import React from "react"
import {Friends} from "./Friendlist"

export default function FriendCard(props){
   let pet = props.pets.map(pet =>
       <div className="pets">
       <h2 className="pet-name">{pet.name}</h2>
       <h3>{pet.breed}</h3>
       </div>
    )
   
    return(
        <div className="card">
            <h1 className="name">{props.name}</h1>
            <h3>{props.age}</h3>
            {pet}
        </div>
    )
}