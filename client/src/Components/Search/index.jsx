import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <nav class="navbar navbar-light bg-dark">
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder={this.props.message}
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Search;
