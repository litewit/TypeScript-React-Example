import * as React from 'react';


function Avatar(props: any) {
    return(
        <img className="Avatar"
        src={props.avatar}
        alt={props.name}
        />
    );
}

function UserInfo(props: any) {
    return(
        <div key={props.user.id} className="UserInfo">
            <Avatar avatar={props.user.avatar} name={props.user.name} />
            <div className="UserInfo-name">
                {props.user.name}
            </div>
            <div className="UserInfo-date">
                {props.user.createdAt}
            </div>
        </div>
    );
}

class UserListControl extends React.Component<any, any> {

    state: any;

    constructor(props: any) {
        super(props);
        this.state = {users: []};
    }

    componentDidMount() {
        fetch('http://5b24ffcd7557bd0014990103.mockapi.io/api/v1/items')
        .then(response => response.json())
        .then(data => {
          this.setState({ users: data })
        });
    }

    componentWillUnmount() {
        console.log('Item Controller unmounted');
    }


    public render() {
        const users = this.state.users
        const itemElements = users.map((user: any, key: any) => <UserInfo user={user} />);
        return (
            <div>
            {itemElements}
            </div>
        );
    }
}

export default UserListControl;
