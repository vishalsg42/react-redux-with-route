import React, { Component } from 'react';
import PostBox from '../PostBox';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state= {

    }
  }
  render() {
    return (
      <div>
        <PostBox title='title' description='This is dummy post' />
        <PostBox title='title' description='This is dummy post' />
        <PostBox title='title' description='This is dummy post' />
        <PostBox title='title' description='This is dummy post' />
      </div>
    );
  }
}


export default Post;