if (process.env.BROWSER) {
  require("../sass/style.scss");
}

import * as React from "react";

export default class Application extends React.Component<{}, {}> {
  public render() {
    return (
      <div className="application-container">Go to /hello to see react router working</div>
    );
  }

}
