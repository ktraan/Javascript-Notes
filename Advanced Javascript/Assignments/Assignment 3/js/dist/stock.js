"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.API_KEY = exports.ENDPOINT = exports.Stock = void 0;

var fetch = require("node-fetch");

var API_KEY = '097S0L4ON78BMIRE';
exports.API_KEY = API_KEY;
var ENDPOINT = 'https://www.alphavantage.co/query?function=';
exports.ENDPOINT = ENDPOINT;

var Stock = function Stock(attributes) {
  this.symbol = "";
  this.stockData = {};
  this.stockHistoryData = {};

  if (attributes) {
    Object.assign(this, attributes);
  }
};

exports.Stock = Stock;

Stock.prototype.getStockPrice = function () {
  var _this = this;

  return fetch("".concat(ENDPOINT, "GLOBAL_QUOTE&symbol=").concat(this.symbol, "&apikey=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    symbol = data["Global Quote"]["01. symbol"], price = data["Global Quote"]["05. price"], date = data["Global Quote"]["07. latest trading day"];
    return Object.assign(_this.stockData, {
      symbol: symbol,
      price: price,
      date: date
    });
  });
};

Stock.prototype.getStockFiveDayHistory = function () {
  var _this2 = this;

  return fetch("".concat(ENDPOINT, "TIME_SERIES_WEEKLY&symbol=").concat(this.symbol, "&apikey=").concat(API_KEY)).then(function (response) {
    return response.json();
  }).then(function (data) {
    var weeklyTimeArray = Object.getOwnPropertyNames(data["Weekly Time Series"]);
    var fiveDayArray = weeklyTimeArray.slice(0, 5);
    var priceHistoryArray = [];

    for (var index = 0; index < fiveDayArray.length; index++) {
      priceHistoryArray.push(data["Weekly Time Series"][fiveDayArray[index]]);
    }

    open = priceHistoryArray[0]['1. open'];
    high = priceHistoryArray[0]['2. high'];
    low = priceHistoryArray[0]['3. low'];
    close = priceHistoryArray[0]['4. close'];
    date = fiveDayArray[0];
    return Object.assign(_this2.stockHistoryData, {
      open: open,
      high: high,
      low: low,
      close: close,
      date: date
    });
  });
};