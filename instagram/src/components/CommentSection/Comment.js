import React from 'react';
import PropTypes from 'prop-types';
import './Comment.css';

const Comment = props => {
    return (
        <div className = 'comments'>
            <p className = 'commentUser'>
                <button className = 'deleteBtn' id = {props.comment.id} onClick = {props.deleted}>x</button>
                <span>{props.comment.username}</span>{props.comment.text}
            </p>
        </div>
    )
}

Comment.propTypes = {
    comment: PropTypes.shape({
        text: PropTypes.string,
        username: PropTypes.string,
    })
}

export default Comment;