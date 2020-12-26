import React, { Component, Fragment } from "react";

import Avatar from "./avatar";
import LikePost from "./likePost";
import PostComment from "./comments";

class Feed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isLoading: false,
    };
  }

  async componentWillMount() {
    await fetch("https://localhost:5001/api/posts/all")
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        //console.log(data)
        this.setState({
          posts: data,
          isLoading: true,
        });
        Object.keys(this.state.posts).map((post) => {
          console.log(this.state.posts[post]);
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
          return (
            <div class="w-50 m-auto bg-light">
              <Avatar username={this.state.posts[index].username} />
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
