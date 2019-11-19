// this is an example using the newer fetch api
// to enable this comment out <script src="js/main-old.js"></script>
// and uncomment <script src="js/main-new.js"></script>

console.log("loaded the fetch api way of making asynchronous requests");

var button = document.querySelector('.button');
var output = document.querySelector('.output');
var puppyImage = document.querySelector('.random-puppy-image');

var randomDogUrl = "https://dog.ceo/api/breeds/image/random";

button.addEventListener("click", function(event){
	//prevent the event from happening
	event.preventDefault();
	
	//get the random dog.
	fetch(randomDogUrl, {method: "GET"}).then(response => {
	  console.log(response.status);
	  // output: 200 OK!
	  // parse the response by extracting the json body
	  return response.json();
	}).then(json_data => {
		// we have a json object we're going to put
		// it back into a string.
		output.innerHTML = JSON.stringify(json_data);
		// although if you want to see the json data
		console.log(json_data.message);
		changeDogImage(json_data.message);
	});
});

function changeDogImage(image_string) {
	puppyImage.classList.remove("hidden");
	puppyImage.src = image_string;
}

// documentation is here for the api.
// https://dog.ceo/dog-api/