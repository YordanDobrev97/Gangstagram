import React, { Component } from "react";
import Header from "../Header/index";
import Feed from "./all";

class Feeds extends Component {
  render() {
    return (
      <div>
        <Header />
        <main id="feed">
          <Feed></Feed>
        </main>
      </div>
    );
  }
}

export default Feeds;
