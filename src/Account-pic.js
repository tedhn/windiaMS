import React from "react";
import { NavLink } from "react-router-dom";

export default function Pic() {
  return (
    <div className="main">
      <div className="title">Welcome username!</div>

      <div className="panel2">
        <input className="input" placeholder="Current PIC" />
        <input className="input" placeholder="New PIC" />
        <input className="input" placeholder="Comfirm PIC" />
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
            <div>Reset PIC</div>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
