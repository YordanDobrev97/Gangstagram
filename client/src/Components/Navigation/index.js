import React, { Component, Fragment } from "react";
import Search from "../Search/index";

class Navigation extends Component {
  render() {
    return (
      <Fragment>
        <nav className="navbar navbar-dark bg-dark navbar-toggler">
          <div>
            <img
              className="w-50"
              src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/logo.png"
            />
          </div>
          <Search message="Search users" />
        </nav>
      </Fragment>
    );
  }
}

export default Navigation;
