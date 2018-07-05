import  {
    FETCH_POST_FALIURE,
    FETCH_POST_SUCCESS,
    REQUEST_FETCH_POST
} from '../actions/index'

const INITIAL_STATE = {
  post:'',
}

export const  reducer = (previousState = INITIAL_STATE ,actions)=> {
  
  switch(actions.type) {
    case REQUEST_FETCH_POST:
    return {
      ...previousState,
      'isFetchLoad': true
    }
    case FETCH_POST_SUCCESS:
    // console.log(actions);
    const data = actions.data.splice(0,10)
    return {
            'post': data,
            'isFetchLoad': false
          }
        case FETCH_POST_FALIURE:
          return {
            ...previousState,
            'isFetchLoad': true
            
          }
        default: 
          return previousState;
    }
}