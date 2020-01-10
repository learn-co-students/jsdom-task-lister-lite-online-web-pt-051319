document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById('create-task-form')
  form.addEventListener( 'submit', function(e){ 
    e.preventDefault()
    let v = event.target["0"].value
    const item = document.createElement('li')
    item.innerText = v
    document.getElementById('tasks').append(item)
    event.target.reset()
  } )
});