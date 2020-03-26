import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./index.scss";
import Home from "./Home";
import Vote from "./vote";
import Login from "./login";
import Register from "./register";
import Account from "./Account";
import Pass from "./Account-pass";
import Pic from "./Account-pic";

function App() {
  let [loaded, setLoaded] = useState(false);

  window.addEventListener("load", event => {
    setLoaded(true);
  });

  return (
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home loaded={loaded} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Vote"}>
          <Vote loaded={loaded} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Download"}>
          <div>page in progess</div>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Account"}>
          <Account loaded={loaded} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Login"}>
          <Login loaded={loaded} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Donate"}>
          <div>page in progess</div>
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Register"}>
          <Register loaded={loaded} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Donate"}>
          <Pass loaded={loaded} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Register"}>
          <Pic loaded={loaded} />
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
