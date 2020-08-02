import React, { Component } from "react";
import countries from "./countries.json";
import { PostsContext } from "../context/PostsContext";

class EditPost extends Component {
  static contextType = PostsContext;
  state = {
    country: "",
    location: "",
    time: "",
    haunted_level: "",
    description: "",
    image: "",
    loading: true,
    id: Number(this.props.match.params.id),
  };
  onInputChange = (event) => {
    let data;
    if (event.target.id === "country") {
      const index = countries.findIndex(
        (p) => p.country === event.target.value
      );
      const continent = countries[index].continent;
      data = { [event.target.id]: event.target.value, continent: continent };
    } else {
      data = { [event.target.id]: event.target.value };
    }
    this.setState(data);
  };

  onFormSubmit = async (event) => {
    event.preventDefault();
    const {
      id,
      continent,
      country,
      location,
      time,
      haunted_level,
      description,
      image,
    } = this.state;

    const editedPost = {
      id,
      continent,
      country,
      location,
      time,
      haunted_level,
      description,
      image,
    };

    await this.context.dispatch("update", editedPost);

    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      body: JSON.stringify(editedPost),
    });
    this.props.history.push("/posts");
  };

  async componentDidMount() {
    const posts = await this.context.posts;
    const foundPost = posts.find((post) => {
      return post.id === this.state.id;
    });
    this.setState({ ...foundPost, loading: false });
  }

  render() {
    const {
      country,
      location,
      haunted_level,
      description,
      loading,
    } = this.state;

    return (
      !loading && (
        <div className="container">
          <form onSubmit={this.onFormSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="country">Country</label>
                <select
                  id="country"
                  value={country}
                  onChange={this.onInputChange}
                  className="form-control"
                >
                  {countries.map((obj, index) => (
                    <option key={index} value={obj.country}>
                      {obj.country}
                    </option>
                  ))}
                </select>
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="location">Location</label>
                <input
                  type="text"
                  name="location"
                  id="location"
                  onChange={this.onInputChange}
                  value={location}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="haunted_level">Haunted level</label>
                <input
                  type="number"
                  name="haunted_level"
                  id="haunted_level"
                  onChange={this.onInputChange}
                  value={haunted_level}
                  className="form-control"
                />
              </div>
              <div className="form-group col-md-6">
                <label htmlFor="description">Description</label>
                <input
                  type="text"
                  name="description"
                  id="description"
                  onChange={this.onInputChange}
                  value={description}
                  className="form-control"
                />
              </div>
              <button type="submit" className="btn btn-danger mt-3 ml-1">
                Submit
              </button>
            </div>
          </form>
        </div>
      )
    );
  }
}

export default EditPost;
