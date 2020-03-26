import React, { useState, useEffect } from "react";
import anime from "animejs";
import "./login.scss";
import AOS from "aos";
import Nav from "./navbar";

export default function Login(props) {
  let [toggle, setToggle] = useState(false);
  let [valid, setValid] = useState(true);

  const timeline = anime.timeline({
    duration: 700,
    easing: "easeOutExpo"
  });

  AOS.init({
    duration: 700,
    easing: "ease",
    mirror: true,
    anchorPlacement: "top-bottom"
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
      <Nav loaded={props.loaded} />
      <div className="login">
        <div className="background">
          <div className="blur"></div>
        </div>

        <div className="panel">
          <div className="input">
            <div className="text" data-aos="fade-down">
              Login
            </div>
            <input
              className="username"
              placeholder="Username"
              data-aos="fade-left"
            />
            <input
              className="password"
              placeholder="Password"
              data-aos="fade-left"
            />

            <div
              className="button"
              data-aos="fade-up"
              data-aos-anchor=".password"
            >
              <div>Log in</div>
            </div>
            <div
              className="link"
              data-aos="fade-up"
              data-aos-anchor=".password"
            >
              Dont have an account ? Register <span>here</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
