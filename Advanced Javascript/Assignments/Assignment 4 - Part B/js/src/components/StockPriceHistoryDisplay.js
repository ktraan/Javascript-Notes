const StockPriceHistoryDisplay = (props) => {
  React.useEffect(() => {
    console.log("in StockHistoryDisplay");
    console.log(props.history);
  }, [props.turtle]);
  return (
    <React.Fragment>
      <h5>Last 5 Days: </h5>
      {props.turtle.map((day) => {
        return (
          <div className="day-details" key={day.date}>
            <div className="date">Date: {day.date}</div>
            <div className="details">
              Open: {day.open}, High: {day.high}, Low: {day.low}, Close:{" "}
              {day.close}
            </div>
          </div>
        );
      })}
    </React.Fragment>
  );
};

export default StockPriceHistoryDisplay;
