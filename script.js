function addTask() {

    let taskInput = document.getElementById("taskInput");

    let taskValue = taskInput.value;

    if(taskValue === "") {
        alert("Please enter a task");
        return;
    }

    let li = document.createElement("li");

    li.textContent = taskValue;

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}