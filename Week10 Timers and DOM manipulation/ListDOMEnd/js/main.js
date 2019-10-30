/*
  Add the required JavaScript to handle form submit and add a new todo item to 
  the page (in the div.todo-list element).  You will need to use a counter to 
  uniquely identify each todo item and use only DOM API functions to interact
  with the document (i.e. create each todo item), DO NOT use innerHTML for this
  exercise.
*/

let todoList = document.querySelector('.todo-list');
let todoCount = 0;

document.querySelector('.todo-form').addEventListener('submit', function (evt) {
  // variables for creating the DOM fragment
  let div,
      todoText,
      label,
      checkbox,
      labelText;

  todoText = evt.target.elements['todo-item'].value;

  // check for empty input value
  if (todoText == '') {
    todoText = 'Todo ' + (todoCount + 1);
  }

  // create the required nodes
  div = document.createElement('div');
  checkbox = document.createElement('input');
  label = document.createElement('label');
  labelText = document.createTextNode(todoText);

  // set the required attributes
  checkbox.setAttribute('type', 'checkbox');
  // the following is commented to prevent focus from being
  // set on the checkbox input
  //checkbox.setAttribute('id', 'todo-' + (todoCount + 1));
  label.setAttribute('for', 'todo-' + (todoCount + 1));
  label.setAttribute('contenteditable', '');

  // build the DOM fragment
  label.appendChild(labelText);
  div.appendChild(checkbox);
  div.appendChild(label);

  // add the div to the document
  todoList.appendChild(div);

  // added a todo, so increase the count
  todoCount += 1;

  // clear the input textbox
  evt.target.reset();

  // don't actually submit
  evt.preventDefault();
});