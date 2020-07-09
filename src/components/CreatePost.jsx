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
        'Authorization': `Bearer ${localStorage.getItem('token')}`
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
          <label htmlFor="">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            onChange={this.onInputChange}
          />

          <label htmlFor="">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={this.onInputChange}
          />

          <label htmlFor="">Time</label>
          <input
            type="text"
            name="time"
            id="time"
            onChange={this.onInputChange}
          />

          <label htmlFor="">Haunted Level</label>
          <input
            type="number"
            name="haunted_level"
            id="haunted_level"
            onChange={this.onInputChange}
          />

          <label htmlFor="">Image</label>
          <input
            type="text"
            name="image"
            id="image"
            onChange={this.onInputChange}
          />

          <label htmlFor="description">Description</label>
          <textarea
            name="description"
            id="description"
            onChange={this.onInputChange}
          ></textarea>

          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default CreatePost;
