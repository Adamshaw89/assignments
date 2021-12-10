/*The square's color will change as follows:

- Blue when the mouse hovers over the square
- Red when the mouse button is held down over the square
- Yellow when the mouse button is let go over the square
- Green when the mouse is double clicked in the square
- Orange when the mouse scroll is used somewhere in the window (not just over the square).

You should also be able to press the first letter of the colors (typing "r" on the keyboard for "red", for example) and have the box change to that color.*/

let square = document.querySelector(".square");

square.addEventListener("mouseover", blue);

function blue(){
    square.style.backgroundColor = "blue";
}

square.addEventListener("mouseout", white);

function white(){
    square.style.backgroundColor = "white";
}

square.addEventListener("mousedown", red);

function red(){
    square.style.backgroundColor = "red";
}

square.addEventListener("mouseup", yellow);

function yellow(){
    square.style.backgroundColor = "yellow";
}

square.addEventListener("dblclick", green);

function green(){
    square.style.backgroundColor = "green";
}

document.addEventListener("scroll", orange);

function orange (){
    square.style.backgroundColor = "orange";
}

document.addEventListener("keydown", (event) =>{
    if (event.key === "r" || event.key === "R" ){
        red()
    }else if (event.key === "b" || event.key === "B"){
        blue()
    }else if (event.key === "y" || event.key === "Y"){
        yellow()
    }else if (event.key === "g" || event.key === "G"){
            green()
    }else if (event.key === "o" || event.key === "O"){
                orange()
            }
})

document.addEventListener("keyup", white);