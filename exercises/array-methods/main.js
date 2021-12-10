/*
1. Remove the last item from the vegetable array.
2. Remove the first item from the fruit array.
3. Find the index of "orange."
4. Add that number to the end of the fruit array.
5. Use the length property to find the length of the vegetable array.
6. Add that number to the end of the vegetable array.
7. Put the two arrays together into one array. Fruit first. Call the new Array "food".
8. Remove 2 elements from your new array starting at index 4 with one method.
9. Reverse your array.
10. Turn the array into a string and return it.

console.log("fruit: ", fruit);
console.log("vegetables: ", vegetables);
*/

var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

function fruitVeg (){
    let pop = vegetables.pop();
    let shift = fruit.shift()
    var num = fruit.indexOf("orange")
    let fruitNum = fruit.push(num)
    var vegL = vegetables.length
    let vegNum = vegetables.push(vegL)
    var food = fruit.concat(vegetables)
    let splice = food.splice(4,2)
    let reverse = food.reverse()
    let join = food.join(", ")
    //console.log(food)
    console.log("fruit: ", fruit, shift, fruitNum);
    console.log("vegetables: ", vegetables, pop, vegNum);
    console.log("food: ", food, splice, reverse, join)
}

fruitVeg()
