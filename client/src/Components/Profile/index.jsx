import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";

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
      posts: [],
      isLoading: false,
    };
  }

  async componentDidMount() {
    let headers = {};
    if (this.hasSearching()) {
      headers = {
        "X-Username": this.props.history.location.state.username,
      };
      this.setState({
        isLoading: true,
      });
    } else {
      headers = {
        "X-User-Token": Cookies.get("userId"),
      };
      this.setState({
        isLoading: true,
      });
    }

    await fetch("https://localhost:5001/api/posts/getUserPosts", {
      method: "POST",
      headers: headers,
    })
      .then((r) => {
        return r.json();
      })
      .then((data) => {
        if (!data) {
          this.setState({
            isLoading: false,
          });
        } else {
          this.setState({
            username: data.username,
            posts: data.posts,
            isLoading: true,
          });
        }
      })
      .catch((err) => {});
  }

  hasSearching() {
    return window.location.href.includes("/profile?username=");
  }

  render() {
    if (!this.state.isLoading) {
      return <div className="loading-container">Loading...</div>;
    }

    return (
      <div class="container">
        <Navigation />
        <div class="view-account">
          <section class="module">
            <Link to="/feeds">Feeds</Link>
            <div class="module-inner">
              <div class="side-bar">
                <div class="user-info">
                  <ProfileImage />
                  <Bio username={this.state.username} />
                </div>
              </div>

              <div className="content-panel">
                {this.hasSearching() ? (
                  <Fragment></Fragment>
                ) : (
                  <div className="content-header-wrapper">
                    <CreatePost />
                  </div>
                )}

                <div className="drive-wrapper drive-grid-view">
                  <div className="grid-items-wrapper">
                    <div className="drive-item module text-center">
                      <Posts>
                        {Object.keys(this.state.posts).map((index) => {
                          console.log(this.state.posts[index]);
                          return (
                            <img
                              width="150"
                              height="140"
                              src={this.state.posts[index].image}
                            />
                          );
                        })}
                      </Posts>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    );
  }
}

export default Profile;
