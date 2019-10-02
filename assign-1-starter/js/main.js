//Enter your JavaScript for the solution here...


let memeSelect = document.querySelector("select#meme-image");
let topTextBox = document.querySelector("input#meme-top-text");
let bottomTextBox = document.querySelector("input#meme-bottom-text");
let memeForm = document.querySelector(".meme-form");

let errorMessage = document.querySelector("div.error");
let memePhoto = document.querySelector("img");
let memeTopText = document.querySelector(".top-text");
let memeBottomText = document.querySelector(".bottom-text")


memeForm.addEventListener("submit", (event) =>
{
	let error = "";	
	
	if (memeSelect.selectedIndex == 0)
	{
		error += "<p>Please select an image</p>";
		event.preventDefault();
	}
	if (topTextBox.value == "")
	{
		error += "<p>Please enter the top text</p>";
		event.preventDefault();
	}
	if (bottomTextBox.value == "")
	{
		error += "<p>Please enter the bottom text</p>";
		event.preventDefault();
	}
	else
	{
		if (memeSelect.options.selectedIndex == 1)
		{
			memePhoto.alt = "Fry Meme";
			memePhoto.src = "img/fry-meme.png"
			memeTopText.innerText = topTextBox.value;
			memeBottomText.innerText = bottomTextBox.value;
			event.preventDefault();
		}
		else if (memeSelect.options.selectedIndex == 2)
		{
			memePhoto.alt = "One Does Not Simply Meme";
			memePhoto.src = "img/one-does-not-simply-meme.png";
			memeTopText.innerText = topTextBox.value;
			memeBottomText.innerText = bottomTextBox.value;
			event.preventDefault();
		}
		else if (memeSelect.options.selectedIndex == 3)
		{
			memePhoto.alt = "Most Interesting Man Meme";
			memePhoto.src = "img/most-interesting-man-meme.png";
			memeTopText.innerText = topTextBox.value;
			memeBottomText.innerText = bottomTextBox.value;
			event.preventDefault();
		}
	}
	document.querySelector("div.error").innerHTML = error;
});

memeForm.addEventListener("reset", (event) =>
{
	memeTopText.innerText = "";
	memeBottomText.innerText = "";
	memePhoto.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
	memePhoto.alt = "Placeholder Image";
});

memeSelect.addEventListener("change", (event) =>
{
	if (memeSelect.options.selectedIndex == 0)
	{
		memePhoto.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
		memePhoto.alt = "Placeholder Image";
	}
	if (memeSelect.options.selectedIndex == 1)
	{
		memePhoto.alt = "Fry Meme";
		memePhoto.src = "img/fry-meme.png"
	}
	if (memeSelect.options.selectedIndex == 2)
	{
		memePhoto.alt = "One Does Not Simply Meme";
		memePhoto.src = "img/one-does-not-simply-meme.png";
	}
	if (memeSelect.options.selectedIndex == 3)
	{
		memePhoto.alt = "Most Interesting Man Meme";
		memePhoto.src = "img/most-interesting-man-meme.png";
	}

});