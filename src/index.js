document.addEventListener("DOMContentLoaded", () => {
  // setting a variable to the form where I hope to grab the input of that form.
  const form = document.getElementById("create-task-form")
  // adding an event listener on the variable of the form then "preventing the default" 
  // behavior of the submit button.
  form.addEventListener("submit", function(event) {
    
    event.preventDefault()
    // setting a variable to the value of the input
    const listItem = event.target["0"].value
    // setting a variable to where I want the "input" to go
    const box = document.getElementById("tasks")
    // setting a variable to create an element ("li") in the "box"(ul) where my input is to go
    const element = document.createElement("li")
    // appendChild method to add the created li because JS is a mindfuck and thats just the way it is
    const button = document.createElement("button")
    const editButton = document.createElement("button")

    button.id = "delete"
    editButton.id = "edit"
    
    editButton.innerHTML = "Edit"
    button.innerHTML = "Delete"
    element.innerHTML = listItem

    box.appendChild(element)
    element.appendChild(button)
    element.appendChild(editButton)

    deleteTask();
    editTask();
  })
  
});

function deleteTask() {
  const allTasks = document.querySelectorAll("button#delete")
  allTasks.forEach(task => {
    task.addEventListener("click", function(e) {
      
      task.parentNode.remove()
    })
  })
}

function editTask() {
  const allTasks = document.querySelectorAll("button#edit")
  allTasks.forEach(task => {
    task.addEventListener("click", function(e) {
    const newTask = task.parentElement.firstChild
     
    const textBox = document.createElement("textarea")
    textBox.innerText = `${newTask}`
    
    task.parentNode.appendChild(textBox)
    textBox.addEventListener("keydown", function(e) {
      const keypressed = e.key
      if keypressed === "Enter"
      console.log("keypress")
     })
    })
  })
}
