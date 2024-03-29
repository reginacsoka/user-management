import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

class Navigation extends Component {
  render() {
    return (
      <Navbar className="navbar navbar-dark bg-dark" expand="md">
        <Navbar.Brand>User Management</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>

              <li className="nav-item active">
                <Link className="nav-link" to="/add">
                  Add user
                </Link>
              </li>
            </ul>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
