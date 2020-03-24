import React, { useState, useEffect } from "react";
import anime from "animejs";

import "./register.scss";
import Nav from "./navbar";

export default function Register() {
  let [toggle, setToggle] = useState(false);
  let [loaded, setLoaded] = useState(false);

  window.addEventListener("load", event => {
    setLoaded(true);
  });
  const timeline = anime.timeline({
    duration: 700,
    easing: "easeOutExpo"
  });

  const clickerinos = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    timeline
      .add({
        targets: ".login",
        translateX: toggle ? -300 : 0
      })
      .add(
        {
          targets: ".hamburger",
          translateX: toggle ? -300 : 0,
          rotate: toggle ? -90 : 0
        },
        "-=700"
      );
  }, [toggle, timeline]);

  return (
    <div className="container">
      <svg
        className="hamburger"
        onClick={clickerinos}
        width="50"
        height="50"
        viewBox="0 0 75 75"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M15 18H60V24H15V18Z" fill="#07171D" />
        <path d="M15 33H60V39H15V33Z" fill="#07171D" />
        <path d="M15 48H60V54H15V48Z" fill="#07171D" />
      </svg>
      <Nav loaded={loaded} />
      <div className="login">
        <div className="background">
          <div className="blur"></div>
        </div>

        <div className="panel">
          <div className="input">
            <div className="text">Register</div>
            <input className="username" placeholder="Username" />
            <input className="password" placeholder="Password" />
            <input className="email" placeholder="Email" />

            <div className="button">
              <div>Sign up</div>
            </div>
            <div className="link">
              Already have an account ? Log in <span>here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
