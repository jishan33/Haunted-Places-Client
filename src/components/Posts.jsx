import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = { posts: [] };

  deletePost = async (id) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    this.props.onDeletePost(id);
  };

  renderPosts = () => {
    return this.props.posts.map((post, index) => {
      return (
        <div key={index} className="card bg-dark text-white">
           <img className="card-img" src={post.image} alt={post.location} />
           <div className="card-img-overlay">
          <Link
            to={{
              pathname: `/posts/${post.id}`,
              state: post,
            }}
          >
            <div>
              <h2>{post.location}</h2>
              <p>Haunted Level: {post.haunted_level}</p>
            </div>
          </Link>

            <button type="button" className="btn btn-dark">
            <Link to={`posts/${post.id}/edit`}>Edit</Link></button>
           <button type="button" className="btn btn-dark ml-2">
            <span onClick={() => this.deletePost(post.id)}>Delete</span></button>
          
          </div>
        </div>
      );
    });
  };

  render() {
    return (
      <>
        <h3>{this.renderPosts()}</h3>
      </>
    );
  }
}

export default Posts;
