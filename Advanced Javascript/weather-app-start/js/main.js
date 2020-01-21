/**
* Weather App to display the current weather on a web page
* This is an application to demonstrate how to use fetch and the 
* OpenWeatherMap API
*/


(() => {
// https://api.openweathermap.org/data/2.5/weather?q=Edmonton&appid=e2670819e5a925936fe5adca2c6fc39e&units=metric
// https://api.openweathermap.org/data/2.5/forecast?q=Edmonton&appid=e2670819e5a925936fe5adca2c6fc39e&units=metric


	/**
	 * @const {string} BASE_END_POINT
	 */
	const BASE_END_POINT = "https://api.openweathermap.org/data/2.5/";
	/**
	 * @const {string} API_KEY
	 */
	const API_KEY = "e2670819e5a925936fe5adca2c6fc39e"
	let weatherElement = document.querySelector('.weather-display');

	// let city = "Brisbane";
	// let currentWeatherEndPoint = `${BASE_END_POINT}weather?q=${city}&appid=${API_KEY}&units=metric`
	// let forecastEndPoint = `${BASE_END_POINT}forecast?q=${city}&appid=${API_KEY}&units=metric`



	/**
	* This is function that displays weather
	* @param {Object} weatherData - The weather data object from OpenWeather
	*/
	const displayWeather = (weatherData) => {
		console.log("Weather data: warm and happy");
		console.log(weatherData);
		let location = weatherElement.querySelector(".details .location");
		let date = weatherElement.querySelector(".details .date");
		let conditions = weatherElement.querySelector(".details .conditions");
		let currentTemp = weatherElement.querySelector(".details .temp");
		let sunrise = weatherElement.querySelector(".details .sunrise");
		let sunset = weatherElement.querySelector(".details .sunset");

		location.innerText = `${weatherData.name}, ${weatherData.sys.country}`;
		date.innerText =  new Date(weatherData.dt*1000);
		conditions.innerText = weatherData.weather[0].main;
		currentTemp.innerText = weatherData.main.temp;
		sunrise.innerText =  new Date(weatherData.sys.sunrise*1000)
		sunset.innerText =  new Date(weatherData.sys.sunset*1000)

	}

	/**
	* Display the weather in the console
	* @param {Object} forecastData - Gets the current forecast.
	*/
	const displayForecast = (forecastData) => {
		console.log("Weather data: more warm and happy");
		console.log(forecastData);
	}


	// Event listener to read the city from the user.
	document.querySelector('.frm.weather').addEventListener('submit', (event) =>
	{
		event.preventDefault();
		console.log("form submitted");
		let location = event.target.querySelector('[name=location]').value;
		console.log(location);
		// Create endpoint
		let currentWeatherEndPoint = `${BASE_END_POINT}weather?q=${location}&appid=${API_KEY}&units=metric`
	    let forecastEndPoint = `${BASE_END_POINT}forecast?q=${location}&appid=${API_KEY}&units=metric`
		// Get usable current weather
		fetch(currentWeatherEndPoint).then((response) => {
			return response.json()
		}).then((currentWeatherObject) => {
			displayWeather(currentWeatherObject);
			return fetch(forecastEndPoint);
		}).then((response) => {
			return response.json()
		}).then((forecastObject) => {
			displayForecast(forecastObject);
		}).catch((error) => {
			console.log(`Errors are such ${error}`);
		});

	});




})();


