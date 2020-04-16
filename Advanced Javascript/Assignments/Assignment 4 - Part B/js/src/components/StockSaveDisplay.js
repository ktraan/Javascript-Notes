const StockSaveDisplay = (props) => {
  React.useEffect(() => {
    console.log(props.array);
  }, [props.array]);

  return (
    <React.Fragment>
      <h3>Saved Stocks: </h3>
      {props.array.map((stock) => {
        return (
          <div className="symbol-key" key={stock.symbol}>
            <div className="symbol">Symbol: {stock.symbol}</div>
            <div className="price">Price: {stock.price}</div>
            <hr></hr>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default StockSaveDisplay;
