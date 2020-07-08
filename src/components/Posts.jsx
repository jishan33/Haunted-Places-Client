import React, { Component } from 'react';
import Home from './Home';

class Posts extends Component {
  state = { posts: null }
 
 async componentDidMount() {
   this.getPosts();
 }

 getPosts= async () => {
   const response = await fetch("http://localhost:3000/posts");
   const posts = await response.json();
   
   this.setState({posts});
 }

 renderPosts = () => {
   return this.state.posts.map((post, index) =>{return (
     <div key={index} >
       <h3>{post.country}</h3>
     </div>
    ) });
 }

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