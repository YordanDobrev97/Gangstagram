import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Button } from "@material-ui/core";
import Details from "./Details";
import UserService from "../../Services/user";

function Following() {
  const { userId } = useParams();
  const [isShowFollowing, setShowFollowing] = useState(false);
  const [followUsers, setFollowing] = useState([]);

  const showFollowing = async () => {
    setShowFollowing(!isShowFollowing);

    if (!isShowFollowing) {
      const following = await UserService.getFollowing(userId).then((r) =>
        r.json()
      );
      setFollowing(following);
    }
  };

  return (
    <React.Fragment>
      <Button
        variant="outlined"
        color="secondary"
        style={{
          display: "block",
          margin: "5px auto",
          background: "#0043a9",
          color: "white",
        }}
        onClick={showFollowing}
      >
        Following
      </Button>

      <Details isShow={isShowFollowing} users={followUsers} />
    </React.Fragment>
  );
}

export default Following;
