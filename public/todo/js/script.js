const tasksContainer = document.getElementById("tasks");
const mainInput = document.getElementById("new-task-input");
const addTask = document.querySelector(".submit-task");
const updateTask = document.querySelector(".update-task");

updateTask.style.display = "none";

let username = localStorage.getItem("signinUsername");

addTask.addEventListener("click", (e) => {
  e.preventDefault();
  const task = mainInput.value;

  fetch(`/tasks/${task}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({username})
  })
  window.location.reload();
});

fetch(`/tasks/${username}`)
  .then((res) => res.json())
  .then((tasks) => createTaskDom(tasks))
  .catch((err) => console.log("err" + err));

let taskIdUpdating;
const createTaskDom = (tasks) => {
  tasks.forEach((task) => {
    const taskSec = document.createElement("div");
    taskSec.setAttribute("class", "task");
    taskSec.setAttribute("id", task.id);
    const taskContent = document.createElement("div");
    taskContent.setAttribute("class", "content");
    const input = document.createElement("input");
    input.setAttribute("class", "text");
    input.setAttribute("type", "text");
    input.setAttribute("readonly", "readonly");
    input.setAttribute("value", task.task);
    const taskBtns = document.createElement("div");
    taskBtns.setAttribute("class", "actions");
    const editBtn = document.createElement("button");
    editBtn.setAttribute("class", "edit");
    editBtn.textContent = "edit";
    // ------------------------------------- UPdate
    editBtn.addEventListener("click", (e) => {
      addTask.style.display = "none";
      updateTask.style.display = "block";

      const task = e.target.closest(".task").firstChild.firstChild.value;
      taskIdUpdating = e.target.closest(".task").id;
      mainInput.value = task;
    });
    const deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "delete");
    deleteBtn.textContent = "delete";
    // --------------------------------------------------- delete
    deleteBtn.addEventListener("click", deleteTask);

    taskBtns.append(editBtn, deleteBtn);
    taskContent.append(input);
    taskSec.append(taskContent, taskBtns);
    tasksContainer.append(taskSec);
  });
};

const deleteTask = (e) => {
  const taskId = e.target.closest(".task").id;

  fetch(`/tasks/${taskId}`, { method: "DELETE" });
  window.location.reload();
};

updateTask.addEventListener("click", (e) => {
  e.preventDefault();

  const task = mainInput.value;

  fetch(`/tasks/${task}/${taskIdUpdating}`, { method: "PUT" });
  window.location.reload();

  addTask.style.display = "block";
  updateTask.style.display = "none";
  mainInput.value = "";
});
