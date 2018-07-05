import React from 'react';

// styles
import './styles/style.css'

const PostBox = (props)=> {
    return (
      <div className="post-box">
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div> 
    )
}


export default PostBox;