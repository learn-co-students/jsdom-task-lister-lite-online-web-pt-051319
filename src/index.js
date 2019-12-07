document.addEventListener("DOMContentLoaded", () => {
  let taskForm = document.getElementById('create-task-form');
  
  taskForm.addEventListener('submit', function(e) {
    e.preventDefault()
    let newTask = document.getElementById('new-task-description').value;
   
    if (newTask) {
      let ul = document.getElementById('tasks');
      let li = document.createElement("li");
      let editInput = document.createElement("input");
      let editButton = document.createElement("button");
      let deleteButton = document.createElement("button");
      
      li.innerText = newTask;
      editInput.type = "text";

      editButton.innerText = "Edit";
      editButton.className = "edit";
      deleteButton.innerText = "X";
      deleteButton.className = "delete";
      
      // li.appendChild(editInput);
      li.appendChild(editButton);
      li.appendChild(deleteButton);

      ul.appendChild(li);
      event.target.reset()

      let edit = document.querySelector("button.edit");

      li.onclick = function() {this.parentNode.removeChild(this);}
      // edit.onclick = editTask;
      // document.querySelector("button.edit").onclick = editTask;
    }
  })
});

let editTask = function() {
  let listItem = this.parentNode;
  
  let editInput = listItem.querySelector('input[type=text]');
  let label = listItem.querySelector("label");
  let containsClass = listItem.classList.contains("editMode");
      
      if(containsClass){
        label.innerText = editInput.value;
      } else {
        editInput.value = label.innerText;
      }

      listItem.classList.toggle("editMode");
}
