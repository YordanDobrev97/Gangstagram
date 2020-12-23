import React, { Component } from "react";
import Input from "../Input/input";
import Cookies from "universal-cookie";
import Feeds from "../Feed/index";
import { Redirect } from "react-router-dom";

const cookies = new Cookies();
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLooged: false,
      errorEmail: "",
      errorPassword: "",
      validUser: "",
      user: cookies.get("userId"),
    };
  }

  login = () => {
    const email = this.state.email;
    const password = this.state.password;

    console.log(email, password);
    if (!email) {
      this.setState({
        errorEmail: "email is required",
        email: "",
      });
      return false;
    }

    if (!password) {
      this.setState({
        errorPassword: "password is required",
        password: "",
      });
      return false;
    }

    const data = JSON.stringify({
      email,
      password,
    });
    console.log(data);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: data,
    };

    fetch("https://localhost:5001/api/users/Login", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((userId) => {
        //24*60*60 (1 day or 24Hrs)
        console.log(userId);
        cookies.set("userId", userId, { maxAge: 24 * 60 * 60 });
        this.setState({
          isLooged: true,
        });
      })
      .catch((result) => {
        this.setState({
          validUser: "not valid data",
        });
      });

    return true;
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    const isLooged = cookies.get("userId");

    if (isLooged) {
      return (
        <React.Fragment>
          <Redirect to="/feeds" />
          <Feeds />
        </React.Fragment>
      );
    }

    return (
      <div className="row mt-lg-5">
        <div className="col-md-offset-5 col-md-4 text-center m-md-auto">
          <h1 className="text-white">Welcome to my version of Instagram</h1>
          <div className="form-login">
            <h4>Login</h4>
            <Input
              type="text"
              name="email"
              className="form-control input-sm chat-input"
              placeholder="email"
              onChange={this.getInputValue.bind(this)}
            />
            <Input
              type="password"
              name="password"
              className="form-control input-sm chat-input"
              placeholder="password"
              onChange={this.getInputValue.bind(this)}
            />
            <div className="wrapper">
              <span className="group-btn">
                <button
                  className="btn btn-danger btn-md"
                  onClick={this.login.bind(this)}
                >
                  Login <i className="fa fa-sign-in"></i>
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
