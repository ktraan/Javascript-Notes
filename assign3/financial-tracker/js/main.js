// Enter JavaScript for the exercise here...
let trackerForm = document.querySelector(".frm-transactions")
let typeSelect = document.querySelector("select");
let moneyInput = document.querySelector("div.frm-group input[type='number']");
let error = document.querySelector("div.error");

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
	else
	{
		error.removeChild(error.firstChild);
		
	}




});