import { Box, Link } from "@material-ui/core";
import React, { Fragment, useState, useEffect } from "react";
import PostService from "../../Services/post";
import Image from "./Image";

export default function Details(props) {
  const [postData, setPostData] = useState([]);
  const [isGetData, setData] = useState(false);

  useEffect(() => {
    PostService.getById(props.id)
      .then((r) => r.json())
      .then((data) => {
        setPostData(data);
        setData(true);
      });
  }, []);

  console.log(postData);

  if (!isGetData) {
    return <div>Loading...</div>;
  }

  return (
    <Fragment>
      <Box component="div">
        <Image
          image={postData.image}
          styles={{
            width: "320px",
            height: "100px",
            position: "absolute",
            top: "140px",
            left: "631px",
            height: "480px",
            width: "648px",
          }}
        />
      </Box>

      <Box component="aside" border={1} width="45%" height="500px">
        {postData.getByIdPosts.map((post) => {
          return (
            <Box component="div" margin="16px">
              <Box display="flex" marginTop="50px">
                <img
                  width="50px"
                  height="40px"
                  src="https://www.lifestylesolutionsbyworldmark.com/img/global/icon-user.svg"
                />
                <Link href="#">
                  <h2>{post.username}</h2>
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
                {post.content}
              </Box>
            </Box>
          );
        })}
      </Box>
    </Fragment>
  );
}
