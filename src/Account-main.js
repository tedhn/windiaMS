import React from "react";
import { NavLink } from "react-router-dom";

export default function Main() {
  return (
    <div className="main">
      <div className="title">Welcome username!</div>
      <div className="subtitle">You currently have 0 Vote points.</div>
      <div className="subtitle2">
        Associated email: **************@gmail.com
      </div>

      <div className="button">
        <div className="p">
          <NavLink exact to={process.env.PUBLIC_URL + "/resetPassword"}>
            <div>Reset Password</div>
          </NavLink>
        </div>
        <div className="p">
          <NavLink exact to={process.env.PUBLIC_URL + "/resetPIC"}>
            <div>Reset PIC</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
