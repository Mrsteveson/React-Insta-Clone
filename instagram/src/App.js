import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      filter: [],
    };
  }

  componentDidMount() {
    this.setState({ posts: dummyData})
  }

  handleSearch = event => {
    // console.log('hello');
    let filteredPosts = this.state.posts.filter(post => {
      if (post.username.includes(event.target.value)) {
        return post;
      }
    });

    this.setState({ filter: filteredPosts })
  };

  render() {
    return (
      <div className="App">
        <SearchBar
          search = {this.handleSearch} 
        />
        <PostContainer 
          dummy = {this.state.filter.length > 0 ? this.state.filter : this.state.posts} 
        />
      </div>
    );
  }
}

export default App;
