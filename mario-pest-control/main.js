let goombaForm = document.goomba;
let cheepForm = document.cheep;
let bobForm = document.bob;
let totals = [];
let cost = document.getElementById("cost");

let goomba = goombaForm.addEventListener("submit", function(e){
    e.preventDefault()
    let goomba = goombaForm.goombas.value;
    let goombaCost = parseInt(goomba) * 5;
    totals.push(goombaCost);
    cost.textContent = "Click above to see total.";
})

let cheep = cheepForm.addEventListener("submit", function(e){
        e.preventDefault()
        let cheep = cheepForm.cheeps.value;
        let cheepCost = parseInt(cheep) * 11;
        totals.push(cheepCost);
        cost.textContent = "Click above to see total.";
})

let bob = bobForm.addEventListener("submit", function(e){
        e.preventDefault()
        let bob = bobForm.bobs.value;
        let bobCost = parseInt(bob) * 7;
        totals.push(bobCost);
        cost.textContent = "Click above to see total.";
})

document.getElementById("total").addEventListener("click", function(e){
    e.preventDefault()
    const sum = totals.reduce((accumulator, currentValue) =>{
        return accumulator + parseInt(currentValue);
    }, 0);
    cost.textContent = "Your total is " + sum + " coins.";
    goombaForm.goombas.value = 0;
    cheepForm.cheeps.value = 0;
    bobForm.bobs.value = 0;
    totals = []
})

