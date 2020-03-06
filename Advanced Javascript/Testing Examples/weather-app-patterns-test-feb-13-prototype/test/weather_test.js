// Import chai from chai
import chai from "chai";

// This will attach the should
chai.should();
import { Weather } from "../js/src/weather.js";

describe("Testing Weather", function() {
    // Test if it exists
    it("it should exist", function() {
        Weather.should.exist
    });

    describe("Test constructor", function() {
        let weather;

        describe("Empty Weather Instance", function() {
            before("setup Weather instance", function() {
                weather = new Weather();
            });

            it("should be a weather object", function() {
                weather.should.be.an("object");
                weather.should.be.an.instanceof(Weather);
            });
            it("Should have empty attributes", function() {
                weather.city.should.be.a("string");
                weather.city.should.equal("");
                weather.weatherData.should.deep.equal({});
            });
        });

        describe("Populated weather instance", function(){
            const TEST_CITY = "Calgary";
            const TEST_RANDOM = "Random thing";
            before("Setup weather", function() {
                weather = new Weather({city: TEST_CITY,
                                       random: TEST_RANDOM});
            });

            it("Attributes are what we expect", function() {
                weather.city.should.equal(TEST_CITY);
                weather.random.should.equal(TEST_RANDOM);

            });
        })

    });
    
});

