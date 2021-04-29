import React, { Component } from "react";
import { Link } from "react-router-dom";

class User extends Component {
  render() {
    return (
      <div>
        <p> Name: {this.props.user.name}</p>
        <p> Email: {this.props.user.email}</p>
        <p> Date of birth: {this.props.user.dateOfBirth}</p>
        <p> Username: {this.props.user.username}</p>

        <Link to={"/edit/" + this.props.user.id}>Edit</Link>

        <hr />
      </div>
    );
  }
}

export default User;
