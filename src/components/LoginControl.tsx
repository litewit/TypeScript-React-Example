import * as React from 'react';

function UserGreeting(props: any) {
    return <h1>Welcome back!</h1>;
}

function GuestGreeting(props: any) {
    return <h1>Please sign up.</h1>;
}

function Greeting(props: any) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props: any) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

function AuthButton(props: any) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <LogoutButton onClick={props.onLogoutClick} />;
    } else {
        return <LoginButton onClick={props.onLoginClick} />;
    }
}

class LoginControl extends React.Component {
    
    state:any;

    constructor(props: any) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false})
    }

    public render() {
        const isLoggedIn = this.state.isLoggedIn;
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn} />
                <AuthButton onLogoutClick={this.handleLogoutClick} onLoginClick={this.handleLoginClick} isLoggedIn={isLoggedIn} />
            </div>
        );
    }
}

export default LoginControl;
