document.addEventListener("DOMContentLoaded", function() {
  console.log("The DOM has loaded");
});

let tasks = [];
document.addEventListener("submit", function(e) {
  e.preventDefault();
  let task = tasks.push(document.getElementById("new-task-description").value);
  displayTasks(tasks);
});

document.addEventListener("click", function(e) {
  if (e.target.type == "button") {
    let task = e.target.getAttribute("data-task");
    tasks = tasks.filter(function(t) {
      return t != task;
    });
    displayTasks(tasks);
  }
});

function displayTasks(tasks) {
  let ul = document.getElementById("tasks");
  ul.innerHTML = "";
  tasks.forEach(addLi);

  function addLi(task) {
    let li = document.createElement("li");
    li.innerHTML = `${task} <button type="button" data-task="${task}">X</button>`;
    ul.appendChild(li);
  }
}
