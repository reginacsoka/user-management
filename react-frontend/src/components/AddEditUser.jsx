import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiCalls } from "../utils/apiCalls";

class AddEditUser extends Component {
  state = {
    user: {
      id: "",
      name: "",
      username: "",
      email: "",
      dateOfBirth: "",
    },
  };

  componentDidMount() {
    if (this.props.match.params.id) {
      apiCalls.getUser(this.props.match.params.id).then((response) => {
        this.setState({ user: response });
      });
    }
  }

  handleChangeName = (evt) => {
    //console.log(this.state.user);
    const actualUser = this.state.user;
    actualUser.name = evt.target.value;
    this.setState({ user: actualUser });
    // this.setState({ user: { ...this.state.user, name: evt.target.value } });
  };

  handleChangeUsername = (evt) => {
    const actualUser = this.state.user;
    actualUser.username = evt.target.value;
    this.setState({ user: actualUser });
  };

  handleChangeEmail = (evt) => {
    const actualUser = this.state.user;
    actualUser.email = evt.target.value;
    this.setState({ user: actualUser });
  };

  handleChangeDate = (evt) => {
    const actualUser = this.state.user;
    actualUser.dateOfBirth = evt.target.value;
    this.setState({ user: actualUser });
  };

  handleUpdate = () => {
    apiCalls
      .updateUser(this.state.user.id, this.state.user)
      .then((response) => {});
  };

  handleInsert = () => {
    apiCalls.insertUser(this.state.user).then((response) => {});
  };

  getSubmitButton = () => {
    if (this.props.match.params.id) {
      return <button onClick={this.handleUpdate}>Update</button>;
    } else {
      return <button onClick={this.handleInsert}>Add new user</button>;
    }
  };

  render() {
    const u = this.state.user;

    return (
      <div>
        <h2>Edit User {u.id || ""}</h2>

        <label name="name">Name:</label>
        <input
          type="text"
          id="name"
          value={u.name || ""}
          onChange={this.handleChangeName}
        />
        <br />

        <label name="userName">Username:</label>
        <input
          type="text"
          id="userName"
          value={u.username || ""}
          onChange={this.handleChangeUsername}
        />
        <br />

        <label name="email">E-mail:</label>
        <input
          type="email"
          value={u.email || ""}
          onChange={this.handleChangeEmail}
        />
        <br />

        <label name="dateOfBirth">Date of birth:</label>
        <input
          type="date"
          value={u.dateOfBirth || ""}
          onChange={this.handleChangeDate}
        />
        <br />

        {this.getSubmitButton()}

        <Link to="/">
          <button> Back </button>
        </Link>
      </div>
    );
  }
}

export default AddEditUser;
