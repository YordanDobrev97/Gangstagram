import React, { Component, Fragment } from "react";
import { Button } from "@material-ui/core";

import Bio from "./Bio";
import Follow from "./Follow";
import Followers from "./Followers";
import Following from "./Following";

class ProfileStatus extends Component {
  render() {
    return (
      <Fragment>
        <Bio username={this.props.username} />
        <Follow />
        <Followers />
        <Following />
      </Fragment>
    );
  }
}

export default ProfileStatus;
