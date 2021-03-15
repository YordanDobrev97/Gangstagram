import React, { Component } from "react";
import { Link, Route, Switch, BrowserRouter as Router } from "react-router-dom";

import { Container } from "@material-ui/core";

import UserContext from "../../UserContext";

import Cookies from "universal-cookie";
const cookies = new Cookies();

class Home extends Component {
  static contextType = UserContext;

  render() {
    return (
      <Container maxWidth="lg">
        <h1>
          Welcome to Gangstagram, custom version of
          <span className="instagram">Instagram</span>
        </h1>
        <h2>Build with React.js and ASP.NET Core (Web API)</h2>
        <p className="message">
          Log in to your account, if you do not have an account register
        </p>
        <img
          width="420"
          height="280"
          src="https://www.tapeteos.pl/data/media/943/big/instagram_010_social_media__logo.jpg"
        />
      </Container>
    );
  }
}

export default Home;
