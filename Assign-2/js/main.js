let input = document.querySelector("input");

let div = document.querySelectorAll(".thumb-display");
let divArray = Array.from(div);
let hiddenDiv = ".thumb-display.hidden"

input.addEventListener("input", event =>
{
	for (let count = 0; count < divArray.length; count++)
	{
		if (!divArray[count].innerText.includes(input.value))
		{
			divArray[count].className = hiddenDiv;
		}

	}

	
};

