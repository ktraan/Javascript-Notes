let toggle = document.querySelector('[name=toggle]');

toggle.addEventListener('change', (evt) =>
{
	let checks = document.querySelectorAll('[name=message]');
	console.log(checks);

	let idx = 0;

	while (idx < checks.length)
	{
		if (evt.target.checked)
		{
			checks[idx].checked = true;
		}
		else
		{
			checks[idx].checked = false;
		}

		idx++;
	}
})