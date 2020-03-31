// Our Imports:
import StockSearchForm from "./components/StockSearchForm.js";
import StockPriceDisplay from "./components/StockPriceDisplay.js";
import { Stock } from './stock.js'; // Our Application

var App = function App() {
  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("h1", null, "Stock Viewer App"),
    /*#__PURE__*/
    React.createElement(StockSearchForm, null),
    /*#__PURE__*/
    React.createElement(StockPriceDisplay, {
      stock: new Stock({
        symbol: "VOO"
      })
    }))
  );
};

var reactContainer = document.querySelector("#react-container");
ReactDOM.render(
/*#__PURE__*/
React.createElement(App, null), reactContainer);