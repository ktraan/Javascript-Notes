let images = ['mountain1.jpg', 'mountain2.jpg', 'mountain3.jpg'];
let currentImg = 0;

let firstImage = document.querySelector('.carousel>img').src = 'images/' + images[0];

let button = document.querySelector('.carousel');

button.addEventListener('click', (evt) =>
{
	let target = evt.target;

	if (target.classList.contains('control'))
	{
		if (target.classList.contains('next'))
		{
			currentImg += 1;
		}
		else if (target.classList.contains('prev'))
		{
			currentImg -= 1;
		}
		if (currentImg > 2)
		{
			currentImg = 0;
		}
		else if (currentImg < 0)
		{
			currentImg = 2;
		}

		let newImage = document.querySelector('.carousel>img').src = 'images/' + images[currentImg]
	}
})

