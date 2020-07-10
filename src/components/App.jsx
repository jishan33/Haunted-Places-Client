import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NoFound from "./NotFound";
import Home from "./Home";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import ShowPost from "./ShowPost";
import ProtectedRoute from "./ProtectedRoute";
import Navbar from "../shared/Navbar";
import Login from "./Login";
import SignUp from "./SignUp";
import { PostsContext, dispatch } from "../context/PostsContext";
import "../assets/App.css";

class App extends Component {
  state = { posts: [], dispatch: dispatch.bind(this) };

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();

    // this.context.dispatch("populate", { posts });
    // console.log(this.state)
     this.setState({ posts });
  };

  // handleDeletePost = (id) => {
  //   this.setState({
  //     posts: this.state.posts.filter((p) => p.id !== id),
  //   });
  // };

  // handleEditPost = (id, editedPost) => {
  //   const index = this.state.posts.findIndex((p) => p.id === parseInt(id));
  //   const posts = this.state.posts;
  //   posts[index] = { ...editedPost, id: parseInt(id) };
  //   this.setState({ posts });
  // };

  // handleNewPost = (post) => {
  //   this.setState({
  //     posts: [...this.state.posts, post],
  //   });
  // };

  async componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <PostsContext.Provider value={this.state}>
        <Navbar />
        <Switch>
          <Route exact path="/posts" component={Posts} />

          <ProtectedRoute exact path="/posts/create" component={CreatePost} />

          <ProtectedRoute exact path="/posts/:id/edit" component={EditPost} />

          <Route exact path="/posts/:id" component={ShowPost} />

          <Route exact path="/" component={Home} />

          <Route exact path="/login" component={Login} />

          <Route exact path="/sign-up" component={SignUp} />

          <Route component={NoFound} />
        </Switch>
      </PostsContext.Provider>
    );
  }
}

export default App;
