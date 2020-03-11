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
    return fetch(`${ENDPOINT}TIME_SERIES_DAILY&symbol=${currentSymbol}&apikey=${API_KEY}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        date = data["TimeSeries"]["07. latest trading day"],
        open = data["Global Quote"]["02. open"],
        high = data["Global Quote"]["03. high"],
        low = data["Global Quote"]["04. low"],
        close = data["Global Quote"]["08. previous close"];

        return Object.assign(this.stockHistoryData, {date, open, high, low, close});
    });
}

export { Stock, ENDPOINT, API_KEY };