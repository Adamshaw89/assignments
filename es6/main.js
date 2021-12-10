/*
const name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (let i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])
*/
/*Re-write this .map() using an arrow function:

function mapVegetables(arr) {
    return arr.map(function(carrot) {
        return { type: "carrot", name: carrot }
    })
}
*/
const carrots = ["bright orange", "ripe", "rotten"]
function mapVegetables(arr){
    return arr.map(carrot => ({type: "carrot", name: carrot})) 
} 

console.log(mapVegetables(carrots))

//Re-write this .filter() using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]
/*
function filterForFriendly(arr) {
    return arr.filter(function(person) {
        return person.friendly
    })
}
*/
function filterForFriendly(arr){
   return arr.filter(person => person.friendly)
}
console.log(filterForFriendly(people))

/*Re-write the following functions to be arrow functions:
function doMathSum(a, b) {
    return a + b
}
var produceProduct = function(a, b) {
    return a * b
}
*/
let doMathSum = ((a, b) => a + b)
let produceProduct = ((a,b)=> a*b)

console.log(doMathSum(2,3))
console.log(produceProduct(3,5))

/*Write a printString function that takes firstName, lastName, and age as parameters and returns a string like the following:
Hi Kat Stark, how does it feel to be 40? firstName should default to "Jane"lastName should default to "Doe"age should default to 100
*/
let str = ((firstName = "Jane", lastName = "Doe", age = 100) => `Hi ${firstName} ${lastName}, how does it feel to be ${age}?`)
console.log(str("Bill", "Billson", 22))

//Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.

const animals = [
   {
       type: "dog",
       name: "theodore"
   },
   {
       type: "cat",
       name: "whiskers"
   },
   {
       type: "pig",
       name: "piglette"
   },
   {
       type: "dog",
       name: "sparky"
   }
];
/*
function filterForDogs(arr) {
    return arr.filter(animal => {
        if (animal.type === "dog") {
            return true
        } else {
            return false
        }
    })
}
*/
//function filterForDogs(arr){arr.filter(animal => animal.type === "dog" ? true : false)}
let filterForDogs = animals.filter(animal => animal.type === "dog" ? true : false)
console.log(filterForDogs)
/*
Using template literals, write a function that takes location and name parameters and outputs a message formatted like this:
Hi Janice!

Welcome to Hawaii.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.
*/
let string = ((location, name) => `Hi ${name} \n Welcome to ${location}. \n I hope you enjoy your stay. Please ask the president of ${location} if you need anything.`)
console.log(string("Hawaii", "Janice"))