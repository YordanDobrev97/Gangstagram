import React, { Component } from "react";
import StatusPosts from "./statusPosts";
import StatusFollowers from "./statusFollowers";
import StatusFollowing from "./statusFollowing";

class ProfileStatus extends Component {
  render() {
    return (
      <ul className="list-group m-md-3">
        <StatusPosts />
        <StatusFollowers />
        <StatusFollowing />
      </ul>
    );
  }
}

export default ProfileStatus;
