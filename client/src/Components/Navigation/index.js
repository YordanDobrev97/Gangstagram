import React, { Component, Fragment } from "react";
import { Redirect } from "react-router-dom";

import { AppBar, Box, Button } from "@material-ui/core";
import UserContext from "../../UserContext";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClickCreatePost: false,
      isClickLogout: false,
    };
  }
  static contextType = UserContext;

  logout = () => {
    this.context[1]({
      username: null,
      isAuth: false,
    });

    console.log(this.context);

    document.cookie =
      "userId" + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    this.setState({
      isClickLogout: true,
    });
  };

  createPost = () => {
    this.setState({
      isClickCreatePost: true,
    });
  };

  render() {
    if (this.state.isClickLogout) {
      return <Redirect to="/" />;
    }

    if (this.state.isClickCreatePost) {
      return <Redirect to="/createPost" />;
    }

    return (
      <Fragment>
        <AppBar display="flex" mb={4} position="static" color="transparent">
          <Box>
            <h1>
              <a href={this.context[0].isAuth ? "/feeds" : "/"}>Gangstagram</a>
            </h1>
            {this.context[0].isAuth ? (
              <p>Hello, {this.context[0].username}</p>
            ) : (
              <React.Fragment></React.Fragment>
            )}
          </Box>

          {this.context[0].isAuth ? (
            <Box textAlign="center">
              <Button
                href="/myProfile"
                style={{ Width: "50px", float: "left", marginBottom: "10px" }}
                variant="contained"
                color="primary"
                component="button"
              >
                My Profile
              </Button>

              <Button
                onClick={this.createPost.bind(this)}
                style={{ Width: "50px" }}
                variant="contained"
                color="primary"
                component="button"
              >
                Add Post
              </Button>

              <Button
                onClick={this.logout.bind(this)}
                style={{ Width: "50px", float: "right" }}
                variant="contained"
                color="secondary"
                component="button"
              >
                Logout
              </Button>
            </Box>
          ) : (
            <Fragment>
              <Box>
                <Button
                  fullWidth={false}
                  size="medium"
                  color="primary"
                  href="/register"
                >
                  Register
                </Button>
              </Box>
              <Box>
                <Button
                  fullWidth={false}
                  size="medium"
                  color="primary"
                  href="/login"
                >
                  Login
                </Button>
              </Box>
            </Fragment>
          )}
        </AppBar>
      </Fragment>
    );
  }
}

export default Navigation;
