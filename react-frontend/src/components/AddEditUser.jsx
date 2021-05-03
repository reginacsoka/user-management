import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
      axios
        .get("http://127.0.0.1:8080/get/" + this.props.match.params.id)
        .then((response) => {
          const user = response.data;
          this.setState({ user });
        })
        .catch((error) => {
          console.log("Error in the get user", error);
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
    axios
      .post(
        "http://127.0.0.1:8080/update/" + this.props.match.params.id,
        this.state.user
      )
      .then((response) => {
        //const user = response.data;
      })
      .catch((error) => {
        console.log("Error in post", error);
      });
  };

  handleCreate = () => {
    axios
      .post("http://127.0.0.1:8080/insert", this.state.user)
      .then((response) => {
        //const user = response.data;
      })
      .catch((error) => {
        console.log("Error in post", error);
      });
  };

  handleSave = () => {
    if (this.props.match.params.id) {
      axios
        .post(
          "http://127.0.0.1:8080/update/" + this.props.match.params.id,
          this.state.user
        )
        .then((response) => {
          //const user = response.data;
        })
        .catch((error) => {
          console.log("Error in post", error);
        });
    } else {
      axios
        .post("http://127.0.0.1:8080/insert", this.state.user)
        .then((response) => {
          //const user = response.data;
        })
        .catch((error) => {
          console.log("Error in post", error);
        });
    }
  };

  getSubmitButton = () => {
    if (this.props.match.params.id) {
      return <button onClick={this.handleUpdate}>Update</button>;
    } else {
      return <button onClick={this.handleCreate}>Add new user</button>;
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
