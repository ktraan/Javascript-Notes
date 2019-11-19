// this is an example using the newer fetch api
// to enable this comment out <script src="js/main-new.js"></script>
// and uncomment <script src="js/main-old.js"></script>

console.log("loaded the XMLHttpRequest way of making asynchronous requests");

var xhr = new XMLHttpRequest();
var button = document.querySelector('.button');
var output = document.querySelector('.output');
var puppyImage = document.querySelector('.random-puppy-image');

button.addEventListener('click', function (evt) {
	// use the href for the request URL
	console.log("something");
	var randomDogUrl = "https://dog.ceo/api/breeds/image/random"
	xhr.open('GET', randomDogUrl, true);
	xhr.send(null);


	// prevent the page from going to data.html
	evt.preventDefault();
});

xhr.addEventListener('load', function (evt) {
	console.log("load");
	// read the 
	if (xhr.status === 200) { // success
		output.innerHTML = xhr.responseText;
		// load the stuff into json;
		output_json = JSON.parse(xhr.responseText)
		// this is now a json object.
		console.log(output_json.message);
		changeDogImage(output_json.message)

	} else { // failure
		console.log('... request failed.');
		output.innerHTML = '<div>Request Failed.</div>';
	}
});

function changeDogImage(image_string) {
	puppyImage.classList.remove("hidden");
	puppyImage.src = image_string;
}

// documentation is here for the api.
// https://dog.ceo/dog-api/