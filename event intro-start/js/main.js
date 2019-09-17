// Enter Code Below.
// event start
// let button = document.querySelector("button");
// function eventHandler(event) {
// 	console.log(event);
// }
// button.addEventListener("click", eventHandler);
// This is the same thing as the addEventListener below


// event with annonymous function, another way to do it
// let button = document.querySelector("button");
// button.addEventListener("click", (event) => 
// {
// 	console.log(event);
// });



// preventDefault example
// let button = document.querySelector("button");
// let link = document.querySelector("a");

// link.addEventListener("click", (event) => 
// {
// 	event.preventDefault();
// 	console.log("Hello there");
// });


// Propogation of Events example
let button = document.querySelector("button");
let link = document.querySelector("a");

let paragraph = document.querySelector("p");
let coolButton = document.querySelector(".cool-button");
paragraph.addEventListener("mousedown", (event) =>
{
	console.log("handler for paragraph");
});

coolButton.addEventListener("mousedown", (event) => 
{
	event.stopPropagation();
	console.log("Handler for Cool button");
});