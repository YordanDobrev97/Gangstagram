import React, { Component, Fragment } from "react";
import Cookies from "js-cookie";

class LikePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: this.props.postId,
      modal: false,
      users: [],
    };
  }

  componentDidMount() {
    //TODO...Show like users!
  }

  likePost = () => {
    const data = {
      postId: this.state.postId,
    };

    fetch("https://localhost:5001/api/posts/likePost", {
      method: "POST",
      headers: {
        "X-User-Token": Cookies.get("userId"),
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((result) => {});
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
        <button className="w-50 h-25 mx-auto d-block" onClick={this.likePost}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            fill="currentColor"
            className="bi bi-heart"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"
            />
          </svg>
        </button>
        <div className="text-center">
          <button className="w3-button w3-black" onClick={this.showLikeUsers}>
            Show likes
          </button>
        </div>

        <div
          style={{ display: this.state.modal ? "block" : "none" }}
          className="border border-primary"
        >
          <div className="container bg-light text-center">
            {this.state.users.length == 0
              ? "No have likes"
              : this.state.users.map((userObj) => {
                  console.log(userObj);
                  return <div>{userObj.username}</div>;
                })}
          </div>
        </div>
      </Fragment>
    );
  }
}

export default LikePost;
