// const friend item

const friendStyles = {
    padding: "10px",
    border: "1px solid black"
}

const Friend = (props) => { 
    
    return (<div style={friendStyles}>
        <div>{props.friendData.firstName} {props.friendData.lastName}</div>
        <div>{props.friendData.email}</div>
    </div>);
}