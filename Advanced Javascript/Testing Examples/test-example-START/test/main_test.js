// Make your tests here!
import chai, { assert, expect } from "chai";
import { addNumbers, getAnimalOwner } from "../js/main.js";

let should = chai.should();

describe("Test main.js", function() {
    describe("Test addNumbers function", function() {
        it("Test two numbers", function() {
            let expectedSum = 10;
            assert.equal(addNumbers(3,7), expectedSum);
        });
        it("Test the faulty result", function() {
            let notExpectedSum = 13;
            assert.notEqual(addNumbers(7,5), notExpectedSum);
        });
 
        it("Return value is a number", function(){
            assert.isNumber(addNumbers(7,5));
        });
    });

    describe("Test getAnimalOwner", function() {
        let exampleResult;
        before("Get the result from getAnimalOwner", function() {
            exampleResult = getAnimalOwner();

        });
        it("Should return an Object twice", function() {
            // exampleResult.should.not.be.an("string");
            // With should
            exampleResult.should.be.an("object");
            // with expect
            expect(exampleResult).to.be.an("object");
        });

        it("Check animals array typeof and length", function() {
            exampleResult.animals.should.be.an("Array");
            expect(exampleResult.animals).to.have.lengthOf(3);
        });

    });
});