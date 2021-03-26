import React, { useState, useEffect, useCallback } from "react";
import { withRouter, useParams } from "react-router-dom";
import { Button } from "@material-ui/core";

import UserService from "../../Services/user";

function Follow() {
  const { userId } = useParams();

  const [isGetData, setData] = useState(false);
  const [isFollow, setFollow] = useState(false);

  useEffect(() => {
    UserService.isFollow(userId)
      .then((r) => r.json())
      .then((result) => {
        setData(true);
        setFollow(result);
      });
  }, []);

  const followBtn = useCallback(async () => {
    const result = await UserService.follow(userId).then((r) => r.json());

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
