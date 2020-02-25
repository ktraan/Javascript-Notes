import chai, {expect, assert} from 'chai';
import { getAnimalOwner, addNumbers } from '../js/main.js';

// use 
let should = chai.should()

describe("Test main.js", function() {
	// example of using assert
	describe("test addNumbers with assert", function(){
		it("test 2 numbers in addNumbers", function() {
			let expectedSum = 5;
			assert.equal(addNumbers(2,3), expectedSum);
		});

		it("test 4 numbers in addNumbers", function() {
			let expectedSum = 10;
			assert.equal(addNumbers(1,2,3,4), expectedSum);
		});

		it("test that we get a faulty result if not equal", function(){
			let notExpectedSum = 10;
			assert.notEqual(addNumbers(1,1), notExpectedSum);
		});
	});

	// example using should
	describe("test getAnimalOwner with should", function() {
		let exampleResult; 

		before("get the result from getExample", function(){
			exampleResult = getAnimalOwner();
		})

		it("should be an object", function() {
			exampleResult.should.be.an('object');
		});

		it("check the name", function() {
			exampleResult.name.should.be.a('string');
			exampleResult.name.should.equal('Dan');
		});

		it("check the animals array", function() {
			exampleResult.animals.should.be.a('Array');
			exampleResult.animals.should.have.lengthOf(3)
		});
	});

	// example of using expect, very similar to should
	describe("test getAnimalOwner with expect", function() {
		let exampleResult; 

		before("get the result from getExample", function(){
			exampleResult = getAnimalOwner();
		});

		it("should be an object", function() {
			expect(exampleResult).to.be.an('object');
		});

		it("check the name", function() {
			expect(exampleResult.name).to.be.a('string');
			expect(exampleResult.name).to.equal('Dan');
		});

		it("check the animals array", function() {
			expect(exampleResult.animals).to.be.an('Array');
			expect(exampleResult.animals).to.have.lengthOf(3)
		});
	});
});