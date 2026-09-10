const backBtn = document.querySelector("#backBtn");
const addTask = document.querySelector(".add-task");
const taskInput = document.querySelector("#tasks-input");
const taskList = document.querySelector(".tasks-list");

backBtn.addEventListener("click", function () {
  window.location.href = "signup.html";
});

addTask.addEventListener("click", function () {
  taskInput.style.display = "block";

  taskInput.focus();

  if (taskList.children.length >= 4) {
    alert("You can only add 4 tasks 🙂");
    return;
  }

  if (taskTitle === null || taskTitle.trim() === "") {
    return;
  }

  const newTask = document.createElement("li");

  // Create task
  const label = document.createElement("span");
  label.textContent = taskTitle;

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
  });
});
