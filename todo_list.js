let entryCount = 1;
let entries = [];

function getTodoItem(){
    var todoItem = document.getElementById("todoItemTextBox").value;
    entries.push(todoItem);
    putTodoItem(todoItem);
} 

function putTodoItem(todoItem){
    entryCount = entries.length;
    var completelist = document.getElementById("todoItemList");
    completelist.innerHTML += "<li id=" + entryCount +">" + entryCount +". " + todoItem + "<button type='button' class='clearTodoItem' id=" + entryCount +" onclick='clearTodoItem(" + entryCount + ")'>x</button>" + "</li>";
} 

function clearTodoItem(entryCount){
    entries = entries.filter(a => a !== entries[entryCount-1]);
    var completelist = document.getElementById("todoItemList");
    completelist.innerHTML = ""
    entryCount = 1;
    for (let i = 0; i < entries.length; i++){
        completelist.innerHTML += "<li id=" + entryCount +">" + entryCount +". " + entries[i] + "<button type='button' class='clearTodoItem' id=" + entryCount +" onclick='clearTodoItem(" + entryCount + ")'>x</button>" + "</li>";
        entryCount++;
    }
}

function clearTodoList(){
    var completelist = document.getElementById("todoItemList");
    entries = [];
    entryCount = 0;
    completelist.innerHTML = "";
}


