document.getElementById("addTaskBtn").addEventListener("click", () => {
  const input = document.getElementById("taskInput");
  const newTask = input.value.trim();
  if (newTask !== "") {
    addTask(newTask);
    input.value = "";
  }
});

function addTask(text) {
  const list = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.textContent = text;
  newTask.classList.add("task-item"); // For CSS styling

  // Adding a delete button to each task
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "delete-btn";
  newTask.appendChild(deleteBtn);

  list.appendChild(newTask);
}

// Event delegation for the list
document.getElementById("taskList").addEventListener("click", function (event) {
  if (event.target.className === "delete-btn") {
    // Handle delete button clicks
    event.target.parentNode.remove();
  } else if (event.target.classList.contains("task-item")) {
    // Toggle task completion
    event.target.classList.toggle("completed");
  }
});
