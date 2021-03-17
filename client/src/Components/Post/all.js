import React, { Component } from "react";

import Post from "./index";
import Create from "./create";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      headers: this.props.headers,
      isPosts: true,
      username: "",
    };
  }

  // async componentDidMount() {
  //   await fetch("https://localhost:5001/api/posts/getUserPosts", {
  //     headers: this.state.headers,
  //   })
  //     .then((r) => {
  //       return r.json();
  //     })
  //     .then((data) => {
  //       if (data.length == 0) {
  //         this.setState({
  //           isPosts: false,
  //         });
  //       } else {
  //         this.setState({
  //           posts: data.posts,
  //           username: data.username,
  //         });
  //       }
  //     })
  //     .catch((err) => {});
  // }

  getUsername = () => {
    this.props.onGetUsername(this.state.username);
  };

  render() {
    return <div>{this.props.children}</div>;
  }
}

export default Posts;
