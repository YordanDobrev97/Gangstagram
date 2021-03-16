import React, { Component, Fragment } from "react";
import { withRouter } from "react-router-dom";

import { Box, Button } from "@material-ui/core";
import ProfileService from "../../Services/profile";

import Image from "../Image/Index";
import Bio from "./profileBio";

import Cookies from "js-cookie";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: this.props.userId,
      isReadToken: this.props.isReadToken,
      posts: null,
      isLoading: false,
      isPersonalProfile: this.props.location.pathname.startsWith("/myProfile"),
    };
  }

  async componentDidMount() {
    console.log(this.state.isPersonalProfile);
    const data = await ProfileService.getUserPosts(
      this.state.userId,
      this.state.isReadToken
    ).then((r) => r.json());

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

    return (
      <Box display="flex">
        <Box>
          <Image
            image={
              "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-image-182145777.jpg"
            }
            styles={{ width: "150px", margin: "30px" }}
          />
          {this.state.isPersonalProfile ? (
            <Button
              style={{
                background: "#80D7EA",
                color: "white",
                display: "block",
                marginLeft: "30px",
              }}
            >
              Change Image
            </Button>
          ) : (
            <Fragment></Fragment>
          )}
        </Box>

        <Box>
          <Box display="flex">
            {this.state.posts.map((post) => {
              const link = `/delete:id${post.id}`;
              return (
                <Box key={post.id} style={{ height: "50px" }}>
                  <Image
                    image={post.image}
                    styles={{
                      width: "200px",
                      height: "180px",
                      marginTop: "20px",
                      marginLeft: "40px",
                    }}
                  />
                  {this.state.isPersonalProfile ? (
                    <Button
                      onClick={this.remove.bind(this, post.id)}
                      style={{
                        display: "block",
                        margin: "8px auto",
                        background: "white",
                      }}
                      color="secondary"
                    >
                      Delete
                    </Button>
                  ) : (
                    <Fragment></Fragment>
                  )}
                </Box>
              );
            })}
          </Box>
        </Box>
      </Box>
    );
  }
}

export default withRouter(Profile);
