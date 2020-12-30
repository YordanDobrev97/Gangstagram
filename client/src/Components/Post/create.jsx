import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../Input/input";
import Cookies from "js-cookie";

import history from "../../history";
import "./create.css";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    };
  }

  createPost = (e) => {
    const content = this.state.content;
    const image = this.state.image;

    const reader = new FileReader();
    reader.onload = (x) => {
      const formData = new FormData();
      formData.append("Image", image);
      formData.append("Content", content);

      const options = {
        method: "POST",
        headers: {
          "X-User-Token": Cookies.get("userId"),
        },
        body: formData,
      };

      fetch("https://localhost:5001/api/posts/create", options)
        .then((r) => r.json())
        .then((r) => {
          history.push("/profile", { username: this.state.username });
          return <Redirect to="/profile" />;
        });
    };
    reader.readAsArrayBuffer(image);
  };

  handleImage = (event) => {
    this.setState({
      image: event.target.files[0],
    });
  };

  getInputValue = (name, value) => {
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <div className="create-form">
        <label htmlFor="formFileMd">Create post</label>
        <button onClick={this.createPost.bind(this)}>
          <i className="fa fa-plus" aria-hidden="true"></i>
        </button>

        <input
          className="form-control form-control-md w-50"
          type="file"
          name="image"
          onChange={this.handleImage.bind(this)}
        />

        <Input
          className="input-post"
          type="text"
          name="content"
          placeholder="Write something"
          onChange={this.getInputValue.bind(this)}
        />
      </div>
    );
  }
}

export default CreatePost;
