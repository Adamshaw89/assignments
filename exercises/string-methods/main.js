//Write a function that takes a string as a parameter and returns the same string in all capital letters followed by all lowercase letters.
/*
var word = "word"

function uperLower (string){
    let upString = string.toUpperCase()
    let lowString = string.toLowerCase()
    let upLow = upString.concat(lowString)
    console.log(upLow)
}
uperLower(word)
*/
//Write a function that takes a string as a parameter and returns a number that is half the string's length, rounded down. Hint: You'll need to use Math.floor().
/*
var word = "Gondors"

function half (string){
    var halfL = string.length / 2;
    console.log(Math.floor(halfL))
    
}

half(word)
*/
//Write a function that uses slice() and the other functions you've written to return the first half of the given string.
/*
var word = "Gondors"

function half (string){
    var halfL = string.length / 2;
    return(Math.floor(halfL))
    
}
var index = half(word)

function begining (string){
    var first = string.slice(0, index)
    console.log(first)
}

begining(word)
*/
//Write a function that takes a string as a parameter and returns that string where the first half is capitalized, and the second half is lowercase.
//Hint: If your string length is odd, use Math.floor() to round down.
/*
word = "gondors"

function upDown (string){
    var halfL = Math.floor(string.length / 2);
    var first = string.slice(0,halfL)
    var last = string.slice(halfL)
    var upFirst = first.toUpperCase();
    console.log(upFirst + last)
    
}

upDown(word)
*/
//Write a function that takes a string as a parameter and capitalizes any character that follows a space.
//This one is a step up in difficulty and utilizes the .split() string method and .join() array 
var words = "Gondor calls for aide!"

function upSpace (string){
    var arr = string.split(" ");
    for (let index = 0; index < arr.length; index++) {
        const up = arr[index].charAt(0).toUpperCase()
        
    }
    console.log(arr)
}
upSpace(words)