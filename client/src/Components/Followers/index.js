import React, { Component, Fragment } from "react";

import "./style.css";

class Follow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      followUser: this.props.username,
    };
  }

  follow = () => {
    console.log(this.state.followUser);
  };

  render() {
    return (
      <Fragment>
        <button id="follow-button" onClick={this.follow}>
          + Follow
        </button>
      </Fragment>
    );
  }
}

export default Follow;
