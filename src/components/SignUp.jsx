import React from "react";

class SignUp extends React.Component {
  state = { email: "", password: "" };

  onInputChange = (event) => {
    const key = event.target.id;
    this.setState({
      [key]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    try {
      const response = await fetch("http://localhost:3000/sign-up", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ user: { email, password } }),
      });
      if (response.status >= 400) {
        throw new Error("incorrect credentials");
      } else {
        const response = await fetch("http://localhost:3000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ auth: { email, password } }),
        });
        const { jwt } = await response.json();
        localStorage.setItem("token", jwt);
        this.props.history.push("/posts/create");
      }
    } catch (err) {
      console.log(err.message);
    }
  };

  render() {
    const { email, password } = this.state;
    return (
      <div className="container">
        <h1 className="mt-5">Sign Up</h1>

        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="email" className="mt-5">Email</label>
          <input
            onChange={this.onInputChange}
            type="email"
            name="email"
            value={email}
            className="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll might share your email with someone else.
          </small>

          <label htmlFor="password" className="mt-3">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.onInputChange}
            className="form-control"
            id="password"
          />
          <div className="form-check mt-3">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              agreed to the rules.
            </label>
          </div>
          <button type="submit" className="btn btn-secondary mt-3">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default SignUp;
