import React, { Component } from "react";
import Input from "../Input/input";
import Profile from "../Profile/index";
import { Redirect } from "react-router-dom";
import history from "../../history";

class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      hasUsername: false,
    };
  }

  searchUser = (e) => {
    e.preventDefault();
    const { username } = this.state;

    const data = {
      username,
    };

    fetch("https://localhost:5001/api/users/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
      redirect: "follow",
    })
      .then((r) => r.json())
      .then((result) => {
        this.setState({
          username: result.username,
          hasUsername: true,
        });

        history.push("/profile", { username: this.state.username });
        return <Redirect to="/profile" />;
      });
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <form className="form-inline">
          <Input
            className="form-control mr-sm-2"
            type="search"
            name="username"
            placeholder={this.props.message}
            aria-label="Search"
            onChange={this.getInputValue.bind(this)}
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
            onClick={this.searchUser}
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Search;
