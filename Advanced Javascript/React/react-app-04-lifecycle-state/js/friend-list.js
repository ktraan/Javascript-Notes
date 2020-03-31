'use strict';

// Open the the same example with lifecycle state hooks.
// You can open this side by side 

// use an object literal for embedded styling
const friendListStyles = {
    padding: '0',
    border: '1px solid #ddd',
    listStyle: 'none'
};

class FriendList extends React.Component {
    /*
    Below is technically what we're doing in the next line

    const [friendList, setFriendList] = React.useState([]);

    In classes calling super(props) is calling the constructor
    of react.component. As well the state is an object.
    */
    constructor(props) {
        super(props);
        this.state = {friends: []};
    }

    fetchFriends() {
        fetch('data/friends.json')
        .then(response => {
            return response.json();
        })
        .then(friendsData => {
            /*
            The line in hooks

            setFriendList(friendsData);

            is essentially the same as the.setState except
            you don't have to pass an object in the hooks
            version because you can make the scope of your state
            smaller.
            */
            this.setState({friends: friendsData});
        });
    }

    /*
    The componentDidMount() equivalent in hooks is the same as
    below.

    React.useEffect(()=> {
        fetchFriends();
    }, [])
    */
    componentDidMount() {
        this.fetchFriends();
    }

    // the render method is going to be the same 
    render() {
        return (
            <ul style={friendListStyles}>
                {this.state.friends.map(friend => 
                    <li key={friend.email}><Friend friendData={friend}/></li>
                )}
            </ul>
        );
    }
};