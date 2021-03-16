import React from "react";
import { Link } from "react-router-dom";
import { Avatar, Box } from "@material-ui/core";

function UserAvatar(props) {
  return (
    <Box component="span">
      <Avatar
        style={{ float: "left" }}
        alt="user avatar"
        src={props.profileUserImage}
      />
      <Link to={"/profile/" + props.userId} style={{ float: "left" }}>
        {props.username}
      </Link>
    </Box>
  );
}

export default UserAvatar;
