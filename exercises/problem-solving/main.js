//Write a function that takes an array of numbers and returns the largest (without using `Math.max()`)
/*
let largest = 0;
let nums = [0, 1, 2, 3, 4]

function big (arr, large){
for (i = 0; i < arr.length; i ++){
    if (arr[i] > large){
        large = arr[i];
    }
    }
    console.log(large);
}

big (nums, largest)
*/
//Write a function that takes an array of words and a character and returns each word that has that character present.
/*
let arr = ["Gondor", "Calls", "For", "Aide!"];
let sym = "!";

function symbol (array, symbol){
    for (i = 0; i < array.length; i ++){
        if (array[i].includes(sym)){
            console.log(array[i]);
        }
    }
}
symbol(arr, sym)
*/
//Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

let first = 3;
let second = 10;

function isDivisible (num1, num2){
    if (num1 % num2 === 0){
        console.log("Divisible!")
    } else {
        console.log("Indivisible, for liberty...")
    }
}

isDivisible(first, second);