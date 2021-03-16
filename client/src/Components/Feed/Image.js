import React from "react";
import { CardMedia } from "@material-ui/core";

function Image(props) {
  return <CardMedia image={props.image} component="img" style={props.styles} />;
}

export default Image;
