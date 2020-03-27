// Our Imports:
import StockSearchForm from "./components/StockSearchForm.js";
import StockPriceDisplay from "./components/StockPriceDisplay.js"


// Our Application
const App = () => {
    return <div>
        <h1>Stock Viewer App</h1>
        <StockSearchForm/>
        <StockPriceDisplay/>
    </div>;
}

let reactContainer = document.querySelector("#react-container")

ReactDOM.render(<App/>, reactContainer);