let input = document.querySelector("input");
let thumbnailText = document.querySelectorAll("p");
let thumbnailTextArray = Array.from(thumbnailText);
let imageList = document.querySelectorAll("img");
let imageArray = Array.from(imageList);

	



input.addEventListener("input", event =>
{

	if (input.value.length > 0)
	{
		for (let count; count < thumbnailTextArray.length; count++)
		{
			thumbnailTextSearch = thumbnailTextArray[count].innerHTML;
			
			if (thumbnailTextArray[count].innerHTML.includes(input.value))
			{
				
			}

		}

	}


});
