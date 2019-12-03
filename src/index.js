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
    const element = document.createElement('li')
    // appendChild method to add the created li because JS is a mindfuck and thats just the way it is
    box.appendChild(element)
    // place the inputted value into the created li.
    element.innerHTML = listItem
  })

});