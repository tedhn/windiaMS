import React from "react";
import ReactDOM from "react-dom";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./index.scss";
import Home from "./Home";
import Vote from "./vote";
import Login from "./login";
import Register from "./register";
import Account from "./Account";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Vote"}>
          <Vote />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Download"}>
          <div>page in progess</div>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Login"}>
          <Login />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Donate"}>
          <div>page in progess</div>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Register"}>
          <Register />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Account"}>
          <Account />
        </Route>
      </Switch>
    </div>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
