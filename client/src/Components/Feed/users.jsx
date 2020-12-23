import React, { Component } from "react";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  async componentDidMount() {
    const data = await fetch("http://localhost:3001/user/all").then((r) =>
      r.json()
    );
    this.setState({
      users: data,
    });
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
