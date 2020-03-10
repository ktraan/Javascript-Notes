const styleObject = {
    backgroundColor: "pink",
    color: "Navy"
}

const Wrapper = (props) => {
    return (<div style={styleObject}>
        {props.children}
    </div>)
}

const GreetingPerson = (props) => {
    return (<p>Hey {props.name}</p>)
}

const App = (props) => {
    return (<Wrapper>
        <GreetingPerson name="Steve"/>
        <GreetingPerson name="Dan"/>
        <GreetingPerson name="Kevin"/>
        </Wrapper>);
}

const domContainer = document.querySelector("#react-container");
ReactDOM.render(<App/>, domContainer);