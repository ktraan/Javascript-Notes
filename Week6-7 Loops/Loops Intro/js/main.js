let output = document.querySelector('.output');
let shoppingList = '<ul>';
let shoppingItems = ["cat food", "orange", "aosw", "tape", "soda"];

for (let i = 0; i < shoppingItems.length; i++)
{
	shoppingList += "<li>" + shoppingItems[i] + "</li>";
}


shoppingList += '</ul>';
output.innerHTML = shoppingList;

// for (let counter = 0; counter < 10; counter++)
// {
// 	if (counter === 3)
// 	{
// 		continue;
// 	}
// 	if (counter >= 7)
// 	{
// 		break;
// 	}
//  shoppingList += '<li> The current count is ' + counter + '</li>';
// }
// shoppingList += '</ul>';
// output.innerHTML = shoppingList;




// while (counter < 10)
// {
// 	if (counter == 0)
// 	{
// 		counter++
// 		continue;
// 	}
// 	shoppingList += '<li> while doing this: ' + counter + '</li>';
// 	counter++;
// }

// shoppingList += '</ul>';
// output.innerHTML = shoppingList;