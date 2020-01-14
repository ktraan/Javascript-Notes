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
	let city = "Brisbane";

	let currentWeatherEndPoint = `${BASE_END_POINT}weather?q=${city}&appid=${API_KEY}&units=metric`
	let forecastEndPoint = `${BASE_END_POINT}forecast?q=${city}&appid=${API_KEY}&units=metric`

	/**
	* This is function that displays weather
	* @param {Object} weatherData - The weather data object from OpenWeather
	*/
	const displayWeather = (weatherData) => {
		console.log(weatherData);
		console.log("Weather data: sad");
	}

	/**
	* Display the weather in the console
	* @param {Object} forecastData - Gets the current forecast.
	*/
	const displayForecast = (forecastData) => {
		console.log(forecastData);
		console.log("Weather data: sad");
	}


	fetch(currentWeatherEndPoint).then((response) => {
		return response.json()
	}).then((currentWeatherObject) => {
		displayWeather(currentWeatherObject);
	});

	fetch(forecastEndPoint).then((response) => {
		return response.json()
	}).then((forecastObject) => {
		displayForecast(forecastObject);
	});

})();


