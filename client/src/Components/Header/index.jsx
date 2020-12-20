import React from "react";
import { Link, Router } from "react-router-dom";
import history from "../../history";
import Search from "../Search/index";

import styles from "./style.module.css";

class Header extends React.Component {
  render() {
    return (
      <header>
        <nav className="navbar navbar-dark bg-dark navbar-toggler">
          <div>
            <img
              className="w-50"
              src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/logo.png"
            />
          </div>
          <Search message="Search users" />
        </nav>

        <div className="col-sm-1 bg-c-lite-green user-profile">
          <div className="card-block text-center text-white bg-white w-100">
            <div>
              <img
                src="https://img.icons8.com/bubbles/100/000000/user.png"
                className="img-radius w-50"
                alt="User-Profile-Image"
              />{" "}
            </div>
            <Router history={history}>
              <Link to="profile">My Profile</Link>
            </Router>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
