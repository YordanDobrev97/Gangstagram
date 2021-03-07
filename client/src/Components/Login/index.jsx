import React, { Component } from "react";
import Input from "../Input/input";
import Cookies from "universal-cookie";
import Feeds from "../Feed/index";
import { Redirect } from "react-router-dom";
import LoginService from '../../Services/login';
import { UserProvider } from '../../UserContext';

import {Box} from '@material-ui/core'
import { Button } from '@material-ui/core';

const cookies = new Cookies();

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
    };
  }

  login = async () => {
    const email = this.state.email;
    const password = this.state.password;

    const result = await LoginService.login(email, password);    
    this.setState({
      isLooged: result,
    });
    this.props.isLogged(result);
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const isLooged = this.state.isLooged;

    if (isLooged) {
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
          <Button color="primary" onClick={this.login.bind(this)}>
            Login <i className="fa fa-sign-in"></i>
          </Button>
        </Box>
      </form>
    );
  }
}

export default Login;
