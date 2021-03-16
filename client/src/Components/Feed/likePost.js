import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import Cookies from "js-cookie";

class Like extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.postId,
      modal: false,
      users: [],
    };
  }

  like = () => {
    const data = {
      postId: this.state.postId,
    };

    // fetch("https://localhost:5001/api/posts/likePost", {
    //   method: "POST",
    //   headers: {
    //     "X-User-Token": Cookies.get("userId"),
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((r) => r.json())
    //   .then((result) => {});
  };

  showLikeUsers = () => {
    const { postId } = this.state;

    fetch("https://localhost:5001/api/posts/getLikeUsersPost", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ postId }),
    })
      .then((r) => r.json())
      .then((users) => {
        console.log(users);
        this.setState({
          users: users,
        });
        if (!this.state.modal) {
          this.setState({
            modal: true,
          });
        } else {
          this.setState({
            modal: false,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <Fragment>
        <Button
          variant="outlined"
          size="medium"
          color="secondary"
          style={{ margin: "4px" }}
          onClick={this.like}
        >
          <img src="https://img.icons8.com/office/16/000000/filled-like--v2.png" />
        </Button>

        <span>
          <Link to="/likes">345</Link> likes
        </span>
      </Fragment>
    );
  }
}

export default Like;
