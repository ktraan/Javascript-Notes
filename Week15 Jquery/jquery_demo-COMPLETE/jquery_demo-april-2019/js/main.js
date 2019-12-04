// ENSURE YOU HAVE THE CONSOLE OPEN TO VIEW OUTPUT

// The jQuery function is available by name and the 
// alias $
console.log($ === jQuery); // true

// Use jQuery to find all paragraph elements in the page
console.log($('p'));

// Note that jQuery allows use of most/all CSS1-3 selectors and 
// makes use of a few custom selectors as well

// Select the second paragraph using jQuery pseudo selector and display its text
console.log($('p:eq(1)').text());

// Same as above using CSS selector
console.log($('p:nth-of-type(2)').text());

// change the html easily.
// $( "p:eq(1)" ).html( "The first paragraph." );



// Adding event listeners is easy too, one thing to note when using
// jQuery is that looping over elements is implicit.  This means that
// simply selecting for elements will ensure that a function is applied 
// to all elements in the set.
// this add an event listener on all paragraphs.:
// $('p').on('click', function (evt) {
//   console.log(this);
//   console.log(evt.target);
//   console.log(evt.target.innerHTML);
// });

// Below an example of "this" being the same as evt.target.
// uncomment the following code to see the example:
// $('a').on('click', function (evt) {
//   console.log("in the 'a' event listener");
//   console.log(this); // prints out the link elem.
//   console.log(evt.target);
//   return false;
// });

// Below an example of "this" being different as evt.target
// uncomment the following code to see the example:
// $('.link-selector-example').on('click', function (evt) {
//   console.log(this); // prints out the link elem.
//   console.log(evt.target);
//   return false;
// });

// To remove the event listeners from the paragraphs
// uncomment the following code to see the example:
// $('p').off('click');

// But, adding event listeners on all paragraphs is not very efficient,
// it would be better to add the listener on a parent element, say 
// the main element.
// on a root element, register an event handler on a child element.
$('main').on('click', 'p', function (evt) {
  console.log('Second attempt: ' + evt.target.innerHTML);
  console.log(this); //returns the matched 'p' rather than 'main'
});


// Below we're looking at different ways to get classes.
// console.log("Show a bit about classes");
// console.log($('div').hasClass('link-selector-example'));
// removing classes
// console.log("removing the class");
// console.log($('div').removeClass('link-selector-example'));
// console.log($('div').hasClass('link-selector-example'));
// adding classes.
// console.log("adding the class");
// console.log($('div').addClass('link-selector-example'));
// console.log($('div').hasClass('link-selector-example'));

// console.log("toggling the class");
// $('div').toggleClass('link-selector-example');
// console.log($('div').hasClass('link-selector-example'));
// console.log("toggling the class again!");
// $('div').toggleClass('link-selector-example');
// console.log($('div').hasClass('link-selector-example'));


// below are ways to manipulate attributes on an element.
// getting the attr
console.log("Playing with attributes");
console.log($(".dog-image").attr("alt"));
// set a single new attribute
$(".dog-image").attr("alt", "new dog image description");
console.log($(".dog-image").attr("alt"));
// setting multiple new attributes with an object.
$(".dog-image").attr({
	alt: "newest dog image description",
	src: "https://images.dog.ceo/breeds/samoyed/n02111889_12171.jpg"
});
console.log($(".dog-image").attr("alt"));
// output: newest dog image description
console.log($(".dog-image").attr("src"));
// output: https://images.dog.ceo/breeds/samoyed/n02111889_12171.jpg


//This is an example of doing some ajax.
function changeDog(){
  $.ajax({
    url: "https://dog.ceo/api/breeds/image/random",
    data: {}, //you can pass in a an object.
    success: function( responseObj ) {
      $('.dog-image').attr('src', responseObj.message);
      console.log(responseObj.message);
    }
  });
}

// execute the function when link is clicked
$('.dog-changer').on('click', function(){
	console.log("here")
	changeDog();
	return false;
});
// note: you have to use the following:
$('a').off('click');
// if you have an event on the "a" and returns false.
// because returning false mean the event is prevented
// AND won't propogate up the tree.



// This is going to add an event listener to the future items that we're going
// to do on the next step.
$('.listing-items').on('click', 'li', function(){
  alert(`The text in the list item is: ${$(this).text()}`)
  return false;
});

// Adding items to the list via javascript.
for (let i = 0; i < 5; i++) {
  $('.listing-items').append(`
    <li class="iteration-${i}">Loop iteration: ${i}</li>
  `);
}




