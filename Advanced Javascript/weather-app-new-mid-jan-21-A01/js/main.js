"use strict";

/**
 * Weather App to display the current weather on a web page.
 * This is an application to demonstrate how to use fetch and
 * the openweathermap api.
 */
(function () {
  /**
   * @const {string} BASE_END_POINT 
   */
  var BASE_END_POINT = "https://api.openweathermap.org/data/2.5/";
  /**
   * @const {string} API_KEY
   */

  var API_KEY = "52fc99a956494caea7b135022179925e";
  var weatherElement = document.querySelector('.weather-display');
  /**
   * This is function that displays weather.
   * @param {Object} weatherData - The current weather data object from openweather.
   */

  var displayWeather = function displayWeather(weatherData) {
    console.log("weatherData"); // console.log(weatherData);

    var location = weatherElement.querySelector(".details .location");
    var date = weatherElement.querySelector('.details .date');
    var conditions = weatherElement.querySelector('.details .conditions');
    var temp = weatherElement.querySelector('.details .temp');
    var sunrise = weatherElement.querySelector('.details .sunrise');
    var sunset = weatherElement.querySelector('.details .sunset');
    location.innerText = "".concat(weatherData.name, ", ").concat(weatherData.sys.country);
    date.innerText = new Date(weatherData.dt * 1000);
    conditions.innerText = weatherData.weather[0].main;
    temp.innerText = weatherData.main.temp;
    sunrise.innerText = new Date(weatherData.sys.sunrise * 1000);
    sunset.innerText = new Date(weatherData.sys.sunset * 1000);
  };
  /*
   * Display the weather in the console.
   * @param {Object} forecastData - Gets the current forecast.
   */


  var displayForecast = function displayForecast(forecastData) {
    console.log("forecastData");
    console.log(forecastData);
  }; // Event listener to read the city from the user.


  document.querySelector('.frm.weather').addEventListener('submit', function (event) {
    event.preventDefault();
    console.log("form submitted");
    var location = event.target.querySelector('[name=location]').value; // create endpoints

    var currentWeatherEndPoint = "".concat(BASE_END_POINT, "weather?q=").concat(location, "&appid=").concat(API_KEY, "&units=metric");
    var forecastEndPoint = "".concat(BASE_END_POINT, "forecast?q=").concat(location, "&appid=").concat(API_KEY, "&units=metric"); // Get useable current weather.

    fetch(currentWeatherEndPoint).then(function (response) {
      return response.json();
    }).then(function (currentWeatherObject) {
      displayWeather(currentWeatherObject); // Get current forecast.

      return fetch(forecastEndPoint);
    }).then(function (response) {
      return response.json();
    }).then(function (forecastObject) {
      displayForecast(forecastObject);
    })["catch"](function (error) {
      console.log("Errors are such ".concat(error));
    });
  });
})();
