import React, { Component } from "react";


class Posts extends Component {
  state = { posts: [] };

  deletePost = async (id) => {
    await fetch(`http://localhost:300/countries/${id}`, {
      method: "DELETE",
    });
    this.props.onDeletePost(id);
  };

  renderPosts = () => {
    return this.state.posts.map((post, index) => {
      return (
        <div key={index}>
          <h3>{post.country}</h3>

          <span onClick={() => this.deletePost(post.id)}>Delete</span>
        </div>
      );
    });
  };

  render() {
    const { posts } = this.state;
    return (
      <>
        <h3>{posts && this.renderPosts()}</h3>
      </>
    );
  }
}

export default Posts;
