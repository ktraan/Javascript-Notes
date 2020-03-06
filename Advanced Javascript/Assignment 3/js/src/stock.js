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

Stock.prototype.getStockData = function() {
    return fetch(`${ENDPOINT}GLOBAL_QUOTE&symbol=${this.symbol}&apikey=097S0L4ON78BMIRE`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        price = data["Global Quote"]["05. price"],
        date = data["Global Quote"]["07. latest trading day"],
        open = data["Global Quote"]["02. open"],
        high = data["Global Quote"]["03. high"],
        low = data["Global Quote"]["04. low"],
        close = data["Global Quote"]["08. previous close"];

        return Object.assign(this.stockData, {price, date, open, high, low, close});
    });
}

export { Stock };