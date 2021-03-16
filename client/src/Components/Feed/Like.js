import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

import Cookies from "js-cookie";

import PostService from "../../Services/post";

class Like extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.postId,
      likes: this.props.likes,
    };
  }

  like = async () => {
    const data = {
      postId: this.state.postId,
    };

    const result = await PostService.like(data).then((r) => r.json());

    console.log(result);
    if (result) {
      this.setState({
        likes: this.state.likes + 1,
      });
    }
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
          <Link to="/likes">{this.state.likes}</Link> likes
        </span>
      </Fragment>
    );
  }
}

export default Like;
