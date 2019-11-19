// Enter JavaScript for the exercise here...
let trackerForm = document.querySelector(".frm-transactions")
let descriptionInput = document.querySelector("div.frm-group input[name='description']");
let typeSelect = document.querySelector("select");
let moneyInput = document.querySelector("div.frm-group input[type='number']");
let error = document.querySelector("div.error");


let tableBody = document.querySelector("tbody");

trackerForm.addEventListener("submit", event =>
{
	event.preventDefault();
	let emptyType = "";
	let errorMessage1 = "Please select a type (credit/debit). Amount must be positive.";
	let errorTypeNode = document.createTextNode(errorMessage1);
	if (typeSelect.value == emptyType || moneyInput.value < 0)
	{
		error.appendChild(errorTypeNode);
	}
	else if (error.childNodes.length > 0)
	{
		error.removeChild(error.firstChild);
	}
	else
	{

	let transactionDescription = descriptionInput.value;
	let transactionType = typeSelect.value;
	let transactionAmount = moneyInput.value;

	let newItem = document.createElement("tr");
	let descriptionElement = document.createElement("td");
	let typeElement = document.createElement("td");
	let amountElement = document.createElement("td");
	let amountNumber = Number(transactionAmount);
	
	let descriptionNode = document.createTextNode(transactionDescription);
	let typeNode = document.createTextNode(transactionType);
	let amountNode = document.createTextNode("$" + amountNumber.toFixed(2));
	amountElement.setAttribute("class", "amount");
	newItem.setAttribute("class", typeSelect.value);

	let toolsElement = document.createElement("td");
	let imageElement = document.createElement("i");
	toolsElement.setAttribute("class", "tools");
	imageElement.setAttribute("class", "delete fa fa-trash-o");
	
	descriptionElement.appendChild(descriptionNode);
	typeElement.appendChild(typeNode);
	amountElement.appendChild(amountNode);
	toolsElement.appendChild(imageElement);

	newItem.appendChild(descriptionElement);
	newItem.appendChild(typeElement);
	newItem.appendChild(amountElement);
	newItem.appendChild(toolsElement);
	tableBody.appendChild(newItem);

	let tdAmount = document.querySelectorAll(".amount");
	let trDebit = document.querySelectorAll(".debit");
	let trCredit = document.querySelectorAll(".credit");

	}

	

});

