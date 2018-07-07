import {
  FETCH_DETAIL_POST_SUCCESS,
  FETCH_DETAIL_POST_FALIURE,
  REQUEST_FETCH_DETAIL_POST
} from '../actions/detail-post';
const INITIAL_STATE = {
  detailPost:'',
  isDetailPost: true
}
export const  fetchDetailPost = (state = INITIAL_STATE ,actions)=> {

  
  switch(actions.type) {
    case REQUEST_FETCH_DETAIL_POST: 
      return {
          'detailPost': state.data,
          'isDetailPost': true,
      }
    case FETCH_DETAIL_POST_SUCCESS: 
    return {
      'detailPost': actions.data.data,
      'isDetailPost': false,
    }
    case FETCH_DETAIL_POST_FALIURE: 
    return {
      'detailPost': actions.data,
      'isDetailPost': true,
    }
    default: 
      return state;
  }
}