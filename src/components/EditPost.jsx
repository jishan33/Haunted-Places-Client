import React, { Component } from "react";
import countries from './countries.json'

class EditPost extends Component {
  state = {
    country: "",
    location: "",
    time: "",
    haunted_level: "",
    description: "",
    image: "",
    loading: true,
    id: this.props.match.params.id
  };

  async componentDidMount() {
    const { id } = this.state
    const response = await fetch(`http://localhost:3000/posts/${id}`);
    const { country, location, time, haunted_level, description, image } = await response.json();
    this.setState({ id, country, location, time, haunted_level, description, image, loading: false });
  }

  onInputChange = (event) => {
    let data
    if(event.target.id==="country"){
      const index = countries.findIndex((p) => p.country === event.target.value)
      const continent = countries[index].continent;
      data = {[event.target.id]: event.target.value, continent: continent}
    } else { data = {[event.target.id]: event.target.value,} }
    this.setState(data);
  };

  onFormSubmit = async (event) => {
      event.preventDefault();
      const { id, continent, country, location, time, haunted_level, description, image } = this.state;
      console.log(continent)
      const editedPost = { continent, country, location, time, haunted_level, description, image};

      await fetch(`http://localhost:3000/posts/${id}`, {
        method: "PUT",
        headers: {
          'Content-Type': "application/json",
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
        body: JSON.stringify(editedPost)
      });
      this.props.onEditedPost(id, editedPost);
      this.props.history.push("/posts")
  };

  render() {
    const {country, location,  haunted_level, description, loading} = this.state;
    console.log(this.state)
    return (
      !loading && (
      <div className="container">
        <form onSubmit={this.onFormSubmit}>
          <label htmlFor="country">Country</label>
            <select id="country" value={country} onChange={this.onInputChange}>
              {countries.map((obj, index) => (
                <option key={index} value={obj.country}>
                  {obj.country}
                </option>
              ))}
            </select>

          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            onChange={this.onInputChange}
            value={location}
          />

          <label htmlFor="haunted_level">Haunted level</label>
          <input
            type="number"
            name="haunted_level"
            id="haunted_level"
            onChange={this.onInputChange}
            value={haunted_level}
          />

          <label htmlFor="description">Description</label>
          <input
            type="text"
            name="description"
            id="description"
            onChange={this.onInputChange}
            value={description}
          />

          

         <input type="submit" value="Submit" /> 
        </form>
      </div>
      )
    );
  }
}

export default EditPost;
