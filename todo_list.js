let entryCount = 1;
let entries = [];


function submitWithReturn(event) {
    if (event.keyCode === 13) {
        getTodoItem();
       }
  }
function getTodoItem(){
    let todoItem = document.getElementById("todoItemTextBox").value;
    entries.push(todoItem);
    putTodoItem(todoItem);
    let input = document.getElementById("todoItemTextBox");
    input.value = "";
} 

function putTodoItem(todoItem){
    entryCount = entries.length;
    var completelist = document.getElementById("todoItemList");
    completelist.innerHTML += "<li id=" + entryCount +">" + entryCount +". " + todoItem + "<button type='button' class='clearTodoItemFromListButton' id=" + entryCount +" onclick='clearTodoItemFromList(" + entryCount + ")'>x</button>" + "</li><hr>";
} 

function clearTodoItemFromList(entryCount){
    entries = entries.filter(a => a !== entries[entryCount-1]);
    var completelist = document.getElementById("todoItemList");
    completelist.innerHTML = ""
    entryCount = 1;
    for (let i = 0; i < entries.length; i++){
        completelist.innerHTML += "<li id=" + entryCount +">" + entryCount +". " + entries[i] + "<button type='button' class='clearTodoItemFromListButton' id=" + entryCount +" onclick='clearTodoItemFromList(" + entryCount + ")'>x</button>" + "</li><hr>";
        entryCount++;
    }
}

function clearTodoList(){
    var completelist = document.getElementById("todoItemList");
    entries = [];
    entryCount = 0;
    completelist.innerHTML = "";
}

