import StockPriceHistoryDisplay from "./StockPriceHistoryDisplay.js";
import StockSaveDisplay from "./StockSaveDisplay.js";

const StockPriceDisplay = (props) => {
  const [stockData, setStockData] = React.useState({});
  const [array, setArray] = React.useState([]);

  React.useEffect(() => {
    // call stock and set stock ata.
    props.stock
      .getStockPrice()
      .then((priceData) => {
        if (priceData instanceof Object) {
          setStockData({ ...priceData });
        } else {
          setStockData({ error: priceData });
        }
      })
      .catch((error) => {
        setStockData({ error: error });
      });
  }, [props.stock]);

  React.useEffect(() => {
    console.log(stockData);
  }, [stockData]);

  const currencyFormatter = (value) => {
    return (+value).toLocaleString("en-US", {
      style: currency,
      currency: USD,
    });
  };

  const isValidStock = () => {
    return props.stock.symbol !== "" && stockData.error === undefined;
  };

  const historyOnClickHandler = () => {
    props.stock
      .getStockFiveDayHistory()
      .then((priceDataWithHistory) => {
        setStockData({ ...priceDataWithHistory });
      })
      .catch((error) => {
        setStockData({ error: error });
      });
  };

  const saveOnClickHandler = () => {
    console.log("save button for array:");
    array.length = Math.min(array.length, 5);
    if (array.length >= 5) {
      console.log("Can only have 5 saved symbols");
    } else {
      setArray(array.concat(stockData));
      //setArray(array.push(stockData));
    }
    console.log(array);
  };

  return (
    <section className="stock-display">
      {isValidStock ? (
        <React.Fragment>
          <h2>Stock Viewer Display</h2>
          <div className="details">Symbol: {stockData.symbol}</div>
          <div className="details">Price: {stockData.price}</div>
          <div>
            <button className="button-history" onClick={historyOnClickHandler}>
              Previous 5 Days
            </button>
            <button className="button-save" onClick={saveOnClickHandler}>
              Save
            </button>
          </div>
          <div className="history">
            {stockData.history && (
              <StockPriceHistoryDisplay turtle={stockData.history} />
            )}
          </div>
          <div className="save">
            <StockSaveDisplay array={array} />
          </div>
        </React.Fragment>
      ) : (
        <React.Fragment>
          <p>No data or error loading data</p>
        </React.Fragment>
      )}
    </section>
  );
};

export default StockPriceDisplay;
