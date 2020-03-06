// import test suite requirements
import chai from 'chai';
import fetchMock from "fetch-mock"
import chatAsPromised from "chai-as-promised";



// apply the 'should' assertion style
chai.should();
chai.use(chatAsPromised);
// import application requirements
import { Weather, API_KEY, ENDPOINT } from '../js/src/weather.js';

const LOCATION = "Edmonton";
const WEATHER_URL = `${ENDPOINT}weather?q=${LOCATION}&units=metric&appid=${API_KEY}`
const DATE = 1583275454;
const COUNTRY = "CA";
const SUNRISE = 1583244946;
const SUNSET = 1583284554;
const CONDITIONS = "Clouds";
const TEMP = 4.35;

describe('Weather', function () {
    it('should exist', function () {
        Weather.should.exist;
    });

    describe('General test suite', function () {

        let weather;

        describe("Constructor Tests", function() {

            
            before('setup Weather instance', function () {
                weather = new Weather(); // create instance weather
            });

            describe('Weather instance', function () {
                it('should be a Weather object', function () {
                    weather.should.be.an('object');
                    weather.should.be.an.instanceof(Weather);
                });
            });

            describe('Default constructor', function () {
                it('has the proper default properties', function () {
                    weather.city.should.be.a('string');
                    weather.city.should.equal('');
                    weather.weatherData.should.deep.equal({});
                });
            })
         });

        describe("Method Tests", function() {
            const TEST_GET_WEATHER_DATA = {
                location: `${LOCATION}, ${COUNTRY}`,
                date: new Date(DATE*1000),
                conditions: CONDITIONS,
                temp: TEMP,
                sunrise: new Date(SUNRISE * 1000),
                sunset: new Date(SUNSET * 1000)
            }
            before("Setup fetch-mock", function() {

                fetchMock.get(WEATHER_URL, {
                    "coord": {
                      "lon": -113.47,
                      "lat": 53.55
                    },
                    "weather": [
                      {
                        "id": 801,
                        "main": CONDITIONS,
                        "description": "few clouds",
                        "icon": "02d"
                      }
                    ],
                    "base": "stations",
                    "main": {
                      "temp": TEMP,
                      "feels_like": -1.56,
                      "temp_min": 4,
                      "temp_max": 5,
                      "pressure": 692,
                      "humidity": 35
                    },
                    "visibility": 24140,
                    "wind": {
                      "speed": 4.1,
                      "deg": 290
                    },
                    "clouds": {
                      "all": 20
                    },
                    "dt": DATE,
                    "sys": {
                      "type": 1,
                      "id": 789,
                      "country": COUNTRY,
                      "sunrise": SUNRISE,
                      "sunset": SUNSET
                    },
                    "timezone": -25200,
                    "id": 5946768,
                    "name": LOCATION,
                    "cod": 200
                  });
            })
            beforeEach(`setup for ${LOCATION}`, function() {
                weather = new Weather({city: LOCATION});
            })

            it("test getWeather()", function() {
                let weatherData = weather.getWeather();

                fetchMock.lastUrl().should.equal(WEATHER_URL);
                
                return weatherData.should.eventually.deep.equal(TEST_GET_WEATHER_DATA);
            });

            
        });
    });
});