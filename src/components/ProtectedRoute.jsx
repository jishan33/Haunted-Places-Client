import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

class ProtectedRoute extends Component {
  static contextType = PostsContext;
  state = {
    auth: false,
    loading: true,
  };

  // setTokenAndDispatch = async (response) => {
  //   const { jwt, posts, current_user: currentUser } = await response.json();
  //   localStorage.setItem("token", jwt);
  // };

  setAuth = () => this.setState({ auth: true, loading: false });

  setLoading = () => this.setState({ loading: false });

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();

    this.context.dispatch("populate", { posts });
  };

  async componentDidMount() {
    try {
      this.getPosts();
      const response = await fetch("http://localhost:3000/status", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      if (response.status >= 400) {
        throw new Error("not authorized");
      } else {
        const { jwt } = await response.json();
        const response_user = await fetch("http://localhost:3000/status/user", {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const { user } = await response_user.json()
        this.context.dispatch("current user", { user });
        localStorage.setItem("token", jwt);
        this.setAuth()
      }
    } catch (err) {
      console.log(err.message);
      this.setLoading()
    }
  }

  render() {
    const { loading, auth } = this.state;
    if (!loading && !auth) {
      return <Redirect to="/" />;
    } else {
      return (
        !loading && (
          <Route
            exact={this.props.exact}
            path={this.props.path}
            component={this.props.component}
          />
        )
      );
    }
  }
}

export default ProtectedRoute;
