import React from 'react';

const CommentInput = props => {
    return (
        <div>
            <form>
                <input
                    className = 'commentInput'
                    type = 'text'
                    placeholder = "Add a comment..."
                />
            </form>
        </div>
    )
}

export default CommentInput;