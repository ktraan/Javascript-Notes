// Open the console to view some output.

// Let's explore some jquery!

// lets select something
console.log($("p"));

// select just the second paragraph
console.log($("p:eq(1)").text());

// Take a look at event listeners
$('.link-selector-example').on('click', function (event)
{
	console.log("The value of 'this' is: ")
	console.log(this);
	console.log("The value of event.target is: ")
	console.log(event.target);
	return false;

});

// lets take a look at removing event listeners
$(".link-selector-example").off("click");

let firstDogUrl = "https://images.dog.ceo/breeds/schnauzer-miniature/n02097047_2910.jpg"

console.log($(".dog-image").attr("alt"));
$(".dog-image").attr({
	alt: "newest description of a dog",
	src: firstDogUrl
});

console.log($(".dog-image").attr("alt"));
console.log($(".dog-image").attr("src"));

function changeDoggo()
{
	$.ajax({
		url: "https://dog.ceo/api/breeds/image/random",
		success: function(responseObj)
		{
			$(".dog-image").attr('src', responseObj.message);
			console.log("Api 'tecth' successful");
			console.log(responseObj);
		}
	})
}

$(".dog-change").on('click', (event) =>
{
	changeDoggo();
	return false;
});

$('.listing-items').append(`
	<li> this isfirst item</li>
	`).append(`
	<li> second item</li>`)