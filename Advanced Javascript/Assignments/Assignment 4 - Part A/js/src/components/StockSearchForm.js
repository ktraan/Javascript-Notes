const StockSearchForm = (props) => {

    const [stockSymbol, setStockSymbol] = React.useState("msft");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        props.setStockCallback(stockSymbol);
    }

    const onChangeHandler = (event) => {
        
        setStockSymbol(event.target.value);
    }

    return <div>
        <h2>Stock Search Form</h2>
        <form 
            className="frm sym"
            onSubmit={onSubmitHandler}  
        >
            <label htmlFor="symbol">
                Ticket Symbol
            </label>
            <input 
                type="text"
                id="symbol"
                name="symbol"
                onChange={onChangeHandler}
                value={stockSymbol}
            />
            <button type="submit">View</button>
        </form>
    </div>
}

export default StockSearchForm;