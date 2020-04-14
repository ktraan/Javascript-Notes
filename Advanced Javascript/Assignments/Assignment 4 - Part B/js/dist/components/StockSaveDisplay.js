var StockSaveDisplay = function StockSaveDisplay(props) {
  React.useEffect(function () {
    console.log(props.array);
  }, [props.array]);
  return (
    /*#__PURE__*/
    React.createElement(React.Fragment, null,
    /*#__PURE__*/
    React.createElement("h3", null, "Saved Stocks: "), props.array.map(function (stock) {
      return (
        /*#__PURE__*/
        React.createElement("div", {
          className: "symbol-key",
          key: stock.symbol
        },
        /*#__PURE__*/
        React.createElement("div", {
          className: "symbol"
        }, "Symbol: ", stock.symbol),
        /*#__PURE__*/
        React.createElement("div", {
          className: "price"
        }, "Price: ", stock.price),
        /*#__PURE__*/
        React.createElement("div", {
          className: "date"
        }, "Date: ", stock.date))
      );
    }))
  );
};

export default StockSaveDisplay;