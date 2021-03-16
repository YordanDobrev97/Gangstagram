import React from "react";
import { CardMedia } from "@material-ui/core";

function Image(props) {
  return <img src={props.image} style={props.styles} />;
}

export default Image;
