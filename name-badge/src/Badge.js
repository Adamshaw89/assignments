import React from "react"

export default function Badge({badges}){
    
    let badge = badges.map(person=> {
        return(
        <li className="badge">
            <div className="titleBar">
                <h1>Badge:</h1>
            </div>
            <p>Name:{person.firstName} {person.lastName}</p>
            <p>Phone: {person.phone}</p>
            <p>Place of birth: {person.birthPlace}</p>
            <p>Favorite Food: {person.food}</p>
            <p>Email: {person.email}</p>
            <p className="textBlock">{person.bio}</p>
        </li>
    )}
   
   )
    return badge
}