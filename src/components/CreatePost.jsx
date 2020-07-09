import React, { Component } from "react";

class CreatePost extends Component {
  onInputChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value,
    });
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const body = {
      post: this.state,
    };
    const response = await fetch("http://localhost:3000/posts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(body),
    });

    const newPost = await response.json();
    this.props.onNewPost(newPost);
    this.props.history.push("/posts");
  };

  render() {
    return (
      <div className="container">
        <h1>Add a new post</h1>

        <form onSubmit={this.onFormSubmit}>
          <div className="form-row">
            <div className="form-group col-md-6">
              <label htmlFor="">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                onChange={this.onInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="">Location</label>
              <input
                type="text"
                name="location"
                id="location"
                onChange={this.onInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="">Time</label>
              <input
                type="text"
                name="time"
                id="time"
                onChange={this.onInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="">Haunted Level</label>
              <input
                type="number"
                name="haunted_level"
                id="haunted_level"
                onChange={this.onInputChange}
                className="form-control"
              />
            </div>
            <div className="form-group col-md-6">
              <label htmlFor="">Image url</label>
              <input
                type="text"
                name="image"
                id="image"
                onChange={this.onInputChange}
                className="form-control"
              />
            </div>

            <div className="form-group col-md-6">
              <label htmlFor="exampleFormControlTextarea1">Description</label>
              <textarea
                name="description"
                onChange={this.onInputChange}
                className="form-control" id="exampleFormControlTextarea1" 
                rows="3"
              ></textarea>
            </div>

            <div className="form-group">
              <div className="form-check  ml-1">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="gridCheck"
                />
                <label className="form-check-label" htmlFor="gridCheck">
                  agreed to the rules.
                </label></div>
            <button type="submit" className="btn btn-primary mt-3 ml-1">
              Submit
            </button>
              
            </div>
            
          </div>
        </form>
      </div>
    );
  }
}

export default CreatePost;
