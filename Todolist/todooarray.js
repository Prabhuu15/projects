var todo = [];
var textbox = document.getElementById("inputbox");
var todolist = document.getElementById("listsss");

function addtask() {
    var taskText = textbox.value;

    if (taskText === "") {
        alert("Write something");

    }
else{
    todo.push(taskText);
    add();
    textbox.value = "";
    }
}

function add() {
    todolist.innerHTML = "";

    todo.forEach(task => {
        let li = document.createElement("li");
        li.innerText = task;

        let deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";
        deleteButton.addEventListener("click", () => {
            deleteTask(task);
        });
        let editButton = document.createElement("button");
        editButton.textContent = "edit";
        editButton.className = "edit-button"; 
        editButton.addEventListener("click", () => {
            edit(task);
        });
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        todolist.appendChild(li);
    });
}
function deleteTask(i){
    todo.splice(i,1)
    add()
}
function edit (i){
    newvalue = prompt("enter the task")
    todo.splice(i,1,newvalue)
    add()
}