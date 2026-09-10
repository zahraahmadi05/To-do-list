const backBtn = document.querySelector("#backBtn");
const addTask = document.querySelector(".add-task");
const taskInput = document.querySelector("#tasks-input");
const taskList = document.querySelector(".tasks-list");

// Back button
backBtn.addEventListener("click", function () {
  window.location.href = "signup.html";
});

// Show input
addTask.addEventListener("click", function () {
  taskInput.style.display = "block";
  taskInput.focus();
});

// Delete task
function deleteTask(taskTitle) {
  // Get saved tasks
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

  const updatedTasks = savedTasks.filter(function (task) {
    return task !== taskTitle;
  });

  localStorage.setItem("tasks", JSON.stringify(updatedTasks));
}

// Show saved tasks
const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];

savedTasks.forEach(function (taskTitle) {
  const newTask = document.createElement("li");

  // Create task
  const label = document.createElement("span");
  label.textContent = taskTitle;

  // Checked box
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.classList.add("delete-btn");

  newTask.append(label);
  newTask.append(checkbox);
  newTask.append(deleteBtn);

  taskList.append(newTask);

  // Checked
  checkbox.addEventListener("change", function () {
    label.classList.toggle("compeleted", checkbox.checked);
  });

  // Remove task
  deleteBtn.addEventListener("click", function () {
    newTask.remove();
    deleteTask(taskTitle);
  });
});

// Add new task
taskInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const taskTitle = taskInput.value;

    if (taskList.children.length >= 4) {
      alert("You can only add 4 tasks 🙂");
      return;
    }

    if (taskTitle.trim() === "") {
      return;
    }

    const newTask = document.createElement("li");

    // Create task
    const label = document.createElement("span");
    label.textContent = taskTitle;

    // Checked box
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete-btn");

    newTask.append(label);
    newTask.append(checkbox);
    newTask.append(deleteBtn);

    taskList.append(newTask);

    // Checked
    checkbox.addEventListener("change", function () {
      label.classList.toggle("compeleted", checkbox.checked);
    });

    // Remove task
    deleteBtn.addEventListener("click", function () {
      newTask.remove();
      deleteTask(taskTitle);
    });

    // Convert tasks to array
    const tasks = [];

    taskList.querySelectorAll("li").forEach(function (task) {
      tasks.push(task.textContent);
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));

    // Clear & hide input
    taskInput.value = "";
    taskInput.style.display = "none";
  }
});
