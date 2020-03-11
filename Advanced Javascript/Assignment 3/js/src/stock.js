const API_KEY = '097S0L4ON78BMIRE';
const ENDPOINT = 'https://www.alphavantage.co/query?function=';
const Stock = function(attributes) 
{
    this.symbol = "";
    this.stockData = {};
    if(attributes) 
    {
        Object.assign(this, attributes);
    }
}

Stock.prototype.getStockPrice = function() {
    return fetch(`${ENDPOINT}GLOBAL_QUOTE&symbol=${this.symbol}&apikey=${API_KEY}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        symbol = data["Global Quote"]["01. symbol"],
        price = data["Global Quote"]["05. price"],
        date = data["Global Quote"]["07. latest trading day"];

        return Object.assign(this.stockData, {symbol, price, date});
    });
}


Stock.prototype.getStockFiveDayHistory = function() {
    return fetch(`${ENDPOINT}TIME_SERIES_WEEKLY&symbol=${this.symbol}&apikey=${API_KEY}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        let currentDate;
        let nextDate;
        let day = -1;
        let fiveDayHistory = [];

        
        return Object.assign(this.stockHistoryData, {fiveDayHistory});
    });
}

export { Stock, ENDPOINT, API_KEY };