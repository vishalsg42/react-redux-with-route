import {
  FETCH_DETAIL_POST_SUCCESS,
  FETCH_DETAIL_POST_FALIURE,
  REQUEST_FETCH_DETAIL_POST
} from '../actions/detail-post';

export const  detailFetchPost = (state,actions)=> {
  switch(actions) {
    case REQUEST_FETCH_DETAIL_POST: 
      return {
        'fetchPost': 'heyy'
      }
    case FETCH_DETAIL_POST_SUCCESS: 
    return {
      'fetchPost': 'success'
    }
    case FETCH_DETAIL_POST_FALIURE: 
    return {
      'fetchPost': 'faliure'
    }
    default: 
      return state;


  }
}