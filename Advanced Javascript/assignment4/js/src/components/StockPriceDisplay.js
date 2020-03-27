const StockPriceDisplay = (props) => {
    return <section className="stock-display">
        <h2>Stock Viewer</h2>
        <div className="details">Symbol: </div>
        <div className="details">Price: </div>
        <div>
            <button className="btn-history">
                Previous 5 Days
            </button>
        </div>
    </section>
}

export default StockPriceDisplay;