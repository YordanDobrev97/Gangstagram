import React, { Component } from "react";
import { Link } from "react-router-dom";
import Input from "../Input/input";

class Register extends Component {

  register = () => {
    const email = this.state.email;
    const username = this.state.username;
    const password = this.state.password;
    const repeatPassword = this.state.repeatPassword;

    if (password !== repeatPassword) {
      return;
    }

    const data = JSON.stringify({
      email,
      username,
      password,
    });
    console.log(data);
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Credentials": true,
      },
      body: data,
    };

    fetch("https://localhost:5001/api/users/Register", requestOptions)
      .then((res) => res.json())
      .catch((err) => {
        console.log(err);
      })
      .then((data) => {
        console.log(data);
      });
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div>Register page</div>
      // <div className="row mt-lg-5">
      //   <div className="col-md-offset-5 col-md-4 text-center m-md-auto">
      //     <Input
      //       type="text"
      //       name="email"
      //       placeholder="Email"
      //       onChange={this.getInputValue.bind(this)}
      //     />

      //     <Input
      //       type="text"
      //       name="username"
      //       placeholder="Username"
      //       onChange={this.getInputValue.bind(this)}
      //     />

      //     <div>
      //       <Input
      //         type="password"
      //         name="password"
      //         placeholder="Password"
      //         onChange={this.getInputValue.bind(this)}
      //       />
      //     </div>
      //     <div>
      //       <Input
      //         type="password"
      //         name="repeatPassword"
      //         placeholder="repeatPassword"
      //         onChange={this.getInputValue.bind(this)}
      //       />
      //     </div>

      //     <Link to="/login">
      //       <button
      //         type="submit"
      //         className="standart-btn"
      //         onClick={this.register}
      //       >
      //         Register
      //       </button>
      //     </Link>
      //   </div>
      // </div>
    );
  }
}

export default Register;
