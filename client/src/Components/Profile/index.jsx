import React, { Fragment } from "react";
import ProfileImage from "./profileImage";
import ProfileSettings from "./profileSettings";
import ProfileStatus from "./profileStatus";
import Bio from "./profileBio";
import Posts from "../Post/all";
import Navigation from "../Navigation/index";

function Profile(props) {
  return (
    <Fragment>
      <header className="container bg-light w-100">
        <Navigation />

        <a href="/feeds">Feeds</a>
        <div class="row">
          <div class="col-md-3 m-auto">
            <ProfileImage />
          </div>
          <div className="col-md-3 m-auto">
            <ProfileSettings />
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

export default Profile;
