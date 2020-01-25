// API KEY: 097S0L4ON78BMIRE
// Example URL: https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=MSFT&apikey=097S0L4ON78BMIRE
(() =>
{
	const BASE_END_POINT = "https://www.alphavantage.co/query?";
	const FUNCTION_TYPE = "TIME_SERIES_DAILY";
	const API_KEY = "097S0L4ON78BMIRE";

	let stockElement = document.querySelector(".stock-display");

	const displayStockInformation = (stockData) =>
	{
		console.log("stock data:")
		console.log(stockData);
		console.log(metaData);
		let tickerSymbol = stockElement.querySelector(".information .symbol");

		

	}


	document
	.querySelector(".frm.stock")
	.addEventListener(("submit"), (event) =>
	{
		event.preventDefault();
		let tickerSymbol = event.target.querySelector('[name=symbol]').value;
		let currentStockEndPoint = `${BASE_END_POINT}function=${FUNCTION_TYPE}&symbol=${tickerSymbol}&apikey=${API_KEY}`;
		console.log(currentStockEndPoint);

		fetch(currentStockEndPoint).then((response) =>
		{
			console.log(response.status)
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
