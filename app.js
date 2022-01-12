function addMore() {
  let newTask = document.getElementById("text-entry").value;

  let ul = document.getElementById("todo-list");
  let li = document.createElement("li");
  li.textContent = newTask;

  li.insertAdjacentHTML(
    "beforeend",
    '<ion-icon name="close-outline"></ion-icon>'
  );
  li.insertAdjacentHTML(
    "afterbegin",
    '<ion-icon name="checkmark-outline"></ion-icon>'
  );
  ul.appendChild(li);

  document.getElementById("text-entry").value = "";
}

let ul = document.querySelector("ul");

// Aim for zero erros - the below will not work

ul.addEventListener("click", () => {
  let x = document.querySelector("ion-icon");
  x.addEventListener("click", () => {
    x.parentNode.remove();
  });
});
