// Your code here...

let friends = document.querySelector("li[class='pure-menu-item friends']");
let divContent = document.querySelector(".content");
let home = document.querySelector('li[class="pure-menu-item home"]');

friends.addEventListener("click",  (event) =>
{
	loadFriends();
});

divContent.addEventListener("click", (event) =>
{

	let friendOne = document.querySelector('a[data-id="1"]');
	let friendTwo = document.querySelector('a[data-id="2"]');
	let friendThree = document.querySelector('a[data-id="3"]');
	let friendFour = document.querySelector('a[data-id="4"]');
	let divToRemove = document.querySelector("div[class='pure-menu custom-restricted-width']");

	if (friendOne == event.target)
	{
		divContent.removeChild(divToRemove);
		renderFriend(1);
	}
	if (friendTwo == event.target)
	{
		divContent.removeChild(divToRemove);
		renderFriend(2);
	}
	if (friendThree == event.target)
	{
		divContent.removeChild(divToRemove);
		renderFriend(3);
	}
	if (friendFour == event.target)
	{
		divContent.removeChild(divToRemove);
		renderFriend(4);
	}
	
});

function loadFriends()
{
	
	fetch('friends/friends.json')
	.then(response =>
	{
		console.log(response.status);
		return response.json();
	})
	.then(json_data =>
	{
		let divContent = document.querySelector(".content");
		let div = document.createElement("div")
		let span = document.createElement("span");
		let ul = document.createElement("ul");
		let spanTextNode = document.createTextNode("Friends");

		friends.setAttribute("class", "pure-menu-selected");
		div.setAttribute("class", "pure-menu custom-restricted-width");
		span.setAttribute("class", "pure-menu-heading");
		ul.setAttribute("class", "pure-menu-list");
		
		span.appendChild(spanTextNode);
		div.appendChild(span);
		div.appendChild(ul);
		divContent.appendChild(div);
		
		// get list of frens
		console.log(json_data[0].id);

		for (let count = 0; count < json_data.length; count++)
		{
		let li = document.createElement("li");
		let aTag = document.createElement("a");

		li.setAttribute("class", "pure-menu-item");
		aTag.setAttribute("href", "#");
		aTag.setAttribute("class", "pure-menu-link");
		aTag.setAttribute("data-id", json_data[count].id);
		let nameTextNode = document.createTextNode(json_data[count].firstName + " " + json_data[count].lastName)			

		aTag.appendChild(nameTextNode);
		ul.appendChild(li);
		ul.appendChild(aTag);
		}

	});

}

function friendInformation()
{
	let friendDiv = document.createElement("div");
	let identityDiv = document.createElement("div");
	let img = document.createElement("img");
	let h2 = document.createElement("h2");
	let ul = document.createElement("ul");
	let emailLi = document.createElement("li");
	let hometownLi = document.createElement("li");
	let emailSpan = document.createElement("span");
	let hometownSpan = document.createElement("span");
	let emailTextNode = document.createTextNode("email: ");
	let hometownTextNode = document.createTextNode("hometown: ");
	let bioP = document.createElement("p");

	friendDiv.setAttribute("class", "friend");
	identityDiv.setAttribute("class", "identity");
	// set img src for each
	img.setAttribute("class", "photo");
	h2.setAttribute("class", "name");
	emailSpan.setAttribute("class", "label");
	hometownSpan.setAttribute("class", "label")
	bioP.setAttribute("class", "bio");
	// create textnodes for each email and hometown
	// append email/hometown to SPAN, example to LI
	emailSpan.appendChild(emailTextNode);
	hometownSpan.appendChild(hometownTextNode);
	emailLi.appendChild(emailSpan);
	hometownLi.appendChild(hometownSpan);
	ul.appendChild(emailLi);
	ul.appendChild(hometownLi);
	identityDiv.appendChild(img);
	identityDiv.appendChild(h2);
	identityDiv.appendChild(ul);
	friendDiv.appendChild(identityDiv);
	friendDiv.appendChild(bioP);
	divContent.appendChild(friendDiv);
}

function renderFriend(jsonNumber)
{
	fetch('friends/'+ jsonNumber + '.json')
	.then(response =>
	{
		return response.json()
	})
	.then(json_data =>
	{
		friendInformation();

		let img = document.querySelector("img");
		let h2 = document.querySelector(".name");
		let spans = document.querySelectorAll(".label");
		let p = document.querySelector(".bio");

		let email = document.createTextNode(json_data.email);
		let hometown = document.createTextNode(json_data.hometown);
		let name = document.createTextNode(json_data.firstName + " " + json_data.lastName);
		let bio = document.createTextNode(json_data.bio);

		img.setAttribute("src","img/" + json_data.avatar);
		h2.appendChild(name);
		spans[0].appendChild(email);
		spans[1].appendChild(hometown);
		p.appendChild(bio);
		
	})
}
home.addEventListener("click", (event) =>
{
	location.reload();
})