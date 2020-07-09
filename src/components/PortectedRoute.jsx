import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

class ProtectedRoute extends Component {
  state = {
    auth: false,
    loading: true,
  };

  async componentDidMount() {
   try {
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
    console.log(loading)
    console.log(auth)
    console.log(this.props.component)
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
