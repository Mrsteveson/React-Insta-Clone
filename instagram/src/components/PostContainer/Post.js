import React from 'react';
import PropTypes from 'prop-types';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';


class Post extends React.Component {
    constructor(props) {
        super(props);
       this.state = {
           likes: 0,
       }
    }
   componentDidMount() {
       this.setState({
           likes: this.props.likes
       })

   } 

    addALike = () => {
        let likes = this.state.likes;
        this.setState({
            likes: likes + 1
        })
    }

    render() {
        return(
            <div>
                <PostHeader dummy = {this.props.post}/>
                <div className = 'post-content'>
                    <div className = 'postImg'>
                        <img className = 'imageUrl' src = {this.props.post.imageUrl} alt = 'post content'/>
                    </div>
                    <div >
                        <div className = 'action-icons'>
                            <i className ={"far fa-heart"} onClick = { this.addALike }></i>
                            <i className = "far fa-comment"></i>
                        </div>
                        <span className = 'likes'>{this.state.likes} likes</span>
                    </div>
                    <CommentSection comments = {this.props.post.comments} />
                </div>
            </div>
        )
    }
    
}

Post.propTypes = {
    post: PropTypes.shape({
        thumbnailUrl: PropTypes.string,
        username: PropTypes.string,
        text: PropTypes.string
    })
}

export default Post;