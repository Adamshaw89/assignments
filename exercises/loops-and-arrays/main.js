var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]
let num = 0
for (i = 0; i < officeItems.length; i ++){
    if (officeItems[i] == "computer"){
            
       num ++      
    }
}

console.log(num)

//2

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ]

  for (i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i ++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
          console.log(peopleWhoWantToSeeMadMaxFuryRoad[i].name + " is old enough.")
      }
  }