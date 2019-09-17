# Javascript-Notes

## Variables
- Variables in JS are defined using the word var
- var can be used for strings, numbers, elements

## Querying the DOM
1. ex element: ``<p id="someId" class="someClass">Random Text</p>``

### Get element by ID
- Get elements by their class: 
-- ``var someElements = document.getElementsByClassName("someClass");``
- Return value single element: 
-- ``console.log(someElement.innterHTML);``
### Get elements by class
- How to get elements by class
-- ``var someElements = document.getElementsByClassName("someClass");``
- Return value list of all elements within that class: 
-- ``console.log(someElements[0].innterHTML);``
### Get elements by tag
- How to get multiple elements by tags:
-- ``var someElements = document.getElementsByTagName("p");``
- Return value list of all elements within the tag: 
-- ``console.log(someElements[0].innterHTML);``

### querySelector
- How to get the first element using the querySelector:
-- ``var someElement = document.querySelector(".someClass);``
- Return first value matched:
-- ``console.log(someElement.innerHTML);``

### querySelectorAll
- How to get multiple elements: 
-- ``var someElement = document.querySelectorAll(".someClass");``
- Return value:
-- ``console.log(someElements[0].innerHTML);``

## Events
- An event anything that the user does on the webpage
-- ex Clicking, mouse movements, keystroke, loaded a page, leaving a page

### Event Listener
- Event listeners listen for a specific event to happen.
- Events listeners don't do anything, they just listen.
- They are given two arguments, the event type and the Eventhandler callback function.
- The ``.addEventListener("event", function);`` will take the first parameter as the event, and second as the function that is created.
- https://developer.mozilla.org/en-US/docs/Web/Events for all the different events
### Event Handler
- An event handler is a function that reacts to the event

### Event Objects
- The event object holds additional data about the event

### Default Actions
- Many events have a default action associated with them.
- ex. Clicking a link will go to the link, right clicking will give you the menu
- You can prevent default actions using the ``preventDefault`` method on the event object.

### Propagation of Events
- The order of events that happen will go from the bottom up.
- You can use ``.stopPropgation`` for the ``.addEventListener`` on the desired event.















