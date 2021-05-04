import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <nav>
        <h3>Nav</h3>
        <ul className="nav-links">
          <Link to="/">
            <li>List</li>
          </Link>
          <Link to="/add">
            <li>Add user</li>
          </Link>
        </ul>
      </nav>
    );
  }
}

export default Nav;