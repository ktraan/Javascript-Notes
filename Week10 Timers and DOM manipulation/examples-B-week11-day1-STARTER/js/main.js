/*
1. Abstract out what we did last class.

2. We're going to be adding attributes

3. then we're going to be moving a selected div to the top.

*/


let items = document.querySelector('.items');
let addButton = document.querySelector('.add-item');
let count = 0;

addButton.addEventListener('click', function(event) {
 	let textInNode = `div added, this is the ${count} div`;
 	// item container div
 	let newItem = document.createElement("div");
 	

 	// input
 	let checkInput = document.createElement("input");
 	// set the attributes to become a checkbox
 	checkInput.setAttribute("type", "checkbox");
 	let uniqueId = "unique-item-" + count;
 	checkInput.setAttribute("id", uniqueId);


 	// label
 	let labelForCheckBox = document.createElement("label");
 	// change the attributes for the label
 	labelForCheckBox.setAttribute("for", uniqueId);
 	labelForCheckBox.setAttribute("contenteditable", "");
 	// textnode
 	let labelText = document.createTextNode(textInNode);



 	// append them together
 	labelForCheckBox.appendChild(labelText);
 	newItem.appendChild(checkInput);
 	newItem.appendChild(labelForCheckBox);
 	items.appendChild(newItem);


 	console.log(newItem);


 	count++;
});


//Let's a selected item to the top
let switchItemsButton = document.querySelector('.move-item-to-top');
let removeItemsButton = document.querySelector(".remove");
let errors = document.querySelector('.errors');


switchItemsButton.addEventListener('click', function(event) {
	let indexToSendToTop;
	for (let i = 0; i < items.children.length; i++)
	{
		let item = items.children[i];
		input = item.children[0] // or item.firstElementChild
		if (input.checked)
		{
			indexToSendToTop = i;
		}
		input.setAttribute("checked", false);
		
	}

	// send checked item to top
	items.insertBefore(items.children[indexToSendToTop], items.children[0]);

});

removeItemsButton.addEventListener("click", (event) =>
{
	for (let i = 0; i < items.children.length; i++)
	{
		let item = items.children[i];
		input = item.children[0];
		if (input.checked)
		{
			items.removeChild(item);
		}
	}
});





