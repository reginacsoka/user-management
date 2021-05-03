import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class User extends Component {
  handleDelete = () => {
    axios
      .delete(
        "http://127.0.0.1:8080/delete/" + this.props.user.id,
        this.props.user
      )
      .then(() => {
        this.props.onDeleteCallThis();
      })
      .catch((error) => {
        console.log("Error in post", error);
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
          <button>Edit</button>
        </Link>

        <button onClick={this.handleDelete}>Delete </button>

        <hr />
      </div>
    );
  }
}

export default User;
