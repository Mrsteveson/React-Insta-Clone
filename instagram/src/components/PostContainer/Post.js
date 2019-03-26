import React from 'react';
import CommentSection from '../CommentSection/CommentSection';
import PostHeader from './PostHeader';
import './Post.css';

const Post = props => {
    return(
        <div>
            <PostHeader dummy = {props.post}/>
            <div className = 'post-content'>
                <div className = 'postImg'>
                    <img className = 'imageUrl' src = {props.post.imageUrl} alt = 'post content'/>
                </div>
                <div >
                    <div className = 'action-icons'>
                        <i className = "far fa-heart"></i>
                        <i className = "far fa-comment"></i>
                    </div>
                    <span className = 'likes'>{props.likes} Likes</span>
                </div>
                <CommentSection comments = {props.post.comments} />
            </div>
        </div>
    )
}

export default Post;