let input = document.querySelector("input");
let divArray = document.querySelectorAll(".thumb-display");
let imageArray = Array.from(divArray);

input.addEventListener("input", (evt) =>
{
	for (let count = 0; count < imageArray.length; count++)
	{
		let imageText = imageArray[count].innerText;
		if (imageText.indexOf(input.value) < 0)
		{
			imageArray[count].className = "thumb-display hidden";
		}
		else
		{
			imageArray[count].className = "thumb-display";
		}

		if (input.value == "")
		{
			reset.className = "reset hidden";
		}
		else
		{
			reset.className = "reset";
		}
	}
});


let reset = document.querySelector(".reset");

reset.addEventListener("click", (evt) =>
{
	evt.preventDefault();
	input.value = "";
	reset.className = "reset hidden";
	for (let count = 0; count < imageArray.length; count++)
	{
		imageArray[count].className = "thumb-display";
	}

});