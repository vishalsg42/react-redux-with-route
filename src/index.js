import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

// Redux
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

// Reducer
import { reducer } from './reducers/index';

const store = createStore(reducer);
ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
