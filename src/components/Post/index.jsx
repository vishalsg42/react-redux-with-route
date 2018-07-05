import React, { Component } from 'react';
import PostBox from '../Common/PostBox';
import Spinner from '../Common/Spinner';
import { connect } from 'react-redux';
import './styles/style.css';


// actions
import { fetchPosts } from '../../actions/index'

// link
import { Link } from 'react-router-dom';
class Post extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchPosts();
    console.log('mount-->',this.props);
  }
  render() {

      return (
        // { let  postBlock = ''; }
        <div className='post-container'>
         { this.props.posts  ? this.props.posts.map(postItem=> {
          return <Link to={`${this.props.match.url+'/'+postItem.id}`} key={postItem.id} ><PostBox  title={postItem.title} description={postItem.body} /></Link>
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