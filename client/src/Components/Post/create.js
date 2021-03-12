import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Cookies from "js-cookie";

import {Box, Button, Input, TextField } from '@material-ui/core';
import PostService from '../../Services/post';

class CreatePost extends Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      description: '',
      image: '',
      created: false,
    };
  }

  createPost = async (e) => {
    const title = this.state.title;
    const description = this.state.description;
    const image = this.state.image;

    const result = await PostService.create(title, description, image);
    if (result) {
      this.setState({
        created: true
      })
    }
  };

  handleImage = (event) => {
    const image = event.target.files[0];
    const reader = new FileReader();
    const url = reader.readAsDataURL(image);
   
    reader.onloadend = function (e) {
      this.setState({
        image: reader.result,
      })
      const imageUrl = reader.result;
    }.bind(this);
  };

  render() {
    if (this.state.created) {
      return (<Redirect to='/feeds' />)
    }

    return (
     <form>
        <Box marginTop={3}>
          <Box borderColor="primary.main" color="text.primary" paddingBottom={2}>
            Create New Post
          </Box>

          <Box>
            <TextField onChange={(e) => {
              this.setState({
                title: e.target.value
              })
            }} name="title" label="Title" />
          </Box>

          <Box>
            <TextField onChange={(e) => {
              this.setState({
                description: e.target.value,
              })
            }} name="description" label="Description" />
          </Box>

          <Box marginTop={2}>
            <Button variant="contained" component="label">
              Upload File
              <input name="image" onChange={this.handleImage.bind(this)}
                type="file"
                hidden
              />
            </Button>

            <Box marginTop={2}>
              <Button onClick={this.createPost.bind(this)} color="secondary" variant="contained" component="label" style={{ borderRadius: 50,
              background: 'orange' }}>
                Save
              </Button>
            </Box>

            <Box>
              <img src={this.state.image}/>
            </Box>
        </Box>
      </Box>
     </form>
    );
  }
}

export default CreatePost;
