const pendingList = document.getElementById("pendingList");
const completedList = document.getElementById("completedList");
function addTask() {
    const input = document.getElementById("taskInput");
    if (input.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    createTask(input.value);
    input.value = "";
}
function createTask(taskText) {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.innerText = taskText;
    const actions = document.createElement("div");
    actions.className = "actions";
    const completeBtn = document.createElement("button");
    completeBtn.innerText = "yes";
    completeBtn.onclick = function () {
        span.classList.add("completed");
        completeBtn.remove();
        completedList.appendChild(li);
    };
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = function () {
        const newTask = prompt("Edit Task", span.innerText);
        if (newTask !== null && newTask.trim() !== "") {
            span.innerText = newTask;
        }
    };
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = function () {
        li.remove();
    };
    actions.appendChild(completeBtn);
    actions.appendChild(editBtn);
    actions.appendChild(deleteBtn);
    li.appendChild(span);
    li.appendChild(actions);
    pendingList.appendChild(li);
}
