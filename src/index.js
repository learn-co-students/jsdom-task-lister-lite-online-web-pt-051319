document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.getElementById('create-task-form');
  let newTask = document.getElementById('new-task-description');
  let tasksList = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
  	e.preventDefault();
  	let newListItem = document.createElement('li');
  	newListItem.textContent = newTask.value;
  	newTask.value = "";
  	tasksList.appendChild(newListItem)
  });
});



// <form id="create-task-form" action="#" method="post">
//       <label for="new-task-description">Task description:</label>
//       <input type="text" id="new-task-description" name="new-task-description" placeholder="description">
//       <input type="submit" value="Create New Task">
//     </form>

//     <div id="list">
//       <h2>My Todos</h2>
//       <ul id="tasks">
