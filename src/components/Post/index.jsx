import React, { Component } from 'react';
import PostBox from '../Common/PostBox';
import Spinner from '../Common/Spinner';
import { connect } from 'react-redux';
import './styles/style.css';


// actions
import { fetchPosts } from '../../actions/index'

// link
import { Link } from 'react-router-dom';

// Route 


class Post extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchPosts();
    // console.log('mount-->',this.props);
    // console.log('mount-->',this.props.match.url);
    // console.log('mount--> sd',this.props.isFetchLoad);
  }
  render() {

      return (
        <div className='post-container'>
         { !this.props.isFetchLoad  ? this.props.posts.map(postItem=> {
          return <Link  key={postItem.id} to={`${this.props.match.url+'/'+postItem.id}`}  >
                    <PostBox  title={postItem.title} description={postItem.body} /> 
                  </Link>

        }) : <Spinner/>  }
      </div>
    );
  }
}

const mapStatetoProps=(state)=> {
  // console.log('state',state)
  return {
    posts: state.post.post,
    'isFetchLoad': state.post.isFetchLoad
  }
}

export default connect(mapStatetoProps,{ fetchPosts })(Post);