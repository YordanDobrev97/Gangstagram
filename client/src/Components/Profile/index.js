import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { Box, Button, Grid } from "@material-ui/core";
import ProfileService from "../../Services/profile";

import ProfileImage from "./profileImage";
import CreatePost from "../Post/create";

import Bio from "./profileBio";
import Posts from "../Post/all";
import Navigation from "../Navigation/index";

import "./style.css";

import Cookies from "js-cookie";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: null,
      isLoading: false,
    };
  }

  async componentDidMount() {
    const userId = Cookies.get("userId");
    const data = await ProfileService.getUserPosts(userId).then((r) =>
      r.json()
    );

    this.setState({
      posts: data,
      isLoading: true,
    });
  }

  async remove(id) {
    const result = await ProfileService.removeById(id).then((r) => r.json());

    console.log(result);
    if (result) {
      this.setState((prevState) => ({
        posts: prevState.posts.filter((el) => el.id != id),
      }));
    }
  }

  hasSearching() {
    return window.location.href.includes("/profile?username=");
  }

  render() {
    if (!this.state.isLoading) {
      return <div className="loading-container">Loading...</div>;
    }

    console.log(this.state.posts);
    return (
      <Box
        display="flex"
        style={{
          background: "grey",
          margin: "20px",
          width: "20%",
        }}
      >
        <Box>
          <img
            style={{ margin: "14px 50px", width: "150px", height: "110px" }}
            src="https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
          />

          <Button
            style={{ margin: "8px", background: "#80D7EA", color: "white" }}
          >
            Change Image
          </Button>
        </Box>

        <Box>
          <Box display="flex">
            {this.state.posts.map((post) => {
              const link = `/delete:id${post.id}`;
              return (
                <Box key={post.id} style={{ height: "150px" }}>
                  <img
                    style={{ margin: "18px", width: "200px", height: "150px" }}
                    src={post.image}
                  />
                  <Button
                    onClick={this.remove.bind(this, post.id)}
                    style={{ margin: "8px", background: "white" }}
                    color="secondary"
                  >
                    Delete
                  </Button>
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default Profile;
