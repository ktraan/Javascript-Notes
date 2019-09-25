// When a gallery thumbnail size button is clicked, the corresponding size class
// should be added to the div.thumbnails element.  This will apply the corresponding
// CSS rule to  modify the display the of hte thumbnail images.  In addition to this,
// the clicked button should be made active (i.e. add the active class).

// Select images 
// Change thumbnail size

// Select buttons
let liSmall = document.querySelector(".thumbnails-sm");
let liMedium = document.querySelector(".thumbnails-md");
let liLarge = document.querySelector(".thumbnails-lg");


// Listen to clicks on the button
function imageResizeHandler(event) 
{
	let buttonClicked = event.target;
	let imageThumbnails = document.querySelector("div.thumbnails");



	// Dectect what button was clicked
	console.log(buttonClicked);

	// Check to see if button is active
	// Highlight active button 
	// 1. Which button? 
	// 2. Which is active button? 
	// 3. Whitch button to activate (Remove active from all, add to specific clicked))
	



	if (!buttonClicked.classList.contains("active"))
	{
		let currentActiveButton = document.querySelector("li.active");
		currentActiveButton.classList.remove("active");
		buttonClicked.classList.add("active");


		if (buttonClicked.classList.contains("thumbnails-sm"))
		{
			imageThumbnails.classList.remove("lg");
			imageThumbnails.classList.remove("md");
			imageThumbnails.classList.add("sm")
			console.log("small button clicked");


		}	
		else if (buttonClicked.classList.contains("thumbnails-md"))
		{
			imageThumbnails.classList.remove("lg");
			imageThumbnails.classList.remove("sm");
			imageThumbnails.classList.add("md");
			console.log("medium button clicked");
		}
		else
		{
			imageThumbnails.classList.remove("sm");
			imageThumbnails.classList.remove("md");
			imageThumbnails.classList.add("lg");
			console.log("large button clicked");
		}
	}


}
liSmall.addEventListener("click", imageResizeHandler);
liMedium.addEventListener("click", imageResizeHandler);
liLarge.addEventListener("click", imageResizeHandler);

