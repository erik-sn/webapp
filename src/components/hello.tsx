import * as React from "react";


export interface IParams { name: String; }

export interface IHelloProps { params: IParams; route: Object; }

export default class Hello extends React.Component<IHelloProps, {}> {

  public render() {
    return (
      <div className="hello-container">Hello from {this.props.params.name}!</div>
    );
  }

}
