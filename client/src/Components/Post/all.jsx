import React, { Component } from "react";
import Post from "./index";
import Create from "./create";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
    };
  }

  render() {
    const allPosts = this.state.posts.map((post) => {
      if (post.posts.length) {
        return (
          <div>
            <Post
              username={post.username}
              profileImg={post.profileImg}
              postData={post.posts}
              likes={post.likes}
            />
          </div>
        );
      }
    });

    return (
      <div>
        <Create />

        <div class="row mt-md-4 d-flex justify-content-center">
          <div class="card col-lg-2">
            <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Card image cap"
            />
          </div>

          <div class="card col-lg-2">
            <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Card image cap"
            />
          </div>

          <div class="card col-lg-2">
            <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Card image cap"
            />
          </div>

          <div class="card col-lg-2">
            <img
              class="card-img-top"
              src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
              alt="Card image cap"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
