// Our Imports:
import StockSearchForm from "./components/StockSearchForm.js";
import StockPriceDisplay from "./components/StockPriceDisplay.js";
import {Stock} from './stock.js';

// Our Application
const App = () => {
    return <div>
        <h1>Stock Viewer App</h1>
        <StockSearchForm/>
        <StockPriceDisplay stock={new Stock({symbol: "VOO"})}/>
    </div>;
}

let reactContainer = document.querySelector("#react-container")

ReactDOM.render(<App/>, reactContainer);