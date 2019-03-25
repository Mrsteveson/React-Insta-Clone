import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostsContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: dummyData
    };
  }

  render() {
    return (
      <div className="App">
        <SearchBar />
        <PostsContainer dummy = {this.state.posts} />
      </div>
    );
  }
}

export default App;
