import * as React from 'react';
import { Link, Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Hello from './hello';

export interface IApplicationProps {}

class Application extends React.Component<IApplicationProps, {}> {
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

export default connect<{}, {}, IApplicationProps> (mapStateToProps, mapDispatchToProps)(Application);
