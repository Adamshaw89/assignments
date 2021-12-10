const readline = require("readline-sync");

console.log("A light bubbling sound fills your ears, like that of running water. A comfortable cool sensation  on your cheek, like that of stone, furthers the idea that you are resting along the bank of a stream. Smiling to yourself, you think of how relaxed you must have been to fall asleep. Your smile starts to fade though, as you notice the air seems stale, musty even. Your eyes open to a small, dimly lit room. ")

console.log("Eyes widening, you realize your relaxing stream is a group of beakers bubbling on a shelf. The cool stone is the dirty floor of windowless lab. The stale scent is no longer a mystery after looking at the stained walls.")

console.log("As you stand, you feel like the room is starting to spin. You stumble your way to a table and chairs, and take a seat to study your surroundings. Your eyes focus on the beakers first, wondering if the bubbling concoction is what was used to knock you out in the first place. The beakers sit atop an unkept counter. Various books and papers are strewn about the counter-top, drawers with broken and bent handles are underneath. To the right, filthy cages stacked chest high sit, adding to the stale air. Above the cages, you see a hole in the wall with jagged edges, a small dot of pale light can be seen deep within. Continuing around the room, you see a solid steel door. on the door, you see a handle, and a slot for a key. ")

console.log("A key hole on the inside? Your groggy mind tries to process. Continuing around, the rest of the room is filled with two large cabinets, a coat rack with stained lab coats, and shelving filled with books. Slowly, your mind starts to clear. With every bit of clarity, your heart beats faster. I have been drugged and dumped into a lab that definitely has some OSHA violations. you think to your self. Thinking you have stayed long enough, you start to figure out your options.")

console.log("Your options seem pretty clear. Try the door, look for a key, or check out the hole in the wall.")

let options = ['Try to open door', 'Look for a key.','Reach into hole in wall.'];

let locked = true;

let isAlive = true;

let hasKey = false;

while (locked & isAlive){
    const choice = readline.keyInSelect(options, 'What would you like to do?');

    if (options[choice] == 'Reach into hole in wall.'){
        console.log("Why would you reach into a hole? A foot tall Man-Bear-Pig crawls up your arm and bites your head off. You Died.");
        isAlive = false;
        
    } else if (options[choice] == 'Look for a key.'){
            hasKey = true;
            console.log("That was easy.");

    } else if (options[choice] == 'Try to open door' & hasKey == false){
            console.log("The door is obviously locked. Maybe you should look for a key or something?");

    } else if (options[choice] == 'Try to open door' & hasKey == true){
            locked = false; 
            console.log("You escaped!");
                                 
    }

}
















/*while (hasKey == false){
    locked == true;
}


if (options[choice] == 'Reach into hole in wall.'){
        console.log("Why would you reach into a hole? A foot tall Man-Bear-Pig crawls up your arm and bites your head off. You Died.");
        
    }   else if (options[choice] == 'Look for a key.'){
            console.log("That was easy.");
            let hasKey = true;

        }    else if (options[choice] == 'Try to open door' & hasKey == false){
                console.log("The door is obviously locked. Maybe you should look for a key or something?");
            
            }  else if (options[choice] == 'Try to open door' & hasKey == true){
    
                console.log("You escaped!");
                let locked = false;                  
                }
                        
 


let location = ['desk-top', 'drawers', 'cages', 'lab coats'];

function look(){
     const search = readline.keyInSelect(location, 'Where would you like to search?')
}

if (location[search]== 'desk-top'){
    console.log("You search through a bunch of dirty papers to no avail!")

}   else if (location[search]== 'drawers'){
        console.log("Empty liquor bottles, and a half eaten taco greet you.")

    }   else if (location[search]== 'cages'){
            console.log("Holy Crap! pun intended, you found the key!")
            hasKey = true;
        
        }   else if (location[search]== 'lab coats'){
            console.log("You found some candy wrappers and a self help seminar ticket!")
        }
    */