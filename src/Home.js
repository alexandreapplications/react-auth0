import React, { Component } from "react";
import { Link } from "react-router-dom";

class Home extends Component {
  render() {
    // Creates an alias to the functions.
    const { isAuthenticated, login } = this.props.auth;
    return (
      <div>
        <h1>Home</h1>
        {isAuthenticated() ? (
          <Link to="/profile">View Profile</Link>
        ) : (
          <button onClick={login}>Log in</button>
        )}
      </div>
    );
  }
}
export default Home;
