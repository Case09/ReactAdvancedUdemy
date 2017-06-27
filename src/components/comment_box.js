import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = {
      comment: ''
    };
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment-box"> 
        <h4>Add a comment</h4>
        <textarea 
          onChange={this.handleChange.bind(this)} 
          value={this.state.comment}></textarea>
        <div>
          <button action="submit">Submit Comment</button>
        </div>
      </form>
    );
  }

  handleChange(event) {
    this.setState({comment: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    this.props.saveComment(this.state.comment);
    this.setState({comment: ''});
  }
}

export default connect(null, actions)(CommentBox);
 