var featureLink = document.querySelector('a.feature');

function featureLinkHandler(evt) {
    var featureImage = document.querySelector('img.feature');
    featureImage.src = featureLink.href;
    featureImage.classList.remove('hidden');

    evt.preventDefault();
}

featureLink.addEventListener('click', featureLinkHandler);



function featureLinkHandler(evt)
{
	let featureImage = document.querySelector("img.feature");
	if (featureImage.classList.contains('hidden') || featureLink.innerText == "View Barcelona") {
	 featureImage.src = featureLink.href;
	 featureImage.classList.remove('hidden');
	 featureLink.innerText = "Hide Barcelona"
	}
	else
	{
		featureImage.src = '';
		featureImage.classList.add("hidden");
		featureLink.innerText = "View Barcelona";
	}


	evt.preventDefault();
}

