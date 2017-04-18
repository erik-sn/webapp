import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';

class Hello extends React.Component<RouteComponentProps<any>, {}> {

  public render() {
    return (
      <div className="hello-container">Hello from me {this.props.match.params.name}!</div>
    );
  }

}

export default Hello;
