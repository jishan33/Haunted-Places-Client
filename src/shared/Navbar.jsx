import React from "react";
import { Link, useHistory, NavLink } from "react-router-dom";

const Navbar = () => {
  const history = useHistory();
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link to="/" className="navbar-brand">
        <img src={require("../assets/ghost-icon.png")} alt="icon" />
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <NavLink className="nav-item nav-link active" to="/">
            Home
          </NavLink>

          <NavLink className="nav-item nav-link" to="/posts">
            Posts
          </NavLink>

          <NavLink className="nav-item nav-link" to="/posts/create">
            Add Post{" "}
          </NavLink>

          <NavLink className="nav-item nav-link" to="/login">
            Login
          </NavLink>

          <NavLink className="nav-item nav-link" to="/sign-up">
            Sign Up
          </NavLink>

          <p
            className="nav-item nav-link"
            onClick={() => {
              localStorage.removeItem("token");
              history.push("/login");
            }}
          >
            Logout
          </p>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
