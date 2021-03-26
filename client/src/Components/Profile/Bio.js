import React from "react";

function Bio(props) {
  return (
    <p style={{ width: "130px", margin: "auto" }}>
      Welcome to my profile, I am {props.username}
    </p>
  );
}

export default Bio;
