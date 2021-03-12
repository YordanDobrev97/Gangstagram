import React, { Component, Fragment } from "react";

class PostComment extends Component {
  postComment = () => {};

  render() {
    return (
      <Fragment>
        <div class="bg-light p-2">
          <div class="d-flex flex-row align-items-start bg-dark">
            <textarea class="form-control ml-1 shadow-none"></textarea>
          </div>
          <div class="mt-2 text-right">
            <button
              class="btn btn-primary btn-sm shadow-none"
              onClick={this.postComment}
              type="button"
            >
              Post comment
            </button>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default PostComment;
