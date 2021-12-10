/*
1. Console must greet player with a fun message
2. Console must ask for the player's name and store it
3. Walking:
- The console will ask the user to enter a "w" to walk
- Every time the player walks, a random algorithm will be run that determines if a wild enemy has appeared (A 1/3 or 1/4 chance of being attacked)
- Use a while loop to control this flow.
1. If a wild enemy appears:
- The enemy is random (can be chosen out of a minimum of 3 different enemy names)
- The user can decide to attack or run
- If attacking, a random amount of damage will be delt between a min and max
- If running, there will be a 50% chance of escaping
- After the player attacks or runs the enemy attacks back for a random damage amount
- The player and enemy will attack each other in a loop until one of them passes out or dies.
- If the player kills the enemy you can give the Player some HP and a special item that is stored in the inventory. After this, the player will continue walking.
- If the enemy kills the player the console prints a cool death message and the game ends
1. Inventory
- When the player kills enemies, they are awarded with items
- If the user enters 'Print' or 'p' in the console, the console will print the players name, HP, and each item in their inventory
*/
var readlineSync = require('readline-sync');

console.log("Greetings weary traveler!")

let name = readlineSync.question("What is thy name? ");

console.log("Steel yourself " + name + ", your adventure begins now!")

let isAlive = true;

// Defining player
function Player (name, hp, attack, inventory, itemHeld){
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.inventory = inventory;
    this.itemHeld = itemHeld;
}

let inventory = ["Dagger"]
let newPlayer = new Player(name, 100, 60, inventory)


// Defining enemies

function Enemy (name, hp, attack, hpGiven, itemGiven)  {
    this.name = name;
    this.hp = hp;
    this.attack = attack;
    this.hpGiven = hpGiven;
    this.itemGiven = itemGiven;
}

let balrog = new Enemy ("Balrog", 150, 80, 100, "Glamdring ");
let caveTroll = new Enemy ("Cave Troll", 80, 25, 25, "Orcrist ");
let urukHai = new Enemy ("Uruk Hai", 40, 10, 10, "Kingsfoil ");
let itemHeld = "";
let enemies = [balrog, caveTroll, urukHai]

//gameplay
while(isAlive){
    const action = readlineSync.keyIn("Would you like to [w] Walk, [p] Print Inventory, [c] Choose item to hold, or [q] Quit?", {limit: "wqcp"})
    
    if(action === 'w'){
        walk()
    }else if (action === 'p'){
        printInventory()
    }else if(action === 'q'){
       isAlive = false
       console.log('You quit playing.') 
    }else if (action === "c"){
        item()
    }

function item (){
    let itemChoice = readlineSync.keyInSelect(inventory, "Choose item to use.");
    let itemHeld = inventory[itemChoice];
    console.log("You are holding: " + itemHeld)
    console.log("You're hp is: " + newPlayer.hp);
    return itemHeld;
}

function walk(){
    const random = Math.floor(Math.random()*3) +1;
    if(random === 2){
        enemyAppears()
    }else{
        console.log("You took one more step. This is the farthest away from home you have ever been.")
    }
}

function enemyAppears (){
    const random = Math.floor(Math.random()*3) +1;
    if (random === 1){
        balrogFight()
    } else if (random === 2){
        caveTrollFight()
    }else {
        urukHaiFight()
    }
}

function damage (){
    let pDamage = Math.floor(Math.random() * 60) +1;
    if (itemHeld == "Orcrist"){
        pDamage = Math.floor(Math.random() * 80) + 1;
    }else if (itemHeld == "Glamdring"){
        pDamage = Math.floor(Math.random() * 100) + 11;
    }
    return pDamage;

}

function balrogFight (){
    let choice = readlineSync.keyIn("A Balrog appears! Will you [r] Run, or [f] Fight?", {limit: "fr"});
    const run = Math.floor(Math.random() * 2) +1;
    const bDamage = Math.floor(Math.random() * 80) +1;
    //const pDamage = Math.floor(Math.random() * 60) +1;
    if (choice === "r"){
        if (run === 1){
            console.log("You escaped!")
        }else {
            console.log("The Balrog attacks before you can escape!");
            newPlayer.hp = newPlayer.hp - bDamage; 
            console.log("Your hp is: " + newPlayer.hp);
           
        }
    } else if (choice === "f"){
            while (newPlayer.hp > 0 & balrog.hp > 0){ 
                balrog.hp = balrog.hp - damage();
                
                console.log("The Balrog's hp is: " + balrog.hp)
                if (balrog.hp <= 0) { break; }
                newPlayer.hp = newPlayer.hp - bDamage;
                console.log("Your hp is: " + newPlayer.hp)
            }
            if (balrog.hp <= 0 & newPlayer.hp > 0){
                console.log("You defeated the Balrog!");
                newPlayer.hp = newPlayer.hp + balrog.hpGiven;
                console.log("Your strength has been renewed. Current hp: " + newPlayer.hp);
                inventory.push(balrog.itemGiven);
                console.log("You have recieved: " + balrog.itemGiven);
                console.log("Current inventory: " + inventory);
                balrog.hp = 150;

            }else {
                console.log("You have been slain!")
                isAlive = false;
            }     
            
        
    }

}

function caveTrollFight (){
    let choice = readlineSync.keyIn("A Cave Troll appears! Will you [r] Run, or [f] Fight?", {limit: "fr"});
    const run = Math.floor(Math.random() * 2) +1;
    const cDamage = Math.floor(Math.random() * 40) +1;
    //const pDamage = Math.floor(Math.random() * 60) +1;
    if (choice === "r"){
        if (run === 1){
            console.log("You escaped!")
        }else {
            console.log("The Cave Troll attacks before you can escape!");
            newPlayer.hp = newPlayer.hp - cDamage; 
            console.log("Your hp is: " + newPlayer.hp);
        }
    } else if (choice === "f"){
            while (newPlayer.hp > 0 & caveTroll.hp > 0){ 
                caveTroll.hp = caveTroll.hp - damage();
                
                console.log("The Cave Troll's hp is: " + caveTroll.hp)
                if (caveTroll.hp <= 0) { break; }
                newPlayer.hp = newPlayer.hp - cDamage;
                console.log("Your hp is: " + newPlayer.hp)
            }
            if (caveTroll.hp <= 0 & newPlayer.hp > 0){
                console.log("You defeated the Cave Troll!");
                newPlayer.hp = newPlayer.hp + caveTroll.hpGiven;
                console.log("Your strength has been renewed. Current hp: " + newPlayer.hp);
                inventory.push(caveTroll.itemGiven);
                console.log("You have recieved: " + caveTroll.itemGiven);
                console.log("Current inventory: " + inventory);
                caveTroll.hp = 80;

            }else {
                console.log("You have been slain!")
                isAlive = false;
            }     
        
        
    }

}

function urukHaiFight (){
    let choice = readlineSync.keyIn("An Uruk Hai appears! Will you [r] Run, or [f] Fight?", {limit: "fr"});
    const run = Math.floor(Math.random() * 2) +1;
    const uDamage = Math.floor(Math.random() * 20) +1;
    //const pDamage = Math.floor(Math.random() * 60) +1;
    if (choice === "r"){
        if (run === 1){
            console.log("You escaped!")
        }else {
            console.log("The Uruk Hai attacks before you can escape!");
            newPlayer.hp = newPlayer.hp - uDamage; 
            console.log("Your hp is: " + newPlayer.hp);
        }
    } else if (choice === "f"){
            while (newPlayer.hp > 0 & urukHai.hp > 0){ 
                urukHai.hp = urukHai.hp - damage();
                console.log("The Uruk Hai's hp is: " + urukHai.hp)
                if (urukHai.hp <= 0) { break; }
                newPlayer.hp = newPlayer.hp - uDamage;
                console.log("Your hp is: " + newPlayer.hp)
            }
            if (urukHai.hp <= 0 & newPlayer.hp > 0){
                console.log("You defeated the Uruk Hai!");
                newPlayer.hp = newPlayer.hp + urukHai.hpGiven;
                console.log("Your strength has been renewed. Current hp: " + newPlayer.hp);
                inventory.push(urukHai.itemGiven);
                console.log("You have recieved: " + urukHai.itemGiven);
                console.log("Current inventory: " + inventory);
                urukHai.hp = 40;

            }else {
                console.log("You have been slain!")
                isAlive = false;
            }     
        
        
    }

    if (newPlayer.hp <= 0){
        console.log('You have been slain!')
        isAlive = false;
    }

}

function printInventory (){
    console.log(inventory)
}






}

