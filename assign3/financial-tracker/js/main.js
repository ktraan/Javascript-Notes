// Enter JavaScript for the exercise here...
let trackerForm = document.querySelector(".frm-transactions")
let descriptionInput = document.querySelector("div.frm-group input[name='description']");
let typeSelect = document.querySelector("select");
let moneyInput = document.querySelector("div.frm-group input[type='number']");
let error = document.querySelector("div.error");

let tableBody = document.querySelector("tbody");
let debitSum = 0;
let creditSum = 0;

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

	let type = event.target.elements['type'].value;
	if (type == 'debit')
	{
		debitSum += Number(moneyInput.value);
		let totalDebits = document.querySelector("span[class='total debits']");
		totalDebits.innerText = "$" + debitSum.toFixed(2);
	}

	if (type == 'credit')
	{
		creditSum += Number(moneyInput.value);
		let totalCredits = document.querySelector("span[class='total credits']");
		totalCredits.innerText = "$" + creditSum.toFixed(2);
	}

	}

});

tableBody.addEventListener("click", event =>
{

	let trash = event.target;
	let tools = trash.parentNode;
	let transaction = tools.parentNode;

	if (event.target.classList.contains("delete") 
		&& transaction.className == "debit"
		&& confirm("Are you sure you want to delete this transaction?"))
	{
		tableBody.removeChild(transaction);
		let amountToRemove = transaction.children[2].innerText.replace("$", "");
		debitSum = debitSum - amountToRemove;
		let totalDebits = document.querySelector("span[class='total debits']");
		totalDebits.innerText = "$" + debitSum.toFixed(2);
	}
	if (event.target.classList.contains("delete") 
		&& transaction.className == "credit"
		&& confirm("Are you sure you want to delete this transaction?"))
	{
		tableBody.removeChild(transaction);
		let amountToRemove = transaction.children[2].innerText.replace("$", "");
		creditSum = creditSum - amountToRemove;
		let totalCredits = document.querySelector("span[class='total credits']");
		totalCredits.innerText = "$" + creditSum.toFixed(2);
	}

});


let timer;

function refreshTimer(){
	clearTimeout(timer);
	timer = setTimeout(function(){
		alert("You have been inactive, page will refresh");
		location.reload(true);

	}, 120000);
	
}

window.onload = refreshTimer;
window.onmousemove = refreshTimer;
window.onclick = refreshTimer;
window.onkeydown = refreshTimer;
window.onwheel = refreshTimer;



