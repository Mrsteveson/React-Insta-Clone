import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';

const Post = props => {
    return(
        <div className = 'postContainer'>
            <PostHeader dummy = {props.post}/>
            <div className = 'postImg'>
                <img src = {props.post.imageUrl} alt = 'post content'/>
            </div>
            <div className = 'action-icons'>
                <i className = "far fa-heart"></i>
                <i className = "far fa-comment"></i>
                <p>{props.likes}</p>
            </div>
            <CommentSection comments = {props.post.comments} />
        </div>
    )
}

export default Post;