let targetImage = document.querySelector('.target-image');
let controlsDiv = document.querySelector('.controls');
let currentImage = 0;
let opacity = 1;
let intervalId;
let images = [
	'img/beach1.jpg',
	'img/beach2.jpg',
	'img/beach3.jpg'
];

controlsDiv.addEventListener('click', controlsHandler);
document.addEventListener('keydown', documentHandler);

// image fade out function. Incrementally decreases the opacity until
// it reaches 0
function fadeOut() {
	if (opacity > 0) {
		targetImage.style.opacity = opacity = opacity - 0.05;
		// use the browsers natural animation cycle for efficiency
		requestAnimationFrame(fadeOut);
	} else {
		// set the image source
		targetImage.src = images[currentImage];
		// image is now set, fade the new image into view
		fadeIn();
	}
}

// image fade in function. Incrementally increases the opacity until
// it reaches 1
function fadeIn() {
	if (opacity < 1) {
		targetImage.style.opacity = opacity = opacity + 0.05;
		// use the browsers natural animation cycle for efficiency
		requestAnimationFrame(fadeIn);
	}
}

function moveSlide(dir) {
	// try to advance the current image
	currentImage += dir;
	// check for before the first, or after the last...
	if (currentImage < 0) {
		currentImage = images.length - 1;
	} else if (currentImage === images.length) {
		currentImage = 0;
	}

	// fade the current image out
	fadeOut();
}

function documentHandler(evt) {
	switch (evt.keyCode) {
		case 39:
			// next image
			moveSlide(+1);
			break;
		case 37:
			// prev image
			moveSlide(-1);
			break;
	}
}

function controlsHandler(evt) {
	// Determine the next index for image to show
	switch (evt.target.className) {
		case 'btn-prev':
			moveSlide(-1);
			break;
		case 'btn-next':
			moveSlide(+1);
			break;		
	}
}

// preload known images
(function (imgArray) {
	imgArray.forEach(function (imgUrl) {
		let img = new Image();
		img.src = imgUrl;
	});
}(images));


// First Example - move slide after 3 seconds
let moveSlideAfterTime = setTimeout(function() 
{
	moveSlide(+1);

}, 3000);

clearTimeout(moveSlideAfterTime);

let moveSlideContinuous = setInterval(function() 
{
	moveSlide(+1);

},3000);

let ticks = 0;
let ticksContinuous = setInterval(function() {
	console.log(ticks + " seconds");
	ticks++;

}, 1000);