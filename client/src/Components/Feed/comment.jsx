import React, { Fragment } from "react";
import "./style.css";

function Comment() {
  return (
    <Fragment>
      <div class="bg-light p-2">
        <div class="d-flex flex-row align-items-start">
          <textarea class="form-control ml-1 shadow-none textarea"></textarea>
        </div>
        <div class="mt-2 text-right">
          <button class="btn btn-primary btn-sm shadow-none" type="button">
            Post comment
          </button>
          <button
            class="btn btn-outline-primary btn-sm ml-1 shadow-none"
            type="button"
          >
            Cancel
          </button>
        </div>
      </div>
    </Fragment>
  );
}

export default Comment;
