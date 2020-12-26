import React, { Component, Fragment } from "react";
import Comment from "./comment";
import PostComment from "./postComment";

class Comments extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          <Comment postId={this.props.postId} />
        </ul>
      </Fragment>
    );
  }
}

export default Comments;
