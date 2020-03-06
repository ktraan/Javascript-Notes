// Write your tests here!
import chai from "chai";
import fetchMock from "fetch-mock";
import chaiAsPromised from "chai-as-promised";

// Attach chai
chai.should();
// Attach chai as promised to chai
chai.use(chaiAsPromised);

import { getTopArticles } from "../js/api.js";

describe("Test for HackerNews API", function() {
    const TOP_ARTICLES_URL = "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty";
    const TOP_ARTICLES_OUTPUT = [ 22434466, 22427334, 22438979, 22433654, 22437092]; 

    before("Setup our mocks", function() {
        fetchMock.get(TOP_ARTICLES_URL, TOP_ARTICLES_OUTPUT);
    });
    it("Test the getTopArticles function", function(){
       let articles = getTopArticles();
       fetchMock.lastUrl().should.equal(TOP_ARTICLES_URL);

       return articles.should.eventually.deep.equal(TOP_ARTICLES_OUTPUT);
    });
});
