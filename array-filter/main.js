/* Given an array of numbers, return a new array that has only the numbers that are 5 or greater.
const numbers = [1, 2, 3, 8, 9]

let greater = numbers.filter(number => number > 5)

console.log(greater)
*/
/*Given an array of numbers, return a new array that only includes the even numbers.
let numbers = [1, 2, 3, 4]

let even = numbers.filter(num => num % 2 === 0);

console.log(even)
*/
//Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length
/*
let words = ["long", "longer", "longest"]

let short = words.filter(word => word.length <= 5);
console.log(short)
*/
/*Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.
let membership = [
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
]

let outsiders = membership.filter(person => person.member)
console.log(outsiders)
*/
//Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
let people = [
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
]

let old = people.filter(person => person.age >= 18);

console.log(old)