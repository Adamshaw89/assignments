let header = document.getElementById("header");

header.innerHTML = "<h1>JavaScript Made This!!</h1> <h2><span id = 'myName'> Adam</span> wrote the JavaScript.</h2>"

let myName = document.getElementById("myName");

myName.style.color = "peachpuff";

let message = document.getElementsByClassName("message");

message[0].textContent = "Order, eh? Who does he think he is? Heh.";

message[1].textContent = " I am your king!"

message[2].textContent = "Well, I didn't vote for you.";

message[3].textContent = "You don't vote for kings."

let clear = document.getElementById('clear-button');

clear.addEventListener("click", clearText);

function clearText(){
    for (let index = 0; index < message.length; index++) {
        message[index].textContent = '';
        
    }
}

let left = document.getElementsByClassName("left");
let right = document.getElementsByClassName("right");


/*
function blue(){
    for (let index = 0; index < left.length; index++) {
        left[index].style.backgroundColor = "blue";        
    } 
}

function brown(){
    for (let index = 0; index < left.length; index++) {
        right.style.backgroundColor = "brown";       
    } 
}


function black(){

    for (let index = 0; index < left.length; index++) {
       left.style.backgroundColor = "black";        
    } 
}     

function red(){

    for (let index = 0; index < left.length; index++) {
       right.style.backgroundColor = "red";      
    } 
}
*/
const themes = document.getElementById("theme-drop-down");

themes.addEventListener("change", val);

let values = "theme-one";
let select = document.getElementsByTagName("select");

function val() {
    var values = themes.options.value;
    return(values);
}

function blueBrown(){
    right[0].style.backgroundColor = "brown";
    right[1].style.backgroundColor = "brown";
    left[0].style.backgroundColor = "blue";
    left[1].style.backgroundColor = "blue";
}

function blackRed(){
    right[0].style.backgroundColor = "red";
    right[1].style.backgroundColor = "red";
    left[0].style.backgroundColor = "black";
    left[1].style.backgroundColor = "black";
}
if (values === "theme-one"){
    blueBrown();
    } else if (values === "theme-two"){
        blackRed();
}

