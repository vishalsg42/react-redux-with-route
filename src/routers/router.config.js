import React from 'react';
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Components
import DisplayPost from '../components/DisplayPost/index'

let  getRoute = (path,component) => <Route path={path} component={component}  />


function Routes  () {

  return (
      <Router>
          <div>
            <Redirect from='/' to='/home' /> 
            { getRoute('/home',DisplayPost) }
          </div>
      </Router>
    );
}

export default Routes;