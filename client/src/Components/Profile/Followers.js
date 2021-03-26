import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { Button } from "@material-ui/core";
import Details from "./Details";
import UserService from "../../Services/user";

function Followers(props) {
  const { userId } = useParams();
  const [isShowFollowers, setShowFollowers] = useState(false);
  const [followUsers, setFollowers] = useState([]);

  const showFollowers = async () => {
    setShowFollowers(!isShowFollowers);

    if (!isShowFollowers) {
      const followers = await UserService.getFollowers(userId).then((r) =>
        r.json()
      );
      console.log(followers);
      setFollowers(followers);
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
          background: "#039603",
          color: "white",
        }}
        onClick={showFollowers}
      >
        Followers
      </Button>

      <Details isShow={isShowFollowers} users={followUsers} />
    </React.Fragment>
  );
}

export default Followers;
