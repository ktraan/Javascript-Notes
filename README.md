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

## **AJAX & JSON**
- AJAX stands for asynchronus Javascript + XML. Now we use JSON(Javascript Object Notation) as the way to represent information rather than XML.
- APIs are used between the client browser and the server.
 - ## **Synchronus & Asynchronus**
 - ### Client Browser - HTTP Server
   - **Synchronus** HTTP will send HTTP request and have a HTTP response
   - **Asynchronus** will send HTTP request and response, but also AJAX request and response. With the extra request, you can request more information while on the page.
 - ## HTTP Basics - Status Codes
   - GET, PUT, POST, DELETE
   - Get will retrieve information from the server
   - Post is sending information to the server
   Put will change a resource that exists
   - Status code in responses: 
     - 100 - Informational
     - 200 - Success
     - 300 - Redirection (ex. redirecting http request to https)
     - 400 - Client Error(ex. resource not found on website)
     - 500 - Server Error
  - Async HTTP:
  - Make request to url, return the response by using fetch.
  
## Objects
- Objects are created with key value names(properties in c#)

## JSON
 - JSON basically converts an object to a string.
 - Used to exchange data between client and server
 - Example of JSON string: ``var jsonString = '{"result":true, "count":42}``
   - **Converting JSON to Object**
   - Use JSON.parse(JSON string) to parse the JSON string to an object
   - **Converting Objects to JSON**
   - Use JSON.stringify(object) to convert object to JSON string


## Web Application Architecture
### Common Web Application Components
- Most or all web applications have the following parts.
  - A Server(which is a computer) ex. Windows Server
  - A Webserver (application which exposes web pages/rest apis publicly)
  - A DB to store information
### Pretty common web components
 - Load Balancer - Distributes load horizontally across many web servers ex. HA Proxy, Nginx
 - Caching Server/In Memory Datastore - Caching releives load on servers ex. Memcached, Redis
 - Search Service - Index items we want to search with a searching service to get a better UX. ex. Elasticsearch, Apache Solr
 - 3rd Party APIS(Rest APIs, Serving JSON normally) - Powers applications and gives functionallity that would take too much time to write on your own. ex. Stripe For Money, Twilio for SMS, Campaign Monitor for Email

### JQuery
- There are popular frameworks such as
  - React (facebook)
  - JQuery
  - Angular (google)
  - Vue.js 
- JQuery is a library that abstracts some of the negative things in Javascript
   - It supports CSS selectors, standardized arcoss browers
- You can import Jquery into projects in two ways: 
  - Using a CDN(someone else is hosting it)
    - code.jqery.com/
    - click minified version and link script before JS files
  - Downloading locally(you are hosting it)
    - jquery.com/download
    - Copy file into JS folder(minified version)
    - Link script before JS files
```javascript
// You can start using it by 
console.log($('selector'));

// You can also use css selectors
console.log($('p:eq(1)').text());

// - You can change values using .text and .html
$("p:eq(1)").text("Using the text function");
$("p:eq(1)").html("The first paragraph");
```
- Event listeners with JQuery is replaced with ```.on()```
- ```event.target``` can be replaced with ```this```
- ```return false``` can be replaced with ```event.preventDefault()```
```javascript
// html example
<div class="selector-example">
  <a href="www.nhl.com">Some sample</a>
</div>

$('a').on('click', function (evt) 
{ // Example of how this being the same as evt.target
  console.log(this);
  console.log(evt.target);
  return false;
});
{
  $('.selector-example').on('click', function (evt)
  {
    console.log(this); // Bubbles up to the div
    console.log(evt.target);
    return false;
  });
}
```

- **Classes: Toggling, Adding, and Removing**
   ```javascript
    // hasClass - checks if selected element has class
    // removeClass - removes class
    // addClass - adds class
    // toggleClass - removes and adds class depending on the state
    ```
- **Working with Attributes (and props)**
  - You can setAttribute with attr()
  - prop() can get the value of a checkbox or a disabled state
  - You can also set multiple attributes at once
  







