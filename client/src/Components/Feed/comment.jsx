import React, { Component, Fragment } from "react";
import Cookies from "js-cookie";

import Input from "../Input/input";

class Comment extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.postId,
      comment: "Empty",
    };
  }

  addComment = () => {
    const data = {
      postId: this.state.postId,
      comment: this.state.comment,
    };

    fetch("https://localhost:5001/api/posts/addComment", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "X-User-Token": Cookies.get("userId"),
        "Content-Type": "application/json",
      },
    })
      .then((r) => r.json())
      .then((result) => {
        console.log(result);
      });
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Fragment>
        <div class="bg-light p-2">
          <div class="d-flex flex-row align-items-start bg-dark">
            <Input
              type="text"
              name="comment"
              placeholder="Add your comment"
              onChange={this.getInputValue.bind(this)}
            />
          </div>
          <div class="mt-2 text-right">
            <input hidden="true" value={this.props.postId} />
            <button
              class="btn btn-primary btn-sm shadow-none"
              onClick={this.addComment}
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

export default Comment;
