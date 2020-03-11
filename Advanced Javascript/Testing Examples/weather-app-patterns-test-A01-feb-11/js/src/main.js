import {Weather} from './weather.js';

// forecast template is used as a partial in the weather template, register here
Handlebars.registerPartial('forecast', Handlebars.templates['forecast']);
const weatherTemplate = Handlebars.templates['weather'];

/**
 * Simple weather display application for demonstrating AJAX for JSON and
 * best practices for JavaScript development.  The script makes use of the
 * OpenWeatherMap weather API.
 */
(() => {

    /**
     * Displays the current weather for a given location.
     * @param {Promise} resolveWeather - A promise to resolve weather and forecast.
     * @param {HTMLElement} el - The reference to the display DOM element.
     */
    const displayWeather = (resolveWeather, el) => {
        resolveWeather.then((fullWeatherData)=> {
            el.innerHTML = weatherTemplate(fullWeatherData);
        });
    }

    // Event listener for retrieving a weather forecast
    document
        .querySelector('.frm.weather')
        .addEventListener('submit', function (e) {
            let location = e
                .target
                .querySelector('[name=location]')
                .value;

                displayWeather(Weather.getWeatherAndForecast(location),
                               document.querySelector('.weather-display'))

            e.preventDefault();
        });
})();