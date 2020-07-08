import React from "react";
import { Switch, Route } from "react-router-dom";
import NoFound from "./NotFound";
import Home from "./Home";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";
// import ProtectedRoute from "./PortectedRoute";
// import NavBar from "../shared/NavBar";
// import { PostsContext, dispatch } from '../context/posts-context'
// import Login from './Login'
// import SignUp from './SignUp'


function App() {
  return (
    <React.Fragment>
      {/* <NavBar /> */}
      <Switch>
        <Route exact path="/posts" component={Posts} />
        {/* <Route exact path="/posts/create" component={CreatePost} /> */}
        {/* <Route exact path="posts/:id/edit" component={EditPost} /> */}
        <Route exact path="/" component={Home} />
        <Route component={NoFound} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
