let todoList = []

function getTodoItem(todoItem){
    var todoItem = document.getElementById("todoItem").value;
    todoList += todoItem;
    putTodoItem(todoItem);
} 

function putTodoItem(todoItem){
    var completelist = document.getElementById("todoItemList");
    completelist.innerHTML += "<li>Item " + todoItem + "</li>";
} 

function clearTodoItem(){
    var completelist = document.getElementById("todoItemList");
    completelist.innerHTML = "";
}

