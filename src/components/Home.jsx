import React, { Component } from "react";
import { PostsContext } from "../context/PostsContext";

class Home extends Component {
  static contextType = PostsContext;

  render() {
    let url =
      "https://afbic.com/wp-content/uploads/2019/09/arfb-haunted-places-blog.jpg";
    const { posts } = this.context;
    const index = Math.floor(Math.random() * (posts.length - 1));
    const post = posts[index];
    return (
      <div className="container">
        <div className="card bg-dark text-white">
          {post && (
            <React.Fragment>
              <img
                src={post.image ? post.image : url}
                alt={post.location}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = url;
                }}
              />
              <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                  <h1 className="ml-5">{post.location}</h1>
                </div>
                <div className="card-img-overlay"></div>
                <h3 className="ml-5">{post.description}</h3>
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    );
  }
}

export default Home;
