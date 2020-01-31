/**
* This Stock App is to display information of the chosen stock.
* The user will enter a ticker symbol and it will retreive the symbol, price and the current date 
*/
(() =>
{
	/**
	* @const {string} BASE_END_POINT
	*/
	const BASE_END_POINT = "https://www.alphavantage.co/query?";
	/**
	* @const {string} FUNCTION_TYPE
	*/
	const FUNCTION_TYPE = "TIME_SERIES_DAILY";
	/**
	* @const {string} API_KEY
	*/
	const API_KEY = "097S0L4ON78BMIRE";

	let stockElement = document.querySelector(".stock-display");

	/**
	* This function will display the stock information
	* @param {Object} stockData - The current stock information from Alpha Vantage
	*/
	const displayStockInformation = (stockData) =>
	{
		let information = stockElement.querySelector(".information .info")
		let tickerSymbol = stockElement.querySelector(".information .symbol");
		let currentDate = stockElement.querySelector(".information .date")
		let closePrice = stockElement.querySelector(".information .price")
		let dateSplit = stockData["Meta Data"]["3. Last Refreshed"];
		dateSplit = dateSplit.split(" ")[0];
		
		information.innerText = stockData["Meta Data"]["1. Information"];
		tickerSymbol.innerText = stockData["Meta Data"]["2. Symbol"];
		currentDate.innerText = new Date(stockData["Meta Data"]["3. Last Refreshed"]);
		closePrice.innerText = "$" + stockData["Time Series (Daily)"][`${dateSplit}`]["4. close"];

	}

	document
	.querySelector(".frm.stock")
	.addEventListener(("submit"), (event) =>
	{
		event.preventDefault();
		let tickerSymbol = event.target.querySelector("[name=symbol]").value;
		let currentStockEndPoint = `${BASE_END_POINT}function=${FUNCTION_TYPE}&symbol=${tickerSymbol}&apikey=${API_KEY}`;
		console.log(currentStockEndPoint);
		fetch(currentStockEndPoint).then((response) =>
		{
			return response.json();
		}).then((currentStockObject) =>
		{
			displayStockInformation(currentStockObject);

		}).catch((error) =>
		{
			console.log(`Errors: ${error}`);
		})
	})

})();
