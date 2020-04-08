import StockHistoryDisplay from './StockPriceHistoryDisplay.js';

const StockPriceDisplay = (props) => {
    const [stockData, setStockData] = React.useState({})

    React.useEffect(() => {
        // call stock and set stock ata.
        props.stock.getStockPrice().then(priceData => 
        {
            if (priceData instanceof Object)
            {
                setStockData({...priceData});
            } 
            else
            {
                setStockData({error: priceData})
            }
        }).catch((error) => {
            setStockData({error: error});
        })
    }, [props.stock])


    React.useEffect(() =>
    {
        console.log("stock data has been changed");
        console.log(stockData);
    }, [stockData])

    const currencyFormatter = (value) => 
    {
        return (+value).toLocaleString('en-US', 
        {
            style: currency,
            currency: USD
        })
    }

    const isValidStock = () => 
    {
        return props.stock.symbol !== "" && stockData.error === undefined
    }

    const historyOnClickHandler = () => {
        props.stock.getStockFiveDayHistory().then((priceDataWithHistory) => 
        {
            setStockData({...priceDataWithHistory})
            
        }).error((error) => {
            setStockData({error: error});
        })
    }

    return(<section className= "stock-display">
        {isValidStock ?
            <React.Fragment>
            <h2>Stock Viewer Display</h2>
            <div className="details">Symbol: {stockData.symbol}</div>
            <div className="details">Price: {stockData.price}</div>
            <div>
                <button className="button-history"
                        onClick={historyOnClickHandler}>
                    Previous 5 days</button>
            </div>
            <div className="history">
                {stockData.history && 
                    <StockHistoryDisplay history={stockData.history}/>}
            </div>
            </React.Fragment>
            :
            <React.Fragment>
                <p>No data or error loading data</p>
            </React.Fragment>
        }
        </section>);

 
}

export default StockPriceDisplay;