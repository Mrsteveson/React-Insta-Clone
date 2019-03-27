import React from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import Authenticate from './Authentication/Authenticate';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
  }

  
  render() {
    return (
      <div className="App">
        <button className = 'logoutBtn' onClick = {this.props.logout}>Logout</button>
        <PostsPage />
      </div>
    );
  }
}

export default Authenticate(App);
