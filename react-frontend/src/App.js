import React, { Component } from "react";
import Users from "./components/Users";
import "./App.css";
import Nav from "./Nav";
import EditUser from "./components/EditUser";
import Shop from "./Shop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    // const Home = () => (
    //   <div>
    //     <h1>Home page</h1>
    //   </div>
    // );
    return (
      <Router>
        <div className="App">
          <Nav />
          <Switch>
            <Route path="/" exact component={Users} />
            <Route path="/edit/:id" component={EditUser} />
            <Route path="/shop" component={Shop} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
