import React from "react"

export default function List({names}){
    console.log(names)
    let name = names.map(name=> <li>{name}</li>)
    return(
        <ol>
            {name}
        </ol>
    )
}