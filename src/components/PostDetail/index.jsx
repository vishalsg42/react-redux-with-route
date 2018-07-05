import React, { Component } from 'react';
import PostBox from '../Common/PostBox';
import Spinner from '../Common/Spinner';
import { connect } from 'react-redux';
import './styles/style.css';


// actions
import { fetchDetailPost } from '../../actions/detail-post'

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
         {/* { this.props.posts  ? this.props.posts.map(postItem=> {
          return <Link to={`${this.props.match.url+'/'+postItem.id}`} key={postItem.id}  ></Link>
        }) : <Spinner/>  } */}
        <PostBox  title='{postItem.title}' description='{postItem.body'} />
        </div>
    );
  }
}

const mapStatetoProps=(state)=> {
  console.log('state',state)
  return {
    
  }
}

export default connect(mapStatetoProps,{ fetchDetailPost })(Post);