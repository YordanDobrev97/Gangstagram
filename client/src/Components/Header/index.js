import React from "react";
import { Link, Router } from "react-router-dom";
import history from "../../history";
import Navigation from "../Navigation/index";

class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation />

        <div className="col-sm-1 bg-c-lite-green user-profile">
          <div className="card-block text-center text-white bg-white w-100">
            <div>
              <img
                src="https://img.icons8.com/bubbles/100/000000/user.png"
                className="img-radius w-50"
                alt="User-Profile-Image"
              />
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
