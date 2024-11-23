function addTask() {
    const taskInput = document.getElementById("new-task");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Digite uma tarefa!");
        return;
    }

    const taskList = document.getElementById("task-list");
    const listItem = document.createElement("li");

    const taskSpan = document.createElement("span");
    taskSpan.textContent = taskText;
    listItem.appendChild(taskSpan);

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Excluir";
    deleteButton.className = "delete-btn";
    deleteButton.onclick = function () {
        taskList.removeChild(listItem);
    };
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);
    taskInput.value = "";
}
