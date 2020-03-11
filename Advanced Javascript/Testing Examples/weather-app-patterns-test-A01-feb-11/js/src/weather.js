/*
 * Fetch weather information for single city.
 **/
const Weather = {
	API_KEY: '52fc99a956494caea7b135022179925e',
	ENDPOINT: 'https://api.openweathermap.org/data/2.5/',
	getWeather: function(city) {
		console.log("getWeather");
		return fetch(`${this.ENDPOINT}weather?q=${city}&units=metric&appid=${this.API_KEY}`).then(data => {
                return data.json()
            }).then(weatherData => {
            	let location = `${weatherData.name}, ${weatherData.sys.country}`,
		            date = new Date(+ weatherData.dt * 1000),
		            conditions = weatherData.weather[0].main,
		            temp = weatherData.main.temp,
		            sunrise = new Date(+ weatherData.sys.sunrise * 1000),
		            sunset = new Date(+ weatherData.sys.sunset * 1000);

		        return {location, date, conditions, temp, sunrise, sunset}
            });
	},
	getForecast: function(city) {
		console.log("getForecast");
		return fetch(`${this.ENDPOINT}forecast?q=${city}&units=metric&appid=${this.API_KEY}`)
            .then(data => {
                return data.json()
            }).then(forecastData => {
            	let currDate,
		            nextDate,
		            day = -1,
		            forecast = [];

            	forecastData.list.forEach((item) => {
		            // destructuring for desired variables
		            let { dt_txt: date } = item,
		            	{ temp_max: high, temp_min: low } = item.main,
		            	{ main: condition } = item.weather[0];

		            // remove the time from the date
		            nextDate = date.split(' ')[0];
		            if (currDate !== nextDate) {
		                // a new day
		                currDate = nextDate;
		                day += 1;
		                // store the new day ... just take the initial condition value
		                forecast.push({condition, date:currDate, high, low});
		            }

		            // find the highest high and the lowest low
		            if (forecast[day].high < high) {
		                forecast[day].high = high;
		            }

		            if (forecast[day].low > low) {
		                forecast[day].low = low;
		            }
		        });

		        return {forecast};
            });
	},
	getWeatherAndForecast: function(city) {
		let fullWeather = {};
		return this.getWeather(city)
			.then((weatherData)=>{
				Object.assign(fullWeather, weatherData);
				return this.getForecast(city);
			})
			.then((forecastData) => {
				Object.assign(fullWeather, forecastData);
				return fullWeather;
			});
	}
}

export {Weather};
