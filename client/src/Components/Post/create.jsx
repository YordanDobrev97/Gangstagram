import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Input from "../Input/input";
import Cookies from "js-cookie";

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
          return <Redirect to="/feeds" />;
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
      <div className="container">
        <div className="row border w-50">
          <div className="col-md-offset-3 col-md-6 m-auto">
            <label htmlFor="formFileSm" className="form-label">
              Create post
            </label>
            <button onClick={this.createPost.bind(this)}>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>

            <input
              className="form-control form-control-sm"
              type="file"
              name="image"
              onChange={this.handleImage.bind(this)}
            />

            <Input
              className="form-control text-dark"
              type="text"
              name="content"
              placeholder="Write something"
              onChange={this.getInputValue.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
