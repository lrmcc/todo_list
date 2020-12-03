let entryCount = 1;
let entries = [];
let done = "<button type='button' class='todo-list-item-done-button' id=" + entryCount +" onclick='todoListItemDone(" + entryCount + ")'>Done</button>"
let clearItem = "<button type='button' class='clear-todo-item-from-list-button' id=" + entryCount +" onclick='clearTodoItemFromList(" + entryCount + ")'>x</button>";

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
    completelist.innerHTML += "<li onclick='todoListItemDone(this)' id=" + entryCount +">" + entryCount +". " + todoItem + clearItem + done + "</li><hr>";
} 

function todoListItemDone(item) {
    let txtDec = item.style.textDecoration;
    if (txtDec === "line-through"){
        item.style = "text-decoration:none;";
    }else{
      item.style = "text-decoration:line-through;";  
    }
    
  }

function exportTodoList(){
    let csvContent = "data:text/csv;charset=utf-8," + entries.toString();
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "todo_data.csv");
    document.body.appendChild(link);
    link.click(); 
}

function clearTodoItemFromList(itemEntryCount){
    entries = entries.filter(a => a !== entries[itemEntryCount-1]);
    var completelist = document.getElementById("todoItemList");
    completelist.innerHTML = ""
    entryCount = 1;
    for (let i = 0; i < entries.length; i++){
        completelist.innerHTML += "<li onclick='todoListItemDone(this)' id=" + entryCount +">" + entryCount +". " + entries[i] + clearItem + done + "</li><hr>";
        entryCount++;
    }
}

function clearTodoList(){
    let choice = confirm("Are you sure you want to clear the list?");
    if (choice){
        var completelist = document.getElementById("todoItemList");
        entries = [];
        entryCount = 0;
        completelist.innerHTML = "";
    }
    
}

