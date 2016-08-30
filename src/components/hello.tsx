import * as React from 'react';

export interface HelloProps { user: string }

export class Hello extends React.Component<HelloProps, {}> {
  render() {
    return (
      <div className="hello-container">asdfasdf from {this.props.user}!</div>
    );
  }

}