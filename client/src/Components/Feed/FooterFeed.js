import React, { Fragment } from "react";
import { Typography } from "@material-ui/core";

import Like from "./Like";

function FooterFeed(props) {
  return (
    <Fragment>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        style={{
          borderStyle: "groove",
          padding: "8px",
          width: "50%",
          margin: "auto",
        }}
      >
        {props.content}
      </Typography>

      <Like likes={props.likes} postId={props.postId} />
    </Fragment>
  );
}

export default FooterFeed;
