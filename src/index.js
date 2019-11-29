document.addEventListener('DOMContentLoaded', () => {
  // your code here

  document.querySelector('#create-task-form').addEventListener('submit', function(e){
    e.preventDefault();    //stop form from submitting
    let taskDescription = document.getElementById('new-task-description').value;
    let tasks = document.getElementById('tasks');
    let newTask = document.createElement('li');
    newTask.innerText = taskDescription
    tasks.appendChild(newTask)
  });
});