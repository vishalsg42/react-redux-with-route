import React, { Component } from 'react';
import PostBox from '../Common/PostBox';
import Spinner from '../Common/Spinner';
import { connect } from 'react-redux';
import './styles/style.css';

// actions
import { fetchPosts } from '../../actions/index'

class Post extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchPosts();
    console.log('mount-->',this.props.posts);
  }
  render() {
      return (
        // { let  postBlock = ''; }
        <div className='post-container'>
         { this.props.posts  ? this.props.posts.map(postItem=> {
          return <PostBox key={postItem.id} title={postItem.title} description={postItem.body} />
        }) : <Spinner/>  }
      </div>
    );
  }
}

const mapStatetoProps=(state)=> {
  console.log('state',state)
  return {
    posts: state.post,
    'isFetchLoad': state.isFetchLoad
  }
}

export default connect(mapStatetoProps,{ fetchPosts })(Post);