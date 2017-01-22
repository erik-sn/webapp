import * as React from 'react';


export interface IParams { name: String; }
export interface IProps { params: IParams; }

class Hello extends React.Component<IProps, {}> {

  public render() {
    return (
      <div className="hello-container">Hello from {this.props.params.name}!</div>
    );
  }

}

export default Hello;
