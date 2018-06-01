import React from "react";
import ReactDOM from "react-dom";
import "./style/index.css";
import App from "./components/App";
import registerServiceWorker from "./registerServiceWorker";
import "bootstrap/dist/css/bootstrap.min.css";
import { request, AuthenticationService } from './helper/helper'

request("/auth/token").then(response => {
  AuthenticationService.setAuthState(response.data);
});

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
