const domContainer = document.querySelector('#react-container');

const App = () => {
    return (
        <div>
            <h1>Friends List</h1>
            <FriendsList />
        </div>
    );
};

ReactDOM.render(<App/>, domContainer);