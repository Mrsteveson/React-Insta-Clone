import React from 'react';
import './Post.css';

const PostHeader = props => {
    return(
        <div className = 'postHeader'>
            <div>
                <img className = 'userThumbnail' src = {props.dummy.thumbnailUrl} alt = 'user thumbnail'/>
            </div>
            <div className = 'header-username'>
                {props.dummy.username}
            </div>
        </div>
    )
}

export default PostHeader;