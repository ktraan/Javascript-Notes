/** API key for signing the request */
const API_KEY = '097S0L4ON78BMIRE';
/** Alpha Vantage REST endpoint */
const ENDPOINT = 'https://www.alphavantage.co/query?function=';
/** Alpha Vantage function type */
const FUNCTION_TYPE = "TIME_SERIES_DAILY";

/**
 * Handlebars helper for currency conversion
 */
Handlebars.registerHelper('currency', (value) => {
    return value.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD'
    });
  });

/**
 * Display the current price and other information for a stock.
 * @param {Object} data The returned stock symbol data
 */
const renderStock = (data) => 
{
    let {'2. Symbol':symbol, '3. Last Refreshed':date} = data['Meta Data'];
    let {"4. close":closeOne} = data["Time Series (Daily)"]["2020-02-21"];
    let {"4. close":closeTwo} = data["Time Series (Daily)"]["2020-02-20"];
    let {"4. close":closeThree} = data["Time Series (Daily)"]["2020-02-19"];
    let {"4. close":closeFour} = data["Time Series (Daily)"]["2020-02-18"];
    let {"4. close":closeFive} = data["Time Series (Daily)"]["2020-02-14"];
    let stockObject =
    {
        "symbol": symbol,
        "date": date,
        "closeOne": closeOne,
        "closeTwo": closeTwo,
        "closeThree": closeThree,
        "closeFour": closeFour,
        "closeFive": closeFive
    }
    document.querySelector(".stock-display").innerHTML = Handlebars.templates['stock'](stockObject);
    
}

/**
 * Handle symbol form submit to fetch the desired symbol information.
 * @param {Event} evt Event object for this listener function
 */
const fetchTickerData = (evt) => {
    evt.preventDefault();
    // get the symbol
    const symbol = evt.target.elements['symbol'].value;

    fetch(`${ENDPOINT}${FUNCTION_TYPE}&symbol=${symbol}&apikey=${API_KEY}`)
    .then(response => {
        return response.json();
    })
    .then(data => {
        // log and export all data
        if (data['Error Message']) { // BONUS
            throw new Error(`There was an error fulfilling your request. Be sure you've entered a valid symbol`);
        }
        renderStock(data);
        
    })
    .catch(err => { // BONUS
        alert(`There was an error: ${err}`);
    });

    
};

// add the submit listener
document.querySelector('.frm.symbol').addEventListener('submit', fetchTickerData);