import React from "react";
import { NavLink } from "react-router-dom";

export default function Pass() {
  return (
    <div className="main">
      <div className="title">Welcome username!</div>

      <div className="panel2">
        <input className="input" placeholder="Current Password" />
        <input className="input" placeholder="New Password" />
        <input className="input" placeholder="Comfirm Password" />
      </div>

      <div className="button">
        <div className="p">
          <NavLink
            className="link"
            exact
            to={process.env.PUBLIC_URL + "/Account"}
          >
            <div>Back to Panel</div>
          </NavLink>
        </div>
        <div className="p">
          <NavLink
            className="link"
            exact
            to={process.env.PUBLIC_URL + "/Account"}
          >
            <div>Reset Password</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
