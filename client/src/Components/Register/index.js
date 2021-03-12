import React, { Component } from "react";
import  { Redirect } from 'react-router-dom'
import Input from "../Input/input";
import RegisterService from '../../Services/register';

import {Box} from '@material-ui/core'
import { Button } from '@material-ui/core';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRegistered: false,
    }
  }

  register = async () => {
    const email = this.state.email;
    const username = email;
    const password = this.state.password;
    const repeatPassword = this.state.repeatPassword;

    const result = await RegisterService.register(username, email, password, repeatPassword);
    console.log(result);
    this.setState({
      isRegistered: result
    });
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {

    if (this.state.isRegistered) {
      return <Redirect to='/login' />
    }

    return (
      <form>
        <Box component="div" marginBottom={2}>
          <Input type="text" name="email" className="form-control input-sm" placeholder="email" onChange={this.getInputValue.bind(this)} />
        </Box>
        <Box component="div" marginBottom={2}>
          <Input type="password" name="password" className="form-control input-sm" placeholder="password" onChange={this.getInputValue.bind(this)} />
        </Box>
        <Box component="div" marginBottom={2}>
          <Input type="password" name="repeatPassword" className="form-control input-sm" placeholder="repeat password" onChange={this.getInputValue.bind(this)} />
        </Box>
        <Box>
          <Button color="primary" onClick={this.register.bind(this)}>
            Register <i className="fa fa-sign-in"></i>
          </Button>
        </Box>
      </form>
    );
  }
}

export default Register;
