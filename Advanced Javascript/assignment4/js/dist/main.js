// Our Imports:
import StockSearchForm from "./components/StockSearchForm.js"; // Our Application

var App = function App() {
  return (
    /*#__PURE__*/
    React.createElement("div", null,
    /*#__PURE__*/
    React.createElement("h1", null, "Stock Viewer App"),
    /*#__PURE__*/
    React.createElement(StockSearchForm, null))
  );
};

var reactContainer = document.querySelector("#react-container");
ReactDOM.render(
/*#__PURE__*/
React.createElement(App, null), reactContainer);