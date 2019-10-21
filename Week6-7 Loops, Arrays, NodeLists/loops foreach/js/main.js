var output = document.querySelector('.output');
var list = '<ul>';
var count; // count the number of list items
// add list items
for (count = 0; count < 10; count = count + 1) {
	list = list + '<li>' + (count + 1) + '</li>';
}
list = list + '</ul>';

// display the list
output.innerHTML = list;

let listItems = document.querySelectorAll("li");

listItems.forEach((element, index) =>
{
	console.log(index % 3);
	// add the stirped class if the index is odd.
	if (index % 3 === 1)
	{
		element.classList.add("striped");
	}
	else if (index % 3 === 2)
	{
		element.classList.add("striped_odly");
	}
	// console.log(index);
	// console.log(element);
	// console.log("the inner text is " + element.innerText);
	// console.log();
});