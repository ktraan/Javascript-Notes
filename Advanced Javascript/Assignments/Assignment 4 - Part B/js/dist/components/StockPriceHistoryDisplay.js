var StockPriceHistoryDisplay = function StockPriceHistoryDisplay(props) {
  React.useEffect(function () {
    console.log("in StockHistoryDisplay");
    console.log(props.history);
  }, [props.turtle]);
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("h5", null, "Last 5 Days: "), props.turtle.map(function (day) {
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: "day-details",
          key: day.date
        },
        /*#__PURE__*/
        React.createElement("div", {
          className: "date"
        }, "Date: ", day.date),
        /*#__PURE__*/
        React.createElement("div", {
          className: "details"
        }, "Open: ", day.open, ", High: ", day.high, ", Low: ", day.low, ", Close:", " ", day.close))
      );
    }))
  );
};

export default StockPriceHistoryDisplay;