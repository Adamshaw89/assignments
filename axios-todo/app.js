
function getData(){
    axios.get("https://api.vschool.io/adamshaw/todo")
        .then(result => listData(result.data))
        .catch(err => console.log(err))
}



function listData(data){
    clearList()
    
    for(let i = 0; i < data.length; i++){
        const h3 = document.createElement('h3')
        const li = document.createElement('li')
        const p1 = document.createElement('p');
        const p2 = document.createElement('p');
        const p3 = document.createElement('p');
        const image = document.createElement('img');
        let edit = document.createElement('button');
        var del = document.createElement('button');
        let checker = document.createElement("input")
        checker.setAttribute("type", "checkbox")
        checker.setAttribute("name", "check")
        let save = document.createElement("button");
        save.textContent = "Save"
        let list = document.getElementById("list")
        let id = data[i]._id
        del.setAttribute("id", "del");
        edit.setAttribute("class", "edit");
        del.textContent = "Delete"
        edit.textContent = "Edit";
        image.setAttribute("src", `${data[i].imgUrl}`)
        image.setAttribute("alt", "")
        h3.textContent = data[i].title
        p1.textContent = data[i].description
        p2.textContent = `Price: ${data[i].price}`
        p3.textContent = `Completed: ${data[i].completed}`
        li.append(image, h3, p1, p2, p3, checker, edit, del)
        list.append(li);
       
       
        
        del.addEventListener("click", function(e){
            var item = e.target.parentElement
            console.log("Item trying to delete: ",item)
            list.removeChild(item)
            deleting(id) 
        })
        checker.addEventListener("click",function(){
            if (checker.checked){
                h3.innerHTML = `<strike>${data[i].title}</strike>`
                p3.textContent = `Completed: true`
                let complete = {
                    completed: true
                }
                axios.put(`https://api.vschool.io/adamshaw/todo/${id}`, complete)
                    .then(response => console.log(response.data))
                    .catch(error => console.log(error))
            }
        })

        edit.addEventListener("click", function(){
            edit.remove()
            li.append(save)
            // This only works on the second li?
            //li.insertBefore(save, del) 
            editing(h3, p1, p2, id, save, li, edit)
        })

        
    }    


    }
    

//edits
function editing(h3, p1, p2, id, save, li, edit){
   // let item = [];
    //item.push(h3, p1, p2);
    
    /*
    item.map(option =>{
        input = document.createElement("input");
        input.placeholder = option.textContent;
        option.textContent = "";
        option.append(input);
    })
   */
    
    input1 = document.createElement("input");
    input2 = document.createElement("input");
    input3 = document.createElement("input");
    input1.placeholder = h3.textContent;
    input2.placeholder = p1.textContent;
    input3.placeholder = p2.textContent;
    h3.textContent = ""
    p1.textContent = ""
    p2.textContent = ""
    h3.append(input1);
    p1.append(input2);
    p2.append(input3);
    
    save.addEventListener("click", function(){
        save.remove()
        // This only works on the second li?
        //li.insertBefore(edit, del)
        li.append(edit)
        h3.textContent = input1.value;
        p1.textContent = input2.value;
        p2.textContent = input3.value;
        let updates = {
            title: input1.value,
            description: input2.value,
            price: input3.value
    }
    axios.put(`https://api.vschool.io/adamshaw/todo/${id}`, updates)
    .then(response => console.log(response.data))
    .catch(error => console.log(error))
    })
}


   

// deletes
function deleting(id){
        console.log(id)
            axios.delete(`https://api.vschool.io/adamshaw/todo/${id}`)
            .then(response => console.log(response.data))
            .catch(error => console.log(error))
}


function clearList(){
    const element = document.getElementById('list')
    console.log(element)
    while(element.firstChild != null){
        element.removeChild(element.firstChild)
    }
}

getData()







const form = document.form
const description = form.description
const price = form.price
const pic = form.pic

form.addEventListener("submit", function(e){
    e.preventDefault()
    
    const newItem = {
        title: form.title.value,
        description: form.description.value,
        price: form.price.value,
        imgUrl: form.pic.value
    }
    
    form.title.value = ""
    form.description.value = ""
    form.price.value = ""
    form.pic.value = ""
    
    axios.post("https://api.vschool.io/adamshaw/todo", newItem)
        .then(result => getData())
        .catch(err => console.log(err))
})

