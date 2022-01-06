import React from "react"
import Location from "./Location"

let vacationSpots = [
    {
      place: "Meridian, Idaho",
      price: 40,
      timeToGo: "Spring"
    },{
      place: "Cancun",
      price: 900,
      timeToGo: "Winter"
    },{
      place: "China",
      price: 1200,
      timeToGo: "Fall"
    },{
      place: "Russia",
      price: 1100,
      timeToGo: "Summer"
    },{
      place: "Lebanon",
      price: 400,
      timeToGo: "Spring"
    }
  ]

  export default function Spots(){
        let information = vacationSpots.map(info =>{
          
          return(
                    <Location
                    place = {info.place}
                    price = {info.price}
                    time = {info.timeToGo} 
                    />
                )
                 
            })
           return information
    }