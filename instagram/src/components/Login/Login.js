import React from 'react';

class Login extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
    }

    handleInputChange = event => {
        this.setState({ 
            [event.target.name]: event.target.value
        });
    };

    handleLogin = event => {
        const username = this.state.username;

        localStorage.setItem('username', username);
        window.location.reload();
    };
    
    render(){
        return(
            <form className = 'loginForm'>
                <input 
                    className = 'loginUsername'
                    type = 'text'
                    placeholder = 'Username'
                    value = {this.state.username}
                    onChange = {this.handleInputChange}
                /> 

                <input 
                    className = 'loginPassword'
                    type = 'text'
                    placeholder = 'Password'
                    value = {this.state.password}
                    onChange = {this.handleInputChange}
                />
                <button onClick = {this.handleLogin}>Login!</button>
            </form>
        )
    }
}

export default Login;