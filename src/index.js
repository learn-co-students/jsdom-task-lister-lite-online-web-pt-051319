document.addEventListener("DOMContentLoaded", () => {

  const form = document.getElementById("create-task-form")

  form.addEventListener("submit", function(event) {
    event.preventDefault()
    debugger;
    const x = event.target["0"].value
    const box = document.getElementById("tasks")
    const element = document.createElement('li')
    box.appendChild(element)
    element.innerHTML = x
  })

});