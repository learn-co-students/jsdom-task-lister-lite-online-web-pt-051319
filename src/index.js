document.addEventListener("DOMContentLoaded", () => {
  // your code here

  // let task = document.getElementById('tasks')

  let taskForm = document.getElementById('create-task-form');
  taskForm.addEventListener('submit', function(event) {
    event.preventDefault()
    let task = document.getElementById('new-task-description').innerText;
    if task {
      let ul = document.getElementById('tasks');
      let li = document.createElement('li');
      let button = document.createElement('button');
      li.innerText = task;
      button.innerText = 'x';
      button.id = task;
      li.appendChild(button);
      ul.appendChild(li);
      event.target.reset()
    }
  })
});


// upon submit - add submitted text to #tasks list
// #new-task-description