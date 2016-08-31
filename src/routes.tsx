import * as React from "react";
import { IndexRoute, Route, Router  } from "react-router";

import Application from "./components/application.tsx";
import Hello from "./components/hello.tsx";

const Routes = (
  <Router>
    <Route path="/" >
      <IndexRoute component={ Application } />
      <Route path="hello/:name" component={ Hello } />
    </Route>
  </Router>
);

export default Routes;
