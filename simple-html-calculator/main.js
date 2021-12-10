/*
- You are going to create a simple calculator that can Add, Subtract, and Multiply.
- You will have one section (`<div>`) for each math operation (so 3 sections) total
- Each section has two inputs to take the first and second numbers
- Each section will have a button to perform the operation
- You will inject the result into the HTML (not an alert)
- Your website will have 3 colors
- Your website will have proper padding/spacing to lay things out nicely
*/


add.addEventListener("submit", function(e){
    e.preventDefault()
    let add1 = document.add.add1.value;
    let add2 = document.add.add2.value;
    let sum = parseInt(add1) + parseInt(add2);
    let result = document.getElementById("sum")
    result.append("The result of " + add1 + " + " + add2 + " is " + sum + ".")
    document.add.add1.value = "";
    document.add.add2.value = "";
    
})

add.add1.addEventListener("click", function(e){
    document.getElementById("sum").textContent = "";
})

sub.addEventListener("submit", function(e){
    e.preventDefault()
    let sub1 = document.sub.sub1.value;
    let sub2 = document.sub.sub2.value;
    let difference = parseInt(sub1) - parseInt(sub2);
    let result = document.getElementById("difference")
    result.append("The result of " + sub1 + " - " + sub2 + " is " + difference + ".")
    document.sub.sub1.value = "";
    document.sub.sub2.value = "";
    
})

sub.sub1.addEventListener("click", function(e){
    document.getElementById("difference").textContent = "";
})

multiply.addEventListener("submit", function(e){
    e.preventDefault()
    let mul1 = document.multiply.mul1.value;
    let mul2 = document.multiply.mul2.value;
    let product = parseInt(mul1) * parseInt(mul2);
    let result = document.getElementById("product")
    result.append("The result of " + mul1 + " x " + mul2 + " is " + product + ".")
    document.multiply.mul1.value = "";
    document.multiply.mul2.value = "";
    
})

multiply.mul1.addEventListener("click", function(e){
    document.getElementById("product").textContent = "";
})