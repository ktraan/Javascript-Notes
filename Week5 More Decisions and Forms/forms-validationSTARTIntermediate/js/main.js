let form = document.querySelector("form.frm-login");


function isValidField(field)
{
	// validate-not-empty
	// validate-password
	if (field.classList.contains("validate-not-empty"))
	{
		if (field.value.trim().length === 0)
		{
			return false;
		}
	}
	if (field.classList.contains("validate-password"))
	{
		if(field.value.length < 6)
		{
			return false;
		}
	}
	return true;
}

form.addEventListener("submit", (event) =>
{
	event.preventDefault();
	let fullname = event.target.elements.full_name;
	let username = event.target.elements["username"];
	let password = form.elements.password;
	let errormessage = "";

	if (isValidField(fullname))
	{
		console.log("valid full name");
	}
	else
	{
		errormessage += "<p>not a valid full name </p>"
	}
	
	if(isValidField(username))
	{
		console.log("validation field");
	}
	else
	{
		console.log("not valid field");
		errormessage = "<p>Not a valid username</p>"
	}
	if(isValidField(password))
	{
		console.log("validation field");
	}
	else
	{
		console.log("not a validation field")
		errormessage = errormessage + "<p>Not a valid password</p>";
	}

	document.querySelector("div.error").innerHTML = errormessage;
});