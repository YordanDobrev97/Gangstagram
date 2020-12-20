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

  async componentDidMount() {
    const data = await fetch("http://localhost:3001/user/all").then((r) =>
      r.json()
    );
    this.setState({
      posts: data,
    });
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

        {/* {allPosts} */}
      </div>
    );
  }
}

export default Posts;
