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
          <li className="nav-item active">
            <NavLink className="nav-item nav-link active" to="/">
              Home
            </NavLink>
          </li>
          <NavLink className="nav-item nav-link" to="/posts">
            Posts
          </NavLink>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/posts/create">
              Add Post{" "}
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/login">
              Login
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-item nav-link" to="/sign-up">
              Sign Up
            </NavLink>
          </li>
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
