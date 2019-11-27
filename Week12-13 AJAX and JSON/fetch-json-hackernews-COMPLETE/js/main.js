
let allStories = document.querySelector('.hn-stories');
let getStoriesButton = document.querySelector('.fetch-stories');
let stories = null;


function loadStories() {
	fetch('https://hacker-news.firebaseio.com/v0/topstories.json')
    .then(function (response) {
        console.log("here")
        return response.json();
    })
    .then(function (storiesJSON) {
       storiesJSON.forEach(item => {
       	createStoryPart(item);
       });
    });
}


function createStoryPart(storyId) {
	let storyUrl = `https://hacker-news.firebaseio.com/v0/item/${storyId}.json`;
	console.log(storyUrl)
	fetch(storyUrl)
    .then(function (response) {
        console.log("here")
        return response.json();
    })
    .then((storyJSON) => {
    	console.log(storyJSON);
    	let newsItem = document.createElement("li");
    	let newsLink = document.createElement("a");
    	let newsTitle = document.createTextNode(storyJSON.title);
    	newsLink.setAttribute("href", storyJSON.url);

    	newsLink.appendChild(newsTitle);
    	newsItem.appendChild(newsLink);
    	allStories.appendChild(newsItem);
    });
}

getStoriesButton.addEventListener('click', (event)=> {
	loadStories();
});
