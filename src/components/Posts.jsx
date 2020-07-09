import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  state = { posts: [] };

  deletePost = async (id) => {
    await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      },
    });

    this.props.onDeletePost(id);
  };

  renderPosts = () => {
    return this.props.posts.map((post, index) => {
      return (
        <div key={index}>
          {/* <Link to={`posts/${post.id}/`}><h3>{post.location}</h3></Link> */}
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

          <p>{post.description}</p>
          <div className="edit-delete-container">
            <Link to={`posts/${post.id}/edit`}>Edit</Link>
            
            <span onClick={() => this.deletePost(post.id)}>Delete</span>
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
