// ASSIGNING GLOBAL VARIABLES
const add = document.querySelector(".add");
const newTask = document.querySelector(".text-entry");

const ul = document.querySelector(".todo-list");
const li = document.createElement("li");

li.appendChild(document.createTextNode("value"));

// EVENT LISTENER ON BUTTON CLICK
add.addEventListener("click", () => {
  console.log(newTask.value);
  ul.appendChild(li);
});

// get input from user
// display it back on the page
