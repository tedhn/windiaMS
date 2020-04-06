import React, { useState } from "react";
import ReactDOM from "react-dom";

import { Switch, Route, BrowserRouter } from "react-router-dom";

import "./index.scss";
import Home from "./Home";
import Vote from "./vote";
import Login from "./login";
import Register from "./register";
import Account from "./Account";
import Donate from "./donate";
import Download from "./download";

function App() {
  let [username, setUsername] = useState("");
  let [verified, setVerification] = useState(false);
  let [loaded, setLoaded] = useState(false);

  window.addEventListener("load", (event) => {
    setLoaded(true);
  });

  return (
    <div>
      <Switch>
        <Route exact path={process.env.PUBLIC_URL + "/"}>
          <Home loaded={loaded} verified={verified} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Vote"}>
          <Vote loaded={loaded} verified={verified} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Download"}>
          <Download loaded={loaded} verified={verified} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Account"}>
          <Account
            loaded={loaded}
            verified={verified}
            setVerification={setVerification}
            username={username}
          />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Donate"}>
          <Donate loaded={loaded} verified={verified} />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Login"}>
          <Login
            loaded={loaded}
            verified={verified}
            setVerification={setVerification}
            username={username}
            setUsername={setUsername}
          />
        </Route>
        <Route exact path={process.env.PUBLIC_URL + "/Register"}>
          <Register
            loaded={loaded}
            verified={verified}
            setVerification={setVerification}
          />
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
