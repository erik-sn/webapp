import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';

import Hello from './hello';

// eslint-disable-next-line
class Application extends Component {
  render() {
    return (
      <div className="application-container">
        <Switch>
          <Route exact path="/">
            <div>Go to `/hello/**your name**/` to see react router working</div>
          </Route>
          <Route path="/hello/:name/" component={Hello} />
        </Switch>
      </div>
    );
  }
}

// eslint-disable-next-line
function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Application);
