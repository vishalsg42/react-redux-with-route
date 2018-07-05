import axios from 'axios';

// Fetch Actions
export const FETCH_DETAIL_POST = 'FETCH_DETAIL_POST';
export const FETCH_DETAIL_POST_SUCCESS = 'FETCH_DETAIL_POST_SUCCESS';
export const FETCH_DETAIL_POST_FALIURE = 'FETCH_DETAIL_POST_FALIURE';
export const REQUEST_FETCH_DETAIL_POST = 'REQUEST_FETCH_DETAIL_POST';

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export const fetchDetailPost= (id)=>{
  return dispatch => {
    dispatch(fetchDetailPostRequest());
    axios.get(`${POST_API_URL+'/'+id}`).then( response =>{
        dispatch(fetchDetailPostSuccess(response))
        return response;
    }).catch(error=> {
      dispatch(fetchDetailPostFaliure(error));
      return error;
    });
  }  
}

function fetchDetailPostRequest() {
  return {
    type: REQUEST_FETCH_DETAIL_POST,
    'isFetchDetailPost': true
  }
}

function fetchDetailPostSuccess(response) {
  return {
    type: REQUEST_FETCH_DETAIL_POST,
    'isFetchDetailPost': false,
    data: response
  }
}
function fetchDetailPostFaliure(error) {
  return {
    type: REQUEST_FETCH_DETAIL_POST,
    'isFetchDetailPost': true,
    error
  }
}


