const StockPriceDisplay = (props) => {
    const [stockData, setStockData] = React.useState({})

    React.useEffect(() => {
        // call stock and set stock ata.
        console.log("StockPriceDisplay loaded");
        console.log(props.stock);
        props.stock.getStockPrice().then(priceData => {
            setStockData({...priceData});
        }).catch((error) => {
            setStockData({});
        })

    }, [])

    React.useEffect(() => {
        console.log("stock data has been changed");
        console.log(stockData);
    }, [stockData])

    const currencyFormatter = (value) => {
        return (+value).toLocaleString('en-US', {
            style: currency,
            currency: USD
        })
    }


    return( stockData === {} ?
        <p>No data or loading data..</p>
        :
        <section className= "stock-display">
            <h2>Stock Viewer Display</h2>
            <div className="details">Symbol: {stockData.symbol}</div>
            <div className="details">Price: {stockData.price}</div>
            <div className="">
                <button className="button-history">Previous 5 days</button>
            </div>
        </section>
    )
    
}

export default StockPriceDisplay;