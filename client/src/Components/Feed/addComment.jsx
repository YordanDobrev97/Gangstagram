import React, { Component } from "react";

class AddComment extends Component {
  render() {
    return (
      <div class="photo__add-comment-container">
        <textarea name="comment" placeholder="Add a comment..."></textarea>
        <i class="fa fa-ellipsis-h"></i>
      </div>
    );
  }
}

export default AddComment;
