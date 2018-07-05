import React from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';

// Components
import Post from '../components/Post/index'

let  getRoute = (path,component) => <Route path={path} component={component}  />


function Routes  () {

  return (
      <Router>
          <div>
            <Switch>
            <Redirect exact from='/' to='/post' /> 
            { getRoute('/post',Post) }
            </Switch>
          </div>
      </Router>
    );
}

export default Routes;