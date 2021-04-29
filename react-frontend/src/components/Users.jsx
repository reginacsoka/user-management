import React, { Component } from "react";
import User from "./User";
import axios from "axios";

class Users extends Component {
  state = {
    users: [],
  };

  componentDidMount() {
    axios
      .get("http://127.0.0.1:8080/get-all")
      .then((response) => {
        const users = response.data;
        this.setState({ users });
      })
      .catch((error) => {
        console.log("Error in the get all", error);
      });
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.users.map((user) => (
            <User key={user.id} user={user} />
          ))}
        </ul>
      </div>
    );
  }
}

export default Users;
