document.addEventListener("DOMContentLoaded", () => {
  // your code here
      let x = document.getElementById("create-task-form");
      let description = document.getElementById("new-task-description");
      let z = document.getElementById("tasks");



      // console.log(x)
      x.addEventListener("submit", createTask);
      // z.addEventListener("click", deleteTask);
});

let createTask = event => {
  event.preventDefault();

  let description = document.getElementById("new-task-description")
  let newTask = document.createElement("li")

  newTask.innerHTML = description.value;

  appendNewTask(newTask);
  event.target.reset();
};


 const appendNewTask = task => {
  document.getElementById("tasks").appendChild(task);
};

// let deleteTask = e => {
//   e.preventDefault();

//   let z = document.getElementById("tasks");
//   z.parentNode.removeChild(task);

  
// };
