// Selecting all of the elements that we're going to use.
var displayDiv = document.querySelector("div.feature-display");

var featureImage = document.querySelector("img.feature");
var treesLink = document.querySelector("#more-trees-info");

var counterLink = document.querySelector(".link-count-clicks");
var counterArea = document.querySelector(".click-counter");
var counterParagraph = document.querySelector(".counter-paragraph");

var imageConvertLink = document.querySelector("#image-converter");
var myCatsPicture = document.querySelector(".my-cats-image");

// enter code below for events

imageConvertLink.addEventListener("click", (event) =>
{
	event.preventDefault();
	featureImage.src = myCatsPicture.href;
});


var counter = 0;
var presetCounterText = "";

counterParagraph.addEventListener("click", (event) =>
{
	counter += 1;
});

counterLink.addEventListener("click", (event) =>
{
	event.preventDefault();
	// This will prevent the counter from counting twice
	event.stopPropagation();
	counter += 1;
	updateCounterText();
});

const updateCounterText = () =>
{
		let counterText = presetCounterText + counter;
	console.log(counterText);
	counterArea.innerText = counterText;
}

window.addEventListener("keyup", (event) =>
{
	presetCounterText = presetCounterText + event.key;
	console.log(presetCounterText);
	updateCounterText();
});
