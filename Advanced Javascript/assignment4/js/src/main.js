// Our Imports:
import StockSearchForm from "./components/StockSearchForm.js";

// Our Application
const App = () => {
    return <div>
        <h1>Stock Viewer App</h1>
        <StockSearchForm/>
    </div>;
}

let reactContainer = document.querySelector("#react-container")

ReactDOM.render(<App/>, reactContainer);