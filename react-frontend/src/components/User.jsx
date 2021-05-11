import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiCalls } from "../utils/apiCalls";

class User extends Component {
  handleDelete = () => {
    apiCalls.deleteUser(this.props.user.id).then((resp) => {
      this.props.onDelete();
    });
  };

  render() {
    return (
      <div>
        <p> Name: {this.props.user.name}</p>
        <p> Email: {this.props.user.email}</p>
        <p> Date of birth: {this.props.user.dateOfBirth}</p>
        <p> Username: {this.props.user.username}</p>

        <Link to={"/edit/" + this.props.user.id}>
          <button className="btn btn-outline-success mx-2">Edit</button>
        </Link>

        <button
          className="btn btn-outline-dark mx-2"
          onClick={this.handleDelete}
        >
          Delete{" "}
        </button>

        <hr />
      </div>
    );
  }
}

export default User;
