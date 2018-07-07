import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore,applyMiddleware,combineReducers } from 'redux';
import thunk from 'redux-thunk';

// Reducer
import { reducer } from './reducers/index';
import { fetchDetailPost } from './reducers/detail-post';

// Route 
import Routes from './routers/router.config'

const rootReducer = combineReducers({
  post: reducer,
  detailPost: fetchDetailPost
})

const store = createStore(rootReducer,applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <Routes />
  </Provider>
    , document.getElementById('root'));
registerServiceWorker();
