import * as React from 'react';
import { connect } from 'react-redux';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Hello from './hello';

class Application extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="application-container">
        <Switch>
          <Route exact={true} path="/">
            <div>Go to `/hello/"your name"/` to see react router working</div>
          </Route>
          <Route path="/hello/:name/" component={Hello} />
        </Switch>
      </div>
    );
  }
}

function mapStateToProps(state: any) {
  return {
  };
}

function mapDispatchToProps(dispatch: any) {
    return bindActionCreators({}, dispatch);
}

export default connect<{}, {}, {}> (mapStateToProps, mapDispatchToProps)(Application);
