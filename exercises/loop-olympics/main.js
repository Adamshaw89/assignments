//Write a for loop that prints to the console the numbers 0 through 9

/*
for (i =0; i <= 9; i++){
    console.log(i)
}
*/

//Write a for loop that prints to the console 9 through 0.
/*
for (i = 9; i >=0; i--){
    console.log(i)
}
*/

//Write a for loop that prints these fruits to the console.const fruit = ["banana", "orange", "apple", "kiwi"]
/*
const fruit = ["banana", "orange", "apple", "kiwi"]

for (i = 0; i < fruit.length; i ++){
    console.log(fruit[i])
}
*/

//Write a for loop that will push the numbers 0 through 9 to an array.
/*
let num = []

for (i = 0; i <= 9; i ++){
    num.push(i)
}

console.log(num)
*/

//Write a for loop that prints to the console only even numbers 0 through 100.
/*
for (i = 0; i <= 100; i ++){
    if (i %2 == 0){
        console.log(i)
    }
}
*/

//Write a for loop that will push every other fruit to an array.const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]
/*
let otherFruit = [];

const fruit = ["banana", "orange", "apple", "kiwi", "pear", "peach"]

for (i = 0; i < fruit.length; i += 2){
    
        otherFruit.push(fruit[i])
   
}

console.log(otherFruit)
*/


/*Silver Medal

const peopleArray = [
    {
      name: "Harrison Ford",
      occupation: "Actor"
    },
    {
      name: "Justin Bieber",
      occupation: "Singer"
    },
    {
      name: "Vladimir Putin",
      occupation: "Politician"
    },
    {
      name: "Oprah",
      occupation: "Entertainer"
    }
  ]

//Write a loop that will print out all the names of the people of the people array
for (i = 0; i < peopleArray.length; i ++){
    
    console.log(peopleArray[i].name)
}

Write a loop that pushes every other name to an array starting with the first person, in this case "Harrison Ford", 
and every other occupation to *another* array starting with, in this case, "Singer".
let otherName = [];

let otherJob = [];

for (i = 0; i < peopleArray.length; i += 2){
    
    otherName.push(peopleArray[i].name)
}

for (i = 1; i < peopleArray.length; i += 2){
    
    otherJob.push(peopleArray[i].occupation)
}

console.log(otherName)

console.log(otherJob)

Think about what good names for the arrays would be. Since it will be an array of each name or occupation, 
the plurals of name and occupation would be appropriate.

*/

let arrOfArr = 
[
    [],
    [],
    []
] 

for (i = 0; i < arrOfArr.length; i ++){
    for (j = 0; j < 3; j++){
        arrOfArr[i].push(0)
    }
    
    
}
console.log(arrOfArr)