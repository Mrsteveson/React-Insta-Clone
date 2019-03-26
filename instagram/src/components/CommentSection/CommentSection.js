import React from 'react';
import PropTypes from 'prop-types';
import Comment from './Comment';
import CommentInput from './CommentInput';

class CommentSection extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
        this.state = {
            comments: props.comments,
            comment: ''
        };
    }

    handleCommentChange = event => {
        this.setState({
            comment: event.target.value
        })
    }

    handleCommentSubmit = event => {
        event.preventDefault();

        this.setState({ 
            comments: [
                ...this.state.comments,
                {username: 'Waffle191',
                text: this.state.comment}
            ],
            comment: '',
        });
    }

    render() {
        return(
            <div>
                {this.state.comments && this.state.comments.map(comment => (
                    <Comment 
                        comment = {comment}
                    />
                ))}
                <CommentInput 
                    commentChange = {this.handleCommentChange}
                    commentSubmit = {this.handleCommentSubmit}
                    comment = {this.state.comment}
                />
            </div>
        )
    }

}

CommentSection.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            username: PropTypes.string,
            text: PropTypes.string
        })
    )
}


export default CommentSection;