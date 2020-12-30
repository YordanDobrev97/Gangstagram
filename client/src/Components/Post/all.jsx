import React, { Component } from "react";
import Cookies from "js-cookie";

import Post from "./index";
import Create from "./create";

class Posts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      isPosts: true,
    };
  }

  async componentDidMount() {
    await fetch("https://localhost:5001/api/posts/getUserPosts", {
      headers: {
        "X-User-Token": Cookies.get("userId"),
      },
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (data.length == 0) {
          this.setState({
            isPosts: false,
          });
        } else {
          this.setState({ posts: data });
        }
      })
      .catch((err) => {});
  }

  render() {
    if (!this.state.isPosts) {
      return (
        <React.Fragment>
          <Create />
          <div>No have posts!</div>
        </React.Fragment>
      );
    }

    if (this.state.posts.length == 0) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        {/* <Create /> */}

        <div className="row mt-md-4 d-flex justify-content-center">
          {Object.keys(this.state.posts).map((index) => {
            console.log(this.state.posts[index]);
            return (
              <div className="col-sm-6 col-md-4 col-lg-3 item">
                <img
                  width="100"
                  height="100"
                  src={this.state.posts[index].image}
                  alt="Card image cap"
                />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Posts;
