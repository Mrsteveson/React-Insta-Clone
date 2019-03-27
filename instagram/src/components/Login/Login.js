import React from 'react';
import './Login.css';

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
            <div className = 'loginContainer'>
                <h1>Welcome to Patrick's FakeGram</h1>
                <form className = 'loginForm'>
                    <input 
                        className = 'loginInput'
                        type = 'text'
                        placeholder = 'Username'
                        value = {this.state.username}
                        onChange = {this.handleInputChange}
                        name = 'username'
                    /> 

                    <input 
                        className = 'loginInput'
                        type = 'text'
                        placeholder = 'Password'
                        value = {this.state.password}
                        onChange = {this.handleInputChange}
                        name = 'password'
                    />
                    <button onClick = {this.handleLogin}>Login</button>
                </form>
            </div>
            
        )
    }
}

export default Login;