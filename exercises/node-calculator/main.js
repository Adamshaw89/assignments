const readline = require("readline-sync")


const first = readline.questionFloat(["Please enter your first number. "])

const second = readline.questionFloat(["Please enter your second number. "]);

let operations = ['add', 'subtract', 'divide', 'multiply'];
  
let choice = readline.keyInSelect(operations, 'Please enter the operation to perform?');

if (operations[choice] == 'add'){
    console.log ("The result is " + add(first, second));

}       else if (operations[choice] == 'subtract'){
                console.log("The result is " + subtract(first,second))

        }       else if (operations[choice] == 'divide'){
                        console.log("The result is " + divide(first,second))
        
                }       else if (operations[choice] == 'multiply'){
                        console.log ("The result is " + multiply(first, second))
                        }

function add (num1, num2){
    return  (num1) + (num2);
}

function subtract (num1, num2){
    return (num1) - (num2);
}

function divide (num1, num2){
    return (num1) / (num2);
}

function multiply (num1, num2){
    return (num1) * (num2);
}

