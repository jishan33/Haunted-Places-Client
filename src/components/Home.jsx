import React from "react";

const Home = (props) => {
  const posts = props.posts;
  const index = Math.floor(Math.random() * (posts.length - 1));
  const post = posts[index];

  return (
    <React.Fragment>
      <div className="card bg-dark text-white">
        {post && (
          <React.Fragment>
            <img className="card-img" src={post.image} alt={post.location} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2"><h1 className="ml-5" >{post.location}</h1></div>
              <div className="card-img-overlay"></div>
              <h3 className="ml-5">{post.description}</h3>
            </div>
          </React.Fragment>
        )}
      </div>
    </React.Fragment>
  );
};

export default Home;
