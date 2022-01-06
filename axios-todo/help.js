var todoList;
function getTodoList(){
    axios.get("https://api.vschool.io/lucrikardofils/todo/")
    .then( res => {
        create_list(res.data)
    })
        .catch(error => console.log(error))
// xmlHttp.open( "GET", "https://api.vschool.io/lucrikardofils/todo/", false ); // false for synchronous request
}
var container = document.getElementById("main");

function create_list(todoList){
    for(var i=0; i < todoList.length; i++){
     var tag = document.createElement("p");
     var status = document.createElement("p");
     tag.innerHTML = todoList[i].title
     container.appendChild(tag);
    if(todoList[i].completed == true){
        status.innerHTML = "finished";
    }else{
        status.innerHTML = "not finished";
    }
        container.appendChild(status);
    if(todoList[i].completed == false){
        status.innerHTML = "finished"
    }else{
        status.innerHTML = "not finished"
    }
}
}
function makeTodo(todo){
    console.log(todo)
}
getTodoList();