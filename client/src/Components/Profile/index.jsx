import React, { Fragment, Component } from "react";
import ProfileImage from "./profileImage";
import ProfileSettings from "./profileSettings";
import ProfileStatus from "./profileStatus";
import Bio from "./profileBio";
import Posts from "../Post/all";
import Navigation from "../Navigation/index";
import history from "../../history";

import { Link } from "react-router-dom";

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
      <Fragment>
        <header className="container bg-light w-100">
          <Navigation />

          <Link to="/feeds">Feeds</Link>
          <div class="row">
            <div class="col-md-3 m-auto">
              <ProfileImage />
            </div>
            <div className="col-md-3 m-auto">
              <ProfileSettings username={this.state.username} />
            </div>
            <div className="col-md-3 m-auto">
              <ProfileStatus />
            </div>
            <Bio />
          </div>
          <Posts />
        </header>
      </Fragment>
    );
  }
}

export default Profile;
