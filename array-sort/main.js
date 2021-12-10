/*Sort an array from smallest number to largest
let numbers = [1, 5, 6, 67, 2, 14]

let sorted = numbers.sort((a,b) => a-b)

console.log(sorted)
*/
/*Sort an array from largest number to smallest
let numbers = [1, 5, 6, 67, 2, 14]

let sorting = numbers.sort((a,b) => b - a)

console.log(sorting)
*/
/*Sort an array from shortest string to longest
let words = ["The", "beacons", "are", "lit", "Gondor", "calls", "for", "aide!"]

let shortLong = words.sort((a, b) => a.length -b.length)

console.log(shortLong)
*/
/*Sort an array alphabetically
let words = ["the", "beacons", "are", "lit", "gondor", "calls", "for", "aide!"]
let alpha = words.sort();

console.log(alpha)
*/
//Sort the objects in the array by age
let people = [
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]

let byAge = people.sort((a, b) => a.age - b.age);

console.log(byAge)