import React, { Component } from "react";
import { Link } from "react-router-dom";
import { apiCalls } from "../utils/apiCalls";
import { Form, Col, FormLabel, FormGroup, Container } from "react-bootstrap";

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
      return (
        <button className="btn btn-success mx-2" onClick={this.handleUpdate}>
          Update
        </button>
      );
    } else {
      return (
        <button className="btn btn-success mx-2" onClick={this.handleInsert}>
          Add new user
        </button>
      );
    }
  };

  render() {
    const u = this.state.user;

    return (
      <Container>
        <Col>
          <Col xs={{ span: 4, offset: 4 }}>
            <Form>
              <h2>Edit User {u.id || ""}</h2>

              <FormGroup as={Col}>
                <FormLabel>Name:</FormLabel>

                <Form.Control
                  type="text"
                  id="name"
                  value={u.name || ""}
                  onChange={this.handleChangeName}
                />
              </FormGroup>

              <FormGroup as={Col}>
                <FormLabel>Username:</FormLabel>
                <Form.Control
                  type="text"
                  id="userName"
                  value={u.username || ""}
                  onChange={this.handleChangeUsername}
                />
              </FormGroup>

              <FormGroup as={Col}>
                <FormLabel name="email">E-mail:</FormLabel>
                <Form.Control
                  type="email"
                  value={u.email || ""}
                  onChange={this.handleChangeEmail}
                />
              </FormGroup>
              <FormGroup as={Col}>
                <FormLabel name="dateOfBirth">Date of birth:</FormLabel>
                <Form.Control
                  type="date"
                  value={u.dateOfBirth || ""}
                  onChange={this.handleChangeDate}
                />
              </FormGroup>

              <FormGroup as={Col} className="mt-3">
                {this.getSubmitButton()}

                <Link to="/">
                  <button className="btn btn-dark mx-2"> Back </button>
                </Link>
              </FormGroup>
            </Form>
          </Col>
        </Col>
      </Container>
    );
  }
}

export default AddEditUser;
