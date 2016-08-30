if (process.env.BROWSER) {
  require("../sass/style.scss");
}

import * as React from "react";

export interface IHelloProps { user: string; }

export class Hello extends React.Component<IHelloProps, {}> {
  public render() {
    return (
      <div className="hello-container">Hello from {this.props.user}!</div>
    );
  }

}
