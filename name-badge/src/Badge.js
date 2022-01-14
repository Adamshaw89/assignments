import React from "react"

export default function Badge(props){
    return(
        <div className="badge">
            <div className="titleBar">
                <h1>Badge:</h1>
            </div>
            <p>Name:{props.firstName} {props.lastName}</p>
            <p>Phone: {props.phone}</p>
            <p>Place of birth: {props.birthPlace}</p>
            <p>Favorite Food: {props.food}</p>
            <p>Email: {props.email}</p>
            <p className="textBlock">{props.bio}</p>
        </div>
    )
}