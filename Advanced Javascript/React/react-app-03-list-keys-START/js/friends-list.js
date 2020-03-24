// Create our friends list component

const FriendsList = (props) => {
    const [friendsList, setFriendsList] = React.useState([]);

    React.useEffect(() => {
        fetchFriends();
    }, [] )

    const fetchFriends = () => {
        fetch("data/friends.json").then((response) => {
            return response.json();
        }).then((friendsData) => {
            setFriendsList(friendsData)
        })
    }

    return (<ul>
        {
            friendsList.map((friend) => {
            return <li key={friend.email}>
                <Friend friendData={friend} />
            </li>
            })
        }
    </ul>);
}