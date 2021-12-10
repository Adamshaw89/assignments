
let fizzRay = [];

function fizzy (){
    for (i = 1; i <=100; i ++){
        if (i % 3 == 0 & i % 5 != 0){
            fizzRay.push("fizz");
        }else if (i % 5 == 0 & i % 3 != 0){
            fizzRay.push("buzz")
        }else if (i % 3 == 0 & i % 5 ==0){
            fizzRay.push("fizzbuzz")
        }else {
            fizzRay.push(i)
        }
    }
    console.log(fizzRay);
}

let counts = {
    fizz: 0,
    buzz: 0,
    fizzbuzz: 0,

}

function count (arr){
    let f = 0;
    let b = 0;
    let fb = 0;
    for (i =0; i< arr.length; i++){
        if (arr[i] == "fizz"){
            f ++;
        }else if (arr[i] == "buzz"){
            b ++;
        }else if (arr[i] == "fizzbuzz"){
            fb ++;
        }
        
    }
    counts.fizz = f;
    counts.buzz = b;
    counts.fizzbuzz = fb;
    console.log(counts);
}
fizzy()
count(fizzRay)


