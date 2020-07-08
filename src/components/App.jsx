import React, {Component} from "react";
import { Switch, Route } from "react-router-dom";
import NoFound from "./NotFound";
import Home from "./Home";
import Posts from "./Posts";
// import CreatePost from "./CreatePost";
// import EditPost from "./EditPost";
// import ProtectedRoute from "./PortectedRoute";
import Navbar from "../shared/Navbar";
// import { PostsContext, dispatch } from '../context/posts-context'
// import Login from './Login'
// import SignUp from './SignUp'

class App extends Component {
  state = { posts: [] }


 getPosts= async () => {
   const response = await fetch("http://localhost:3000/posts");
   const posts = await response.json();
   
   this.setState({posts});
 };

 handleDeletePost = (id) => {
   this.setState({
     posts: this.state.posts.filter((p) => p.id !== id)
   });
 };


  async componentDidMount() {
   this.getPosts();
 }


  render() { 
    return ( 
      <React.Fragment>
      <Navbar />

      <Switch>
        <Route exact path="/posts" 
        render ={(props) => (
         < Posts {...props}
         posts={this.state.posts}
         onDeletePost={this.handleDeletePost} />
        )}
        />


        {/* <Route exact path="/posts/create" component={CreatePost} /> */}
        {/* <Route exact path="posts/:id/edit" component={EditPost} /> */}
        <Route exact path="/" component={Home} />
        <Route component={NoFound} />
      </Switch>
    </React.Fragment>
  );
   
  }
}
 
export default App;



