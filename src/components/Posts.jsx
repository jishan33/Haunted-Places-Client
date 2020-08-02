import React, { Component } from "react";
import { Link } from "react-router-dom";
import { PostsContext } from "../context/PostsContext";

class Posts extends Component {
  static contextType = PostsContext;

  deletePost = async (id) => {
    this.context.dispatch("delete", id);
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
  };

  renderPosts = (posts) => {
    let url =
      "https://afbic.com/wp-content/uploads/2019/09/arfb-haunted-places-blog.jpg";
    return posts.map((post, index) => {
      return (
        <div key={index} className="card bg-dark text-white mb-3">
          <img
            src={post.image ? post.image : url}
            alt={post.location}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = url;
            }}
          />

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
              <Link to={`posts/${post.id}/edit`}>Edit</Link>
            </button>
            <button type="button" className="btn btn-dark ml-2">
              <span onClick={() => this.deletePost(post.id)}>Delete</span>
            </button>
          </div>
        </div>
      );
    });
  };

  render() {
    const { posts } = this.context;
    return (
      <div className="container">
        <h3>{this.renderPosts(posts)}</h3>
      </div>
    );
  }
}

export default Posts;
