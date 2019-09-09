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

