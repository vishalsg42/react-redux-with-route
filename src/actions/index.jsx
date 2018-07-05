import axios from 'axios';
// Fetch Actions
export const FETCH_POST = 'FETCH_POST';
export const FETCH_POST_SUCCESS = 'FETCH_POST_SUCCESS';
export const FETCH_POST_FALIURE = 'FETCH_POST_FALIURE';
export const REQUEST_FETCH_POST = 'REQUEST_FETCH_POST';

const POST_API_URL = 'https://jsonplaceholder.typicode.com/posts';

export function fetchPosts() {
  // const request = 
  
  return dispatch => {
    // console.log(dispatch);
    dispatch(fetchPostRequest());
    axios.get(`${POST_API_URL}`).then(
      response => {
        dispatch(fetchPostSuccess(response.data));
        return  response;
      }
    ).catch(err=>{
      dispatch(fetchPostFaliure(err));
      return err;
    })
  }

}

function fetchPostRequest() {
  return {
    type: REQUEST_FETCH_POST,
    'isFetchLoad': true
  }
}

function fetchPostSuccess(data) {
  return {
    type: FETCH_POST_SUCCESS,
    'isFetchLoad': false,
    data
  }
}


function fetchPostFaliure(err) {
  return {
    type: FETCH_POST_FALIURE,
    'isFetchLoad': true,
    err
  }
}