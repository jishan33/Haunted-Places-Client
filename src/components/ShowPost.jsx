import React, { Component } from "react";
import moment from "moment";

class ShowPost extends Component {
  render() {
    const post = this.props.location.state;
    return (
      <div className="card mb-3">
        <img className="card-img-top" src={post.image} alt={post.location} />
        <div className="card-body">
          <h5 className="card-title">{post.location}</h5>
          <h5 className="card-title">{post.country}</h5>
          <p className="card-text">{post.haunted_level}</p>
          <p className="card-text">{post.time}</p>
          <p className="card-text">{post.description}</p>

          <p className="card-text">
            <small className="text-muted">Created {moment(post.created_at).startOf("minute").fromNow()}</small>
          </p>
        </div>
      </div>
    );
  }
}

export default ShowPost;


