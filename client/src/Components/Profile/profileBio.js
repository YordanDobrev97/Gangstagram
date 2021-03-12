import React from "react";

function Bio(props) {
  return (
    <ul class="meta list list-unstyled">
      <li class="name">{props.username}</li>
    </ul>
  );
}

export default Bio;
