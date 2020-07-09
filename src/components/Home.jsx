import React from "react";


const Home = (props) => {
  const posts = props.posts;
  const index = Math.floor(Math.random()*(posts.length-1));
  const post = posts[index];

  return (
    <div>
    {post &&
    <>
      <h1>Home</h1>
      <h3>{post.location}</h3>
      <img src={post.image} alt={post.location}></img>
      <p>{post.description}</p>
    </>
      }
 
    </div>
  );
};

export default Home;
