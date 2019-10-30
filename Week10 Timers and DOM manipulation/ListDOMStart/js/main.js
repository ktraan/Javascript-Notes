/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

let todoList = document.querySelector(".todo-list");
let todoForm = document.querySelector(".todo-form");
let count = 0;

// create the event listener for the todo ist
todoForm.addEventListener("submit", (event) =>
{
	// get the input value of the text input of the form
	event.preventDefault();
	let todoText;
	todoText = event.target.elements["todo-item"].value;
	// create the leements that we're going to need
	let div = document.createElement("div");
	let checkbox = document.createElement("input");
	let label = document.createElement("label");
	let labelText = document.createTextNode(todoText);

	// set required attributes
	checkbox.setAttribute('type', 'checkbox');
	label.setAttribute("for", "todo-" + (count + 1));
	label.setAttribute("contenteditable", "");
	count++;
	// Start to connect and append them together
	label.appendChild(labelText);
	div.appendChild(checkbox);
	div.appendChild(label);

	// Append to the page's todoList
	todoList.appendChild(div);

	console.log(div);

});