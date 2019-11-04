# Javascript-Notes

edmontonstartupweek.com
studentstartuplife.com

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

### .classList
- Returns class name of an element
- ``element.classList``
- Also has ``.add`` and ``.remove`` properties

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

### Linking the main.js file
- <script src="js/main.js" type="text/javascript"></script>


## Decision Statements and Operators
- ``====`` means both sides are identical
- ``!==`` means both sides are not identical
- 

### Automatic Type Converision
- JS will go out of its way to accept any program you give it.
- When types are different JS will change the variables and return something meaningful(might not be correct)
- 
 

## HTTPS The basics
- Computer(browser)  -------Requests(get, post.. )---->    The Server(where your webserver and DB is)
- Computer(browser)   <-------Response-----------             The Server(where your webserver and DB is)

### Form Fields
- You can select something in the form by ``form.elements["<name of input>"]``
- Form fields can get a keyboard focus on the field. (ex login pages)
  - This is used all the time so you don't have to activily click the element to enter a username(login page)
  - The ``.activeElement`` property will show the active element

## Loops, Arrays, NodeLists
- ``continue`` will reiterate the loop again
### Array Methods
- push - adds an item at the end of the array
- pop - removes the last item of the array
- length - gives length of the list

### NodeList
- It is a list of DOM elements
- They are missing some methods like pop, push, slice
- You can convert a nodelist to an array with the method ``Array.from(nodeListVar)``
```js
let paragraphs = document.querySelectorAll('p');
paragraphs.foreach(element, index) => { console.log(element) }
element.innerText = "";
```

## Preloading Images and Timers

### Preloading Images
- It is a great way to give the user a better experience

### Timers
- ``setTimeout`` calls function after a specified amount of time ( one time )
- ``clearTimeout`` if you want to cancel one of the ``setTimeouts`` then you can use this to call it
- ``setInterval`` sets interval every X milliseconds (repeat) 
- ``clearInterval`` allows us to cancel the ``setIntervals``


## DOM APIs

## JS and changing HTML
### Create and Appending Nodes ex.
```javascript
let textInNode = "This is the " + count + " div";
count++;
// create the elements and text;
let newItem.createElement('div');
let textNode = document.createTextNode(textInNode);

// append the text node to the newItem
newItem.appendChild(textNode);
// apprend newItem to items
items.appendChild(newItem);
```

### Nodes
- JS allows us to add new nodes and we use this all the time for our pages
- To create nodes you can use the:
``document.createElement("<insert type>");``
- To create text:
``document.createTextNode("insert text");``

- After creating nodes and text, you need to append them to the DOM
- The two methods to do this are:
- ``newItem.appendChild(<insert node type>);``
- ``items.appendChild(newItem);``

- ``.nextElementSibling`` will give the next element
- ``.nextSibling`` will give the next node
    - ``.children`` will show the children of the element
- ``.insertBefore`` will insert the nodes before
- ``.children`` will show the children of the nodelist
- ``.childrenNodes`` will show all of the children of the nodelist. This will also include any text that is included in the HTML
- ``.parentNode`` will return the parents of the node.
- ``.insertBefore(item1, item2)`` will insert the first element before the last element
- ``.removeChild`` will remove the child


### Setting Attributes
- In JS, we want to change the behaviour of a DOM node we can change it's attributes(the attributes of the HTML tag)
- ``.setAttribute(attributeName, what to set the attribute to)``






