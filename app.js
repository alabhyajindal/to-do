function addMore() {
  let newTask = document.getElementById("text-entry").value;

  let ul = document.getElementById("todo-list");
  let li = document.createElement("li");
  li.textContent = newTask;

  li.insertAdjacentHTML(
    "beforeend",
    '<ion-icon name="close-outline"></ion-icon>'
  );
  ul.appendChild(li);

  document.getElementById("text-entry").value = "";
}
