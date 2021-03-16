import React from "react";
import { Button } from "@material-ui/core";

function Followers() {
  return (
    <Button
      variant="outlined"
      color="secondary"
      style={{
        display: "block",
        margin: "5px auto",
        background: "#039603",
        color: "white",
      }}
    >
      Followers
    </Button>
  );
}

export default Followers;
