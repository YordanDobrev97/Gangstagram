import React, { Component, Fragment } from "react";

import Avatar from "./avatar";
import FollowBtn from "../Followers/index";
import LikePost from "./likePost";
import PostComment from "./comments";

import Cookies from "js-cookie";
class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
    };
  }

  async componentWillMount() {
    await fetch("https://localhost:5001/api/posts/all", {
      headers: {
        "X-User-Token": Cookies.get("userId"),
        "Content-Type": "application/json",
      },
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        this.setState({
          posts: data,
          isLoading: true,
        });
      });
  }

  render() {
    if (!this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <Fragment>
        {Object.keys(this.state.posts).map((index) => {
          const username = this.state.posts[index].username;
          return (
            <div class="w-50 m-auto bg-light">
              <Avatar username={username} />
              <FollowBtn username={username} />
              <div class="text-center">
                <img
                  className="w-50 h-25 mx-auto d-block"
                  src={this.state.posts[index].image}
                />
              </div>

              <div>
                <LikePost postId={this.state.posts[index].id} />
                <PostComment postId={this.state.posts[index].id} />
              </div>
            </div>
          );
        })}
      </Fragment>
    );
  }
}

export default Feed;
