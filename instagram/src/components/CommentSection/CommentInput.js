import React from 'react';

const CommentInput = props => {
    return (
        <div>
            <form onSubmit = {props.commentSubmit}>
                <input
                    className = 'commentInput'
                    type = 'text'
                    value = {props.comment}
                    placeholder = "Add a comment..."
                    onChange = {props.commentChange}
                />
            </form>
        </div>
    )
}

export default CommentInput;