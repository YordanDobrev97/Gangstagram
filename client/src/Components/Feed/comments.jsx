import React, { Component, Fragment } from "react";
import Comment from "./comment";
import AddComment from "./addComment";

class Comments extends Component {
  render() {
    return (
      <Fragment>
        <ul>
          <Comment />
        </ul>
      </Fragment>
    );
  }
}

export default Comments;
