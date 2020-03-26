const StockSearchForm = () => {

    const [stockSymbol, setStockSymbol] = React.useState("voo");

    const onSubmitHandler = (event) => {
        console.log("Stock search form submitted");
        console.log(`Current symbol: ${stockSymbol}`);
        event.preventDefault();
    }

    const onChangeHandler = (event) => {
        console.log(event.target.value);
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