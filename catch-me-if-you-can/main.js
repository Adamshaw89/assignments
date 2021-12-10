//Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:
//Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.
/*
try {
    function adding(num1, num2){
        if (typeof num1 != "number" || typeof num2 != "number"){
            throw new Error ("Please enter a number.")
        }
        return num1 + num2;
    } 
    }
    
    catch(err){
        console.log(err)
    }
    console.log( adding(1,2));
    console.log(adding(1,"f"));
*/
// Given a user object, write a function called login that takes a username and password as parameters. 
//Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"
//Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. 
//Make sure you see the appropriate message!

var user = {username: "sam", password: "123abc"};
try{
function login(username, password){
    if (username != user.username || password != user.password){
        throw new Error ("Incorrect username or password.")
    }else if (username == user.username & password == user.password){
        console.log("Login successful!")
    }
}}
catch(err){
    console.log(err)
}

console.log(login("sam", "123abc"))
console.log(login("sam", 23))

