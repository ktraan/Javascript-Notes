import { Weather } from './weather.js'; // forecast template is used as a partial in the weather template, register here

Handlebars.registerPartial('forecast', Handlebars.templates['forecast']);
var weatherTemplate = Handlebars.templates['weather'];
/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API.
 */

(function () {
  /**
   * Displays the current weather for a given location.
   * @param {Weather} weatherObject - A weather and forecast manager
   * @param {HTMLElement} el - The reference to the display DOM element.
   */
  var displayWeather = function displayWeather(weatherObject, el) {
    weatherObject.getWeatherAndForecast().then(function () {
      el.innerHTML = weatherTemplate(weatherObject.weatherData);
    });
  }; // Event listener for retrieving a weather forecast


  document.querySelector('.frm.weather').addEventListener('submit', function (e) {
    var location = e.target.querySelector('[name=location]').value;
    e.preventDefault();
    displayWeather(new Weather({
      city: location
    }), document.querySelector(".weather-display"));
  });
})();