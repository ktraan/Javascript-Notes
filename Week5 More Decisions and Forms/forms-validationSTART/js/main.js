



// 	-- 

// - Feedback



// - Select the form (form elements)
// - Select the checkbox
let form = document.querySelector("form.frm-login");


// - addEventListener the form for subumit
form.addEventListener("submit", (event) =>
{
	let username = event.target.elements["username"];
	let password = event.target.elements.password;
	let errorElement = document.querySelector("div.error");
	let errorMessage = "";

	// - Test for username and password to check if its: 
		// 	-- not empty
		// 	-- password longer than 6 chars
	// - Display error messages
	// - Add/remove colors
	// - Remove password after you check its
	if (username.value.length === 0)
	{
		errorMessage = "<p>username is empty<p>";
		username.classList.add('error');
		event.preventDefault();
	}
	else
	{
		username.classList.remove('error');	

	}
	if (password.value.length < 6)
	{
		errorMessage = errorMessage + "<p>password must be longer than 6 chars</p>";
		password.classList.add('error');
		password.value = "";
		event.preventDefault();
	}
	else
	{
		password.classList.remove('error');
		password.value = "";
	}

	errorElement.innerHTML = errorMessage;
	// - Stop form from submitting if there are errors
	
});