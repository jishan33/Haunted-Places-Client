import React, {Component} from 'react';

class ShowPost extends Component {

  render() { 
  const post = this.props.location.state;
    return ( 
    <>
      <h3>{post.location}</h3>
      <p>{post.country}</p>
      <p>{post.haunted_level}</p>
      <p>{post.time}</p>
      <p>{post.description}</p>
    </>
     );
  }
}
 
export default ShowPost;

// const ShowPost = (props) => {
//   const post = props.post.location.state;
//   return ( 
//     <>
//     <h3>{post.location}</h3>
//     <p>{post.country}</p>
//     <p>{post.haunted_level}</p>
//     <p>{post.time}</p>
//     <p>{post.description}</p>



//     </>
//    );
// }
 
// export default ShowPost;