import * as React from 'react';
import { Route  } from 'react-router-dom';

import Application from './components/application';
import Hello from './components/hello';

const Routes = (
  <div>
    <Route exact={true} path="/" component={Application} />
    <Route path="/hello/:name/" component={Hello} />
  </div>
);

export default Routes;
