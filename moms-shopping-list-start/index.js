let form = document.addItem

let list = document.getElementById("list");

let button = document.getElementsByTagName("button");



form.addEventListener("submit", function(e){
        
        e.preventDefault()

        // creating elements
        let container = document.createElement("div");

        let li = document.createElement("li");

        let newItem = addItem.title.value;

        let edit = document.createElement("button");

        let x = document.createElement("button");

        let save = document.createElement("button");

         let editBox = document.createElement("input");

        //editing text content of new elements
        save.textContent = "save"

        edit.textContent = "edit";

        x.textContent = "X";
        
        container.textContent = newItem;

        // adding classes and ids to new elements
        edit.setAttribute("class", "button");
    
        x.setAttribute("class", "button");

        li.setAttribute("id", "list > li");

        editBox.setAttribute("type", "text");            

        editBox.placeholder = newItem;

        // appending new elements 
        list.append(li);

        li.append(container, edit, x);

        // giving functionality to buttons 
        x.addEventListener("click", function(e){
            li.remove();
        })

        edit.addEventListener("click", function(e){
        
            li.append(editBox);

            edit.remove()

            li.insertBefore(save,x)

            })

        save.addEventListener("click", function(e){
            
            container.textContent = editBox.value;

            editBox.remove();
            
            save.remove();

            li.insertBefore(edit, x);

        })    

        form.title.value = "";

        

    })


