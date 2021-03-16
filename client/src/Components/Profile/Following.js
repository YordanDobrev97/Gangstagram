import React from "react";
import { Button } from "@material-ui/core";

function Following() {
  return (
    <Button
      variant="outlined"
      color="secondary"
      style={{
        display: "block",
        margin: "5px auto",
        background: "#0043a9",
        color: "white",
      }}
    >
      Following
    </Button>
  );
}

export default Following;
