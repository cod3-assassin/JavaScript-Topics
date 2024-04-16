// script.js
document.getElementById("addTaskBtn").addEventListener("click", function () {
  const input = document.getElementById("taskInput");
  const newTaskText = input.value.trim();
  if (newTaskText !== "") {
    const list = document.getElementById("taskList");
    const newTask = document.createElement("li");
    newTask.textContent = newTaskText;
    newTask.addEventListener("click", function () {
      this.classList.toggle("completed");
    });
    newTask.addEventListener("dblclick", function () {
      list.removeChild(this);
    });
    list.appendChild(newTask);
    input.value = ""; // Clear input after adding
  }
});

document.addEventListener("DOMContentLoaded", function () {
  // Potential additional initialization code can go here
});
