import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import NoFound from "./NotFound";
import Home from "./Home";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
import ShowPost from "./ShowPost";
import ProtectedRoute from "./PortectedRoute";
import Navbar from "../shared/Navbar";
// import { PostsContext, dispatch } from '../context/posts-context'
import Login from './Login'
import SignUp from './SignUp'

class App extends Component {
  state = { posts: [] };

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();

    this.setState({ posts });
  };

  handleDeletePost = (id) => {
    this.setState({
      posts: this.state.posts.filter((p) => p.id !== id),
    });
  };

  handleEditPost = (id, editedPost) => {
    const index = this.state.posts.findIndex((p) => p.id === parseInt(id))
    const posts = this.state.posts;
    posts[index] = {...editedPost, id: parseInt(id)};
    this.setState({ posts });
    console.log(posts);
  };

  handleNewPost = (post) => {
    this.setState({
      posts: [...this.state.posts, post]
    });
    console.log(post);
  };

  async componentDidMount() {
    this.getPosts();
  }

  render() {
    return (
      <React.Fragment>
        <Navbar />

        <Switch>
          <Route
            exact
            path="/posts"
            render={(props) => (
              <Posts
                {...props}
                posts={this.state.posts}
                onDeletePost={this.handleDeletePost}
              />
            )}
          />

          <ProtectedRoute exact path="/posts/create" 
            render={(props) => (
              <CreatePost {...props} 
              onNewPost={this.handleNewPost} />
            )}
          />
            
          <ProtectedRoute
            exact
            path="/posts/:id/edit"
            render={(props) => (
              <EditPost {...props} onEditedPost={this.handleEditPost} />
            )}
          />

          
          <Route exact path="/posts/:id" component={ShowPost} />

          <Route exact path="/"
            render={(props) => (
              <Home {...props}
              posts={this.state.posts} />
            )} />

          {/* <Route exact path="/login" component={Login} /> */}
          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route exact path="/login" component={Login} />
          <Route exact path="/sign-up" component={SignUp} />

          <Route component={NoFound} />
          
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
