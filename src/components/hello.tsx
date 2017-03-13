import * as React from 'react';
import { IMatch } from 'react-router-dom';

export interface IParams { name: string; }
export interface IProps {
  match: IMatch;
}

class Hello extends React.Component<IProps, {}> {

  public render() {
    return (
      <div className="hello-container">Hello from me, {this.props.match.params.name}!</div>
    );
  }

}

export default Hello;
