document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const taskForm = document.getElementById('create-task-form');
  taskForm.addEventListener('submit', function (event) {
    event.preventDefault()
    const newTask = document.getElementById('new-task-description').value;
    if (newTask) {
      const ul = document.getElementById('tasks');
      const li = document.createElement("li");
      const button = document.createElement("button");
      li.innerText = newTask;
      button.innerText = "X";
      button.id = newTask;
      li.appendChild(button);
      ul.appendChild(li);
      event.target.reset()
    }
  });
});
