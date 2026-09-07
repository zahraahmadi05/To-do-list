const addTask = document.querySelector(".add-task");
const taskList = document.querySelector(".tasks-list");

addTask.addEventListener("click", function () {
  const taskTitle = prompt("Enter your task!");

  if (taskList.children.length >= 4) {
    alert("You can only add 4 tasks 🙂");
    return;
  }

  if (taskTitle === null || taskTitle.trim() === "") {
    return;
  }

  const newTask = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";

  const label = document.createElement("span");
  label.textContent = taskTitle;

  newTask.textContent = taskTitle;

  newTask.append(checkbox);
  newTask.append(label);
  newTask.append(taskTitle);
  taskList.append(newTask);
});
