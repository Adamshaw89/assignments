
//var todoList;
function getTodoList(){
    axios.get("https://api.vschool.io/lucrikardofils/todo/")
    .then( res => {
        create_list(res.data)
    })
        .catch(error => console.log(error))
// xmlHttp.open( "GET", "https://api.vschool.io/lucrikardofils/todo/", false ); // false for synchronous request
}
var container = document.getElementById("main");

function create_list(data){
    for (let i = 0; i < data.length; i++) {
        const checkbox = document.createElement('input')
        checkbox.setAttribute("type", "checkbox")
        if (data[i].completed === true) {
            checkbox.checked = "checked"
            checkbox.addEventListener("change", function() {
                axios.put("https://api.vschool.io/lucrikardofils/todo/" + data[i]._id, {completed: false})
                .then (res => getData())
                .catch (err => console.log(err))
            })
        } else (data[i].completed === false) ;{
            checkbox.addEventListener("change", function() {
                axios.put("https://api.vschool.io/lucrikardofils/todo/" + data[i]._id, {completed: true})
                .then (res => getData())
                .catch (err => console.log(err))
            });
        }
}}
function makeTodo(todo){
    console.log(todo)
}

getTodoList();
