document.addEventListener("DOMContentLoaded", () => {
  let form = document.getElementById("create-task-form");
  form.addEventListener("submit", addToList);
});

function addToList() {
  event.preventDefault();
  let addedTask = document.getElementById("new-task-description").value;

  let task = document.getElementById("list");
  let node = document.createElement("li");
  let textnode = document.createTextNode(addedTask);

  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "X";
  deleteButton.addEventListener("click", deleteTask);

  node.appendChild(textnode);
  task.appendChild(node);
  node.appendChild(deleteButton);
  event.target.reset();
}

deleteTask = (e) => {
  e.preventDefault();
  node = e.target.parentNode;
  node.remove();
};
