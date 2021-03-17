import React, { useState, useEffect, useCallback } from "react";
import { withRouter } from "react-router-dom";
import { Button } from "@material-ui/core";

import UserService from "../../Services/user";

function Follow(props) {
  const [isGetData, setData] = useState(false);
  const [isFollow, setFollow] = useState(false);

  useEffect(async () => {
    const followerId = props.match.params.userId;
    const result = await UserService.isFollow(followerId).then((r) => r.json());
    console.log(result);
    setData(true);
    setFollow(result);
  }, []);

  const followBtn = useCallback(async () => {
    const followerId = props.match.params.userId;
    const result = await UserService.follow(followerId).then((r) => r.json());

    if (result) {
      setFollow(true);
    }
  });

  if (!isGetData) {
    return <div>Loading...</div>;
  }

  if (isFollow) {
    return <React.Fragment></React.Fragment>;
  }

  return (
    <Button
      variant="outlined"
      color="primary"
      onClick={followBtn}
      style={{ display: "block", margin: "5px auto" }}
    >
      Follow
    </Button>
  );
}

export default withRouter(Follow);
