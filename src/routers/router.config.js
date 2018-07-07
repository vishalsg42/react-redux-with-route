import React from 'react';
import { BrowserRouter as Router, Route, Redirect,Switch } from 'react-router-dom';

// Components
import Post from '../components/Post/index'
import PostDetail from '../components/PostDetail/index'

let  getRoute = (path,component) => <Route exact path={path} component={component}  />


const Routes = () => {

  return (
      <Router>
          <div>
            <Switch>
              <Redirect exact from='/' to='/post' /> 
              { getRoute('/post',Post) }
              { getRoute('/post/:id',PostDetail) }
            </Switch>
          </div>
      </Router>
    );
}

export default Routes;