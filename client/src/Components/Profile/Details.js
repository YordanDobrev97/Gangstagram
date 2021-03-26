import React from "react";
import { Link } from "react-router-dom";
import Image from "../Image/Index";
import styles from "./style.module.css";

function Details(props) {
  return (
    <React.Fragment>
      {props.isShow ? (
        <div className={styles["followers-container"]}>
          {props.users.map((obj) => {
            return (
              <div key={obj.id} className={styles["follower"]}>
                <Image
                  image={obj.image}
                  styles={{
                    width: "50px",
                    height: "40px",
                  }}
                />
                <Link to={obj.id}>{obj.username}</Link>
              </div>
            );
          })}
        </div>
      ) : (
        <React.Fragment></React.Fragment>
      )}
    </React.Fragment>
  );
}

export default Details;
