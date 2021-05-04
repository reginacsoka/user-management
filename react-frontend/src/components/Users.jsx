import React, { Component } from "react";
import User from "./User";
import { apiCalls } from "../utils/apiCalls";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = async () => {
    apiCalls.getAllUsers().then((resp) => {
      this.setState({ users: resp });
    });

    // const usersResp = await apiCalls.getAllUsers();
    // this.setState({ users: usersResp });
  };

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <User key={user.id} user={user} onDeleteCallThis={this.loadUsers} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
