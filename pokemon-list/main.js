const xhr = new XMLHttpRequest();
xhr.open("GET", "https://api.vschool.io/pokemon", true);
xhr.send();
xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const jData = xhr.responseText;
        const data = JSON.parse(jData);
        const pokemon = data.objects[0].pokemon
       names(pokemon);
        
    }
    
};

function names(pokemon){
    for(let i = 0; i < pokemon.length; i++){
       let h1 = document.createElement("h1");
       h1.textContent = ` ${pokemon[i].name} is a Pokemon`
       document.body.appendChild(h1)     
    }
        
    
}