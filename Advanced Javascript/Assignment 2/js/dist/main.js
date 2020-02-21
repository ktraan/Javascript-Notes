;

(function () {
  "use strict";

  /** API key for signing the request */
  var API_KEY = '097S0L4ON78BMIRE';
  /** Alpha Vantage REST endpoint */

  var ENDPOINT = 'https://www.alphavantage.co/query?function=';
  /** Alpha Vantage function type */

  var FUNCTION_TYPE = "TIME_SERIES_DAILY";
  /**
   * Handlebars helper for currency conversion
   */

  Handlebars.registerHelper('currency', function (value) {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  });
  /**
   * Display the current price and other information for a stock.
   * @param {Object} data The returned stock symbol data
   */

  var renderStock = function renderStock(data) {
    var _data$MetaData = data['Meta Data'],
        symbol = _data$MetaData['2. Symbol'],
        date = _data$MetaData['3. Last Refreshed'];
    var closeOne = data["Time Series (Daily)"]["2020-02-21"]["4. close"];
    var closeTwo = data["Time Series (Daily)"]["2020-02-20"]["4. close"];
    var closeThree = data["Time Series (Daily)"]["2020-02-19"]["4. close"];
    var closeFour = data["Time Series (Daily)"]["2020-02-18"]["4. close"];
    var closeFive = data["Time Series (Daily)"]["2020-02-14"]["4. close"];
    var stockObject = {
      "symbol": symbol,
      "date": date,
      "closeOne": closeOne,
      "closeTwo": closeTwo,
      "closeThree": closeThree,
      "closeFour": closeFour,
      "closeFive": closeFive
    };
    document.querySelector(".stock-display").innerHTML = Handlebars.templates['stock'](stockObject);
  };
  /**
   * Handle symbol form submit to fetch the desired symbol information.
   * @param {Event} evt Event object for this listener function
   */


  var fetchTickerData = function fetchTickerData(evt) {
    evt.preventDefault(); // get the symbol

    var symbol = evt.target.elements['symbol'].value;
    fetch("".concat(ENDPOINT).concat(FUNCTION_TYPE, "&symbol=").concat(symbol, "&apikey=").concat(API_KEY)).then(function (response) {
      return response.json();
    }).then(function (data) {
      // log and export all data
      if (data['Error Message']) {
        // BONUS
        throw new Error("There was an error fulfilling your request. Be sure you've entered a valid symbol");
      }

      renderStock(data);
    })["catch"](function (err) {
      // BONUS
      alert("There was an error: ".concat(err));
    });
  }; // add the submit listener


  document.querySelector('.frm.symbol').addEventListener('submit', fetchTickerData);
})();
