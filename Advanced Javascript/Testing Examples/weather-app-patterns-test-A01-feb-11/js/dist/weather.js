/*
 * Fetch weather information for single city.
 **/
var Weather = {
  API_KEY: '52fc99a956494caea7b135022179925e',
  ENDPOINT: 'https://api.openweathermap.org/data/2.5/',
  getWeather: function getWeather(city) {
    console.log("getWeather");
    return fetch("".concat(this.ENDPOINT, "weather?q=").concat(city, "&units=metric&appid=").concat(this.API_KEY)).then(function (data) {
      return data.json();
    }).then(function (weatherData) {
      var location = "".concat(weatherData.name, ", ").concat(weatherData.sys.country),
          date = new Date(+weatherData.dt * 1000),
          conditions = weatherData.weather[0].main,
          temp = weatherData.main.temp,
          sunrise = new Date(+weatherData.sys.sunrise * 1000),
          sunset = new Date(+weatherData.sys.sunset * 1000);
      return {
        location: location,
        date: date,
        conditions: conditions,
        temp: temp,
        sunrise: sunrise,
        sunset: sunset
      };
    });
  },
  getForecast: function getForecast(city) {
    console.log("getForecast");
    return fetch("".concat(this.ENDPOINT, "forecast?q=").concat(city, "&units=metric&appid=").concat(this.API_KEY)).then(function (data) {
      return data.json();
    }).then(function (forecastData) {
      var currDate,
          nextDate,
          day = -1,
          forecast = [];
      forecastData.list.forEach(function (item) {
        // destructuring for desired variables
        var date = item.dt_txt,
            _item$main = item.main,
            high = _item$main.temp_max,
            low = _item$main.temp_min,
            condition = item.weather[0].main; // remove the time from the date

        nextDate = date.split(' ')[0];

        if (currDate !== nextDate) {
          // a new day
          currDate = nextDate;
          day += 1; // store the new day ... just take the initial condition value

          forecast.push({
            condition: condition,
            date: currDate,
            high: high,
            low: low
          });
        } // find the highest high and the lowest low


        if (forecast[day].high < high) {
          forecast[day].high = high;
        }

        if (forecast[day].low > low) {
          forecast[day].low = low;
        }
      });
      return {
        forecast: forecast
      };
    });
  },
  getWeatherAndForecast: function getWeatherAndForecast(city) {
    var _this = this;

    var fullWeather = {};
    return this.getWeather(city).then(function (weatherData) {
      Object.assign(fullWeather, weatherData);
      return _this.getForecast(city);
    }).then(function (forecastData) {
      Object.assign(fullWeather, forecastData);
      return fullWeather;
    });
  }
};
export { Weather };