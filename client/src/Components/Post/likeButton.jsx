import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp } from "@fortawesome/free-solid-svg-icons";

class LikeButton extends Component {
  render() {
    return (
      <button>
        <div>
          <FontAwesomeIcon icon={faThumbsUp} />
        </div>
      </button>
    );
  }
}

export default LikeButton;
