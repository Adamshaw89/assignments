const button = document.getElementById("click");
let savedCount = localStorage.getItem("counting");
let lastHigh = localStorage.getItem("keepScore")
let highestScore = parseInt(lastHigh) || 0;
let clicks = parseInt(savedCount) || 0;
document.getElementById("score").textContent = "High Score: " + highestScore;
button.addEventListener("click", adding);

function adding (){
    clicks += 1
    document.getElementById("count").textContent = "You've clicked the button " + clicks + " times!";
    localStorage.setItem("counting", clicks);
    if (clicks > highestScore){
        let highestScore = clicks;
        localStorage.setItem("keepScore", highestScore)
     }
}

let time = 10
function timer (){
    time -= 1
    document.getElementById("timer").textContent = "Time Remaining: " + time;
    if (time <= 0){
        stopCount()
        delete localStorage.counting;
    }
}
let countdown = setInterval(timer, 1000)


function stopCount (){
    clearInterval(countdown);
    button.removeEventListener("click", adding)
   
}


