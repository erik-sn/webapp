import * as React from "react";
import * as ReactDOM from "react-dom";
import { Router, browserHistory } from "react-router";

import router from "./routes.tsx";

ReactDOM.render(<Router history={browserHistory}>{router}</Router>,
document.getElementById("react-container"));
