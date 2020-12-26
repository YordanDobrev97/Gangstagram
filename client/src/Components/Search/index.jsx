import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-dark">
        <form className="form-inline">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder={this.props.message}
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Search
          </button>
        </form>
      </nav>
    );
  }
}

export default Search;
