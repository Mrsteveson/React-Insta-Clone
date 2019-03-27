import React from 'react';
import Login from '../components/Login/Login';

const Authenticate = App => 
    class extends React.Component {
        constructor(){
            super();
            this.setState = {
                loggedIn: false,
            };
        }

        componentDidMount() {
            if(!localStorage.getItem('username')) {
                this.setState({ loggedIn: false });
            }

            else {
                this.setState({ loggedIn: true });
            }
        } 

        render() {
            // if(this.state.loggedIn === true) return <App />;
            // return <App />
            return <Login />;
        }

    };

   
export default Authenticate;