import React, { Fragment } from "react";
import ProfileImage from "./profileImage";
import ProfileSettings from "./profileSettings";
import ProfileStatus from "./profileStatus";
import Bio from "./profileBio";
import Posts from "../Post/all";
import "./style.css";

function Profile(props) {
  return (
    <Fragment>
      <header className="container bg-light">
        <div class="row">
          <div class="col-md-3 m-auto">
            <ProfileImage />
            <ProfileSettings />
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
