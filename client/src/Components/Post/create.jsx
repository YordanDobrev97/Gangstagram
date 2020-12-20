import React, { Component } from "react";
import Input from "../Input/input";

import "./create.css";

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      image: null,
    };
  }

  createPost = (e) => {
    e.preventDefault();

    const content = this.state.content;
    const image = this.state.image;

    const resultImage = new FormData();
    resultImage.append("postImage", image);

    const data = {
      content: content,
      image: resultImage,
    };

    const options = {
      method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      body: data,
    };

    fetch("https://localhost:5001/api/posts/create", options)
      .then((r) => r.json())
      .then((r) => console.log(r));
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
        <div className="row m-auto">
          <div className="col-md-offset-3 col-md-6 col-xs-12 m-auto">
            <button>
              <i className="fa fa-plus" aria-hidden="true"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default CreatePost;
