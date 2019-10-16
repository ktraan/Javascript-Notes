let input = document.querySelector("input");
let thumbnailText = document.querySelectorAll("p");
let thumbnailTextArray = Array.from(thumbnailText);

input.addEventListener("input", event =>
{
	if (input.value.length >= 1)
	{
		for (let count; count < thumbnailTextArray.length; count++)
		{
			thumbnailTextArray[count].innerHTML.includes(input.innerText)

		}
	}

});

