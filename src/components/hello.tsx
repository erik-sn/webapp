import * as React from 'react';
import { Route, RouteComponentProps } from 'react-router-dom';


export interface IProps extends RouteComponentProps<any> {
}

class Hello extends React.Component<IProps, {}> {

  public render() {
    console.log(this.props);
    return (
      <div className="hello-container">Hello from me {this.props.match.params.name}!</div>
    );
  }

}

export default Hello;
