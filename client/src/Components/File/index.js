import React, { useState } from "react";
import { Box, Button } from "@material-ui/core";

function UploadFile() {
  const [image, setImage] = useState("");

  return (
    <Box marginTop={2}>
      <Button variant="contained" component="label">
        Upload File
        <input
          name="image"
          onChange={this.handleImage.bind(this)}
          type="file"
          hidden
        />
      </Button>

      <Box marginTop={2}>
        <Button
          onClick={this.createPost.bind(this)}
          color="secondary"
          variant="contained"
          component="label"
          style={{ borderRadius: 50, background: "orange" }}
        >
          Save
        </Button>
      </Box>

      <Box>
        <img src={this.state.image} />
      </Box>
    </Box>
  );
}

export default UploadFile;
