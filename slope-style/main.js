/* use rest to return array of animals


function collectAnimals(...animals){
    return animals
}
console.log(collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"))
*/

/*Write a function that returns a food object with the array names as properties. 
You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:
function combineFruit(fruit, sweets, vegetables){
    return {}
}

combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"])
//=> {
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }

let fruit = ["apple", "pear"]
let sweets = ["cake", "pie"]
let vegetables = ["carrot"]
function combineFruit(fruit, sweets, vegetables){
    return {fruit, sweets, vegetables}
}
console.log(combineFruit(fruit, sweets, vegetables))
*/
/*
Use destructuring to use the property names as variables. Desructure the object in the parameter:

function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

const trip ={
  location: "Burly Idaho",
  duration: "2 weeks"
}
console.log(parseSentence(trip))
*/
/*
Use destructuring to make this code ES6:
function returnFirst(items){
    const [firstItem] = items; /*change this line to be es6*/
   // return firstItem
//}
/*
Write destructuring code to assign variables that will help us return the expected string. Also, change the string to be using Template literals:

const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    const [firstFav, secondFav, thirdFav] = arr
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`;
}

console.log(returnFavorites(favoriteActivities))
*/
/*
Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. 
You may write it assuming you will always recieve three arrays if you would like to.

function combineAnimals(arr1, arr2, arr3) {
    return [...arr1, ...arr2, ...arr3]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals));
*/
// ["dog", "cat", "mouse", "jackolope", "platypus"]

/*
function product(a, b, c, d, e) {
  var numbers = [a,b,c,d,e];

  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

let numbers = [1, 2, 3, 4, 5];
function product(numbers){
    return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(numbers))
*/
/*
Use at least both the rest and spread operators:
function unshift(array, a, b, c, d, e) {
  return [a, b, c, d, e].concat(array);
}

let unshift = (a, b, c, d, e, ...array) => [a, b, c, d, e, ...array];


*/  

function unshift(array, ...numbers) {
  return [...array, ...numbers]
} 

console.log(unshift([1,2,3,4], 5,6, 7, 8, 9))
/*
Write some destructuring code to help this function out. 
Use the ES6 shorthand that helps make the syntax look less redundant to simplify it:
*/
function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        let [firstName, lastName] = name;
        
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]))
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

