let taskArray = [];
let taskUL = ""; //then set these in the loaded evl
let sorting = 0;
let sortDescription = "";

document.addEventListener("DOMContentLoaded", (e) => {
  let form = document.getElementById('create-task-form');
  let newTask = document.getElementById('new-task-description');
  let priority = document.getElementsByTagName('select')[0];
  let dueDate = document.getElementById('due-date');
  sortDescription = document.getElementById('sortDescription');
  taskUL = document.getElementById('tasks');

  form.addEventListener('submit', (e) => {
  	e.preventDefault();
  	if(newTask.value != "") addTask(newTask.value, priority.value, dueDate.value);
  	newTask.value = "";
  	dueDate.value = "";
  	priority.getElementsByTagName("option")[0].selected = "selected"
  	newTask.focus();
  });

});

document.addEventListener("click", (e) => {
	console.log(e.target.tagName)
	if(e.target.tagName == "LI") {
		let oldTask = e.target.innerHTML.split('-');
		let oldTaskText = oldTask[0];
		let oldDueDate = oldTask[1] || "";
		let newTask = window.prompt("Edit this task:", `${oldTaskText} - ${oldDueDate}` ).split('-');
		let newTaskText = newTask[0];
		let newDueDate = newTask[1] || "No due date";
		e.target.innerHTML = `${newTaskText} - ${newDueDate} - ${oldTask[2]}`;
	}
})

addTask = (task, priority, dueDate) => {
	newLI = document.createElement("li");
	newLI.innerHTML = `${task} - Due on: ${dueDate} - <button onclick="removeTask(event)">X</button><span hidden>${priority}</span>`;
	newLI.style.color = priority.split('-')[0];
	taskUL.appendChild(newLI);
}

removeTask = (e) => {
	node = e.target.parentNode;
	node.remove();
}

sort = (e) => {
	switch(sorting){
		case 0:
			sortAsc();
			sorting++;
			sortDescription.textContent = "High";
			break;
		case 1:
			sortDesc();
			sorting--;
			sortDescription.textContent = "Low";
			break;
	}
}

sortAsc = () => {
	let sortedArray = Array.from(taskUL.getElementsByTagName('li'));
	sortedArray.sort((a,b) => sortVals(a) - sortVals(b))
	// console.log(sortedArray)
	renderTasks(sortedArray);
}

sortDesc = () => {
	let sortedArray = Array.from(taskUL.getElementsByTagName('li'));
	sortedArray.sort((a,b) => sortVals(b) - sortVals(a))
	renderTasks(sortedArray);
}

renderTasks = (tasks) => {
	taskUL.innerHTML = "";
	tasks.forEach((task) => {
		taskUL.appendChild(task)
	})
}

reIndexArray = () => {
	taskArray.map((el, i) => {
		return el.splice(el.length - 1, 1, i)
		console.log(el)
	});
}

sortVals = (val) => {
	// console.log(val.getElementsByTagName('span')[0])
	return val.getElementsByTagName('span')[0].textContent.split('-')[1];
}