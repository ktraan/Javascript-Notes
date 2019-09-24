// 1. select the target element
var featureImage = document.querySelector('img.feature');

// 2. create the event listener function
function handleFeatureClick() {
	var desc = document.querySelector('p.feature.description');

	// remove the hidden class IF it is present,
	// otherwise, add it back!

	// if(desc.classList.contains("hidden"))
	// {
	// 	desc.classList.remove("hidden");
	// }
	// else
	// {
	// 	desc.classList.add("hidden");
	// }

	// desc.classList.remove('hidden');
	// achieve the same result using using string functions
	console.log(desc.className);
	console.log("Check if hidden is in the string");
	console.log(desc.className.indexOf("hidden"));

	console.log("Check if chicken is in the string");
	console.log(desc.className.indexOf("chicken"));

	if (desc.className.indexOf("hidden") >= 0)
	{
		desc.classList.remove('hidden');
	}
	else
	{
		desc.classList.add('hidden');
	}
}

// 3. add event listener
featureImage.addEventListener('click', handleFeatureClick);