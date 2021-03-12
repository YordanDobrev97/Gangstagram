import { Box, Link } from "@material-ui/core";
import React, { Fragment } from "react";

export default function Details() {
  return (
    <Fragment>
      <Box component="div">
        <img
          width="320px"
          height="100px"
          src="https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg"
          style={{
            position: "absolute",
            top: "100px",
            left: "631px",
            height: "480px",
            width: "648px",
          }}
        />
      </Box>
      <Box component="aside" border={1} width="45%" height="500px">
        <Box component="div" margin="16px">
          <Box display="flex" marginTop="50px">
            <img
              width="50px"
              height="40px"
              src="https://www.lifestylesolutionsbyworldmark.com/img/global/icon-user.svg"
            />
            <Link href="#">
              <h2>Username</h2>
            </Link>
          </Box>
          <Box
            component="p"
            style={{
              display: "block",
              float: "left",
              marginLeft: "50px",
              marginTop: "2px",
            }}
          >
            Comment
          </Box>

          <Box display="flex" marginTop="50px">
            <img
              width="50px"
              height="40px"
              src="https://www.lifestylesolutionsbyworldmark.com/img/global/icon-user.svg"
            />
            <Link href="#">
              <h2>Username</h2>
            </Link>
          </Box>
          <Box
            component="p"
            style={{
              display: "block",
              float: "left",
              marginLeft: "50px",
              marginTop: "2px",
            }}
          >
            Comment
          </Box>

          <Box display="flex" marginTop="50px">
            <img
              width="50px"
              height="40px"
              src="https://www.lifestylesolutionsbyworldmark.com/img/global/icon-user.svg"
            />
            <Link href="#">
              <h2>Username</h2>
            </Link>
          </Box>
          <Box
            component="p"
            style={{
              display: "block",
              float: "left",
              marginLeft: "50px",
              marginTop: "2px",
            }}
          >
            Comment
          </Box>
        </Box>
      </Box>
    </Fragment>
  );
}
