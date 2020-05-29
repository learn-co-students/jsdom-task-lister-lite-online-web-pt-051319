document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    let input = document.querySelector("#new-task-description");
    if (input.value !== "") {
      appendList(input.value);
      input.value = "";
    }
  });

  function appendList(text) {
    const li = document.createElement("li");
    li.innerText = text;
    list.append(li);
  }
});
