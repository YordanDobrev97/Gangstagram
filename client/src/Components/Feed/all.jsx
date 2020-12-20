import React, { Component } from "react";

import "./style.css";
import Avatar from "./avatar";
import PhotoAction from "./action";
import Comments from "./comments";

class Feed extends Component {
  render() {
    return (
      <div class="w-50 m-auto bg-light">
        <Avatar />

        <div class="text-center">
          <img
            className="w-50 h-25 mx-auto d-block"
            src="https://raw.githubusercontent.com/nomadcoders/vietgram/master/images/feedPhoto.jpg"
          />
        </div>

        <div>
          <PhotoAction />
          <Comments />
        </div>
      </div>
    );
  }
}

export default Feed;
