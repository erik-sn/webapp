import React from 'react';
import { Route, Router, IndexRoute } from 'react-router';

import Hello from './components/hello';
import World from './components/world';

const Routes = ( 
  <Router>
    <Route path="/" >
      <IndexRoute component={ Hello } />
      <Route path="helloworld" component={ World } />
    </Route>
  </Router>
)

export default Routes;