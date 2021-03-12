import React, { Component } from "react";
import Input from "../Input/input";
import Feeds from "../Feed/index";
import { Redirect } from "react-router-dom";
import LoginService from '../../Services/login';

import {Box} from '@material-ui/core'
import { Button } from '@material-ui/core';
import UserContext from '../../UserContext';

class Login extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isRedirect: false,
    }
  }

  static contextType = UserContext

  login = async () => {
    const email = this.state.email;
    const password = this.state.password;

    const result = await LoginService.login(email, password);
    if (result) {
      this.context[1]({
        username: email,
        isAuth: true
      })
      this.setState({
        isRedirect: true,
      })
    }
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const isLogged = this.state.isRedirect;

    if (isLogged) {
      return (
        <React.Fragment>
          <Redirect to="/feeds" />
          <Feeds />
        </React.Fragment>
      );
    }

    return (
      <form>
        <Box component="div" marginBottom={2}>
          <Input type="text" name="email" className="form-control input-sm" placeholder="email" onChange={this.getInputValue.bind(this)} />
        </Box>
        <Box component="div" marginBottom={2}>
          <Input type="password" name="password" className="form-control input-sm" placeholder="password" onChange={this.getInputValue.bind(this)} />
        </Box>
        <Box>
          <UserContext.Consumer>
            {(context) => {
              return (<Button color="primary" onClick={this.login.bind(this)}>
              Login <i className="fa fa-sign-in"></i>
            </Button>)
            }}
          </UserContext.Consumer>
        </Box>
      </form>
    );
  }
}

export default Login;
