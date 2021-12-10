/*Turn an array of numbers into a total of all the number
let numbers = [1, 2, 3, 4, 5]

let sum = numbers.reduce(function(final, num){
     return final + num
}, 0)

console.log(sum)
*/
/*Turn an array of numbers into a long string of all those numbers.
let numbers = [1, 2, 3, 4, 5]
let string = "";
let stringNum = numbers.reduce(function(final, num){
    return final + num
    
},[])

console.log(stringNum)
*/
/*Turn an array of voter objects into a count of how many people voted
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]
*/
/*
let count = voters.reduce(function(final, voter){
    if (voter.voted){
        final++
    }
    return final
},0);
console.log("Total Voted: " + count)
*/
/*Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];
let totalCost = wishlist.reduce(function(final, gift){
    return final + gift.price
},0)

console.log(totalCost)
*/
/*Given an array of arrays, flatten them into a single arr
var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


let singleArr = arrays.reduce(function(a, b){
    return a.concat(b)
     
},[])
console.log(singleArr)
*/
/*Given an array of potential voters, return an object representing the results of the vote
Include how many of the 
potential voters were in the ages 18-25,
 how many from 26-35, how many from 36-55, 
 and how many of each of those age ranges actually voted. 
The resulting object containing this data should have 6 properties. See the example output at the bottom.*/

var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
]

let results = voters.reduce(function(final, voter){
    if (voter.age < 26){
        final.youngest++    
    }else if (voter.age > 25 & voter.age < 36){
        final.middle++
    }else if (voter.age > 36){
        final.oldest++
    }
    
    if (voter.age < 26 & voter.voted == true){
        final.youngestVoted++
    }else if(voter.age > 25 & voter.age < 36 & voter.voted == true){
        final.middleVoted++
    }else if (voter.age > 36 & voter.voted == true){
        final.oldestVoted++
    }
    return final
},{youngest:0, middle:0, oldest:0, youngestVoted: 0, middleVoted: 0, oldestVoted: 0  })

console.log(results)