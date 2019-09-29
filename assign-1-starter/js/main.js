// Enter your JavaScript for the solution here...


let memeSelect = document.querySelector("select#meme-image");
let memeOption = document.querySelector("option");
let topTextBox = document.querySelector("input#meme-top-text");
let bottomTextBox = document.querySelector("input#meme-bottom-text");
let memeForm = document.querySelector(".meme-form");

let errorMessage = document.querySelector("div.error");
let memePhoto = document.querySelector("img");
let memeTopText = document.querySelector(".top-text");
let memeBottomText = document.querySelector(".bottom-text")

memeForm.addEventListener("submit", (event) =>
{
	
	if (memeSelect.selectedIndex == 0)
	{
		errorMessage.innerHTML = "Error, please select an image";
		event.preventDefault();
	}
	else if (topTextBox.value == "")
	{
		errorMessage.innerHTML = "Error, please fill in the top text";
		event.preventDefault();
	}
	else if (bottomTextBox.value == "")
	{
		errorMessage.innerHTML = "Error, please fill in the bottom text";
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
});

memeForm.addEventListener("reset", (event) =>
{
	memeTopText.innerText = "";
	memeBottomText.innerText = "";
	memePhoto.src = "https://via.placeholder.com/550x300?text=Choose+an+image+from+the+dropdown";
	memePhoto.alt = "Placeholder Image";
});
