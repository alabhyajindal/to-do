function addMore() {
  let newTask = document.getElementById("text-entry").value;
  if (newTask == "") {
  } else {
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
}

let ul = document.querySelector("ul");
ul.addEventListener("click", (e) => {
  let li = e.target.parentNode;
  ul.removeChild(li);
});
