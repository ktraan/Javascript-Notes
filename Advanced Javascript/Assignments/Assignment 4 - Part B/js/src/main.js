// Our Imports:
import StockSearchForm from "./components/StockSearchForm.js";
import StockPriceDisplay from "./components/StockPriceDisplay.js";
import {Stock} from './stock.js';



// Our Application
const App = () => {

    const [stockSymbol, setStockSymbol] = React.useState("");

    React.useEffect(() => {
    //  console.log("The new stock symbol is this");
    //    console.log(stockSymbol);
    }, [stockSymbol]);

    return <div>
        <h1>Stock Viewer App</h1>
        <StockSearchForm setStockCallback={setStockSymbol}/>
        <StockPriceDisplay stock={new Stock({symbol: stockSymbol})}/>
        
    </div>;
}

let reactContainer = document.querySelector("#react-container")

ReactDOM.render(<App/>, reactContainer);