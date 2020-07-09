import React from "react";

class Login extends React.Component {
  state = { email: "", password: "", errMessage: "" };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    const body = {
      auth: { email, password },
    };
    try {
      const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          
        },
        body: JSON.stringify(body),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/");
      }
    } catch (err) {
      this.setState({
        errMessage: err.message,
      });
    }
  };

  render() {
    const { email, password, errMessage } = this.state;
    return (
      <div className="container">
        <h1>Login</h1>
        {errMessage && <span>{errMessage}</span>}
        <form onSubmit={this.onFormSubmit}>
           <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={this.onInputChange}
            className="form-control" 
            id="exampleInputEmail1" aria-describedby="emailHelp" 
            placeholder="Enter email"
          /><small id="emailHelp" class="form-text text-muted">Your email probably will not be shared with anyone else....</small>
          </div>

          <div className="form-group">
          <label htmlFor="pexampleInputPassword1">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onInputChange}
            class="form-control" 
            id="exampleInputPassword1" 
            placeholder="Password"
          />
          </div>
          <button type="submit" className="btn btn-secondary">Join us</button>
        </form>
      </div>
    );
  }
}

export default Login;