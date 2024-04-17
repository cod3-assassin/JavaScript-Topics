// script.js
document.getElementById("addTaskBtn").addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const newTaskText = input.value.trim();
  if (newTaskText !== "") {
    addTask(newTaskText);
    input.value = ""; // Clear input after adding
  }
});

function addTask(text) {
  const list = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.textContent = text;
  newTask.addEventListener("click", function () {
    this.classList.toggle("completed");
    saveTasks();
  });
  newTask.addEventListener("dblclick", function () {
    list.removeChild(this);
    saveTasks();
  });
  list.appendChild(newTask);
  saveTasks();
}
//Challnege for my self
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li").forEach((task) => {
    tasks.push({
      text: task.textContent,
      completed: task.classList.contains("completed"),
    });
  });
  window.localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(window.localStorage.getItem("tasks"));
  if (tasks) {
    tasks.forEach((task) => {
      addTask(task.text);
      if (task.completed) {
        document
          .getElementById("taskList")
          .lastChild.classList.add("completed");
      }
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  loadTasks();
});
