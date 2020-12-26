import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  render() {
    const users = this.state.users.map((user) => {
      return (
        <div>
          <div>
            <img src={user.profileImg} />
          </div>
          <button>View profile</button>
        </div>
      );
    });
    return <div>{users}</div>;
  }
}

export default Users;
