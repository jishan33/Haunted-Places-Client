import React from "react";

const Home = (props) => {
  const posts = props.posts;
  const index = Math.floor(Math.random() * (posts.length - 1));
  const post = posts[index];

  return (
     <React.Fragment>
    
      {post && (
        <React.Fragment>
          <img class="w-full" src={post.image} alt={post.location}></img>
          <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">{post.location}</div>
            <p class="text-gray-700 text-base">
              {post.description}
            </p>

            
          </div>
        </React.Fragment>
      )}
     </React.Fragment>
    
  );
};

export default Home;
