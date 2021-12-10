/*Make an array of numbers that are doubles of the first array
let nums = [1, 2, 3];

let newNums = nums.map(function (num){
    return num * 2;
    
})

console.log(newNums)
*/
/*Take an array of numbers and make them strings
let nums = [1, 2, 3];

let stringNums = nums.map(function(num){
    return num.toString()
})

console.log(stringNums);
*/
/*Capitalize each of an array of names
let names = ["john", "jacob", "jingleheimer"]

let caps = names.map(function(name){
    return name[0].toUpperCase() + name.substr(1)

})
console.log(caps)
*/
/*Make an array of strings of the names
let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
let names = people.map(function(person){
    return person.name;
})

console.log(names)
*/
/*Make an array of strings of the names saying whether or not they can go to The Matrix
let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

let matrix = people.map(function(person){
    if (person.age > 18){
        return person.name + " can go to the Matrix."
    }else{
        return person.name + " cannot go to the Matrix."
    }
})
console.log(matrix)
*/
//Make an array of the names in h1s, and the ages in h2s
let people = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
let titles = people.map(function(person){
    person.name = "<h1>" + person.name + "</h1>";
    person.age = "<h2>" + person.age + "</h2>";   
    return person
})

console.log(titles)