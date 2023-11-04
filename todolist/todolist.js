let todoele = document.getElementById("taskinfo");
let tasklist = document.getElementById("tasklist");

document.getElementById("add").onclick = function () {
    if (todoele.value.length == 0) {
        alert("Enter a task details");
    } else {
        let newTask = document.createElement("div");
        newTask.classList.add("task");

        let taskText = document.createElement("span");
        taskText.id = "work";
        taskText.textContent = todoele.value;

        let editButton = document.createElement("button");
        editButton.classList.add("edit");
        editButton.innerHTML = '<i class="fa fa-edit"></i>';
        editButton.addEventListener("click", function () {
            editTask(taskText);
        });

        let deleteButton = document.createElement("button");
        deleteButton.classList.add("del");
        deleteButton.innerHTML = '<i class="fa fa-trash"></i>';
        deleteButton.addEventListener("click", function () {
            newTask.remove();
        });

        newTask.appendChild(taskText);
        newTask.appendChild(editButton);
        newTask.appendChild(deleteButton);

        tasklist.appendChild(newTask);

        todoele.value = "";
    }
};

function editTask(taskText) {
    let currentText = taskText.textContent;

    let editInput = document.createElement("input");
    editInput.type = "text";
    editInput.value = currentText;

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";

    saveButton.addEventListener("click", function () {
        taskText.textContent = editInput.value;
        taskText.parentNode.replaceChild(taskText, editInput);
    });

    taskText.parentNode.replaceChild(editInput, taskText);
    taskText.parentNode.appendChild(saveButton);
}
