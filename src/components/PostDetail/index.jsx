import React, { Component } from 'react';
import PostBox from '../Common/PostBox';
import Spinner from '../Common/Spinner';
import { connect } from 'react-redux';
import './styles/style.css';
import { Link } from 'react-router-dom';


// actions
import { fetchDetailPost } from '../../actions/detail-post'

// link
class PostDetail extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.fetchDetailPost(this.props.match.params.id);
  }
  render() {

      return (
        <div>
          {
            !this.props.postDetail.isDetailPost ?  
            <div>
              <Link to="/">home</Link>
              <PostBox  title={this.props.postDetail.detailPost.title} description={this.props.postDetail.detailPost.body} />  
            </div>
            : <Spinner />
          }
         
        </div>
    );
  }
}

const mapStatetoProps=(state)=> {
  return {
    postDetail: state.detailPost,
    isDetailPost: state.isDetailPost
  }
}

export default connect(mapStatetoProps,{ fetchDetailPost })(PostDetail);