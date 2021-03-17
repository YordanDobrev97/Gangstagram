import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import LikeButton from "./likeButton";

function Post(props) {
  return (
    <div>
      <main>
        {props.postData.map((data) => {
          return (
            <div>
              <img src={data.imageUrl} />
              <p>{data.description}</p>
            </div>
          );
        })}
      </main>

      <footer>
        <p>
          <LikeButton />
          <FontAwesomeIcon icon={faHeart} />
          {props.likes}
        </p>

        <p>
          <a href="#">Comments</a>
        </p>
      </footer>
    </div>
  );
}

export default Post;
