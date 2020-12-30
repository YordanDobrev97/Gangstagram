import React, { Component } from "react";
import { Link } from "react-router-dom";

import ProfileImage from "./profileImage";
import CreatePost from "../Post/create";

import Bio from "./profileBio";
import Posts from "../Post/all";
import Navigation from "../Navigation/index";

import "./style.css";

class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: this.props.history.location.state
        ? this.props.history.location.state.username
        : "Default username",
    };
  }

  render() {
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
                <div className="content-header-wrapper">
                  <CreatePost />
                </div>

                <div className="drive-wrapper drive-grid-view">
                  <div className="grid-items-wrapper">
                    <div className="drive-item module text-center">
                      <Posts />
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
