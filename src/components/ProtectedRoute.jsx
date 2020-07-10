import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import { PostsContext} from "../context/PostsContext";

class ProtectedRoute extends Component {
  static contextType = PostsContext;
  state = {
    auth: false,
    loading: true,
  };

  getPosts = async () => {
    const response = await fetch("http://localhost:3000/posts");
    const posts = await response.json();

    // console.log(this.state)
     this.context.dispatch("populate",{ posts });
  };
  
  

  async componentDidMount() {
   try {
     this.getPosts();
     const response = await fetch("http://localhost:3000/status", {
       headers: {
         'Authorization': `Bearer ${localStorage.getItem('token')}`
       }
     })
     if (response.status >= 400) {
       throw(new Error("not authorized"))
     } else {
      const { jwt } = await response.json()
      localStorage.setItem('token', jwt)        
       this.setState({
         auth: true,
         loading: false,
       });
     }
   } catch(err) {
     console.log(err.message)
     this.setState({
       loading: false,
     });
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
