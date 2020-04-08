import React, { useState, useEffect } from "react";
import anime from "animejs";
import "./login.scss";
import AOS from "aos";
import Nav from "./navbar";

import { NavLink } from "react-router-dom";

export default function Login(props) {
  let [toggle, setToggle] = useState(false);
  let [password, setPassword] = useState("");
  let [valid, setValid] = useState(false);
  let [msg, setMsg] = useState("");

  let timeline = anime.timeline({
    duration: 700,
    easing: "easeOutExpo",
  });

  AOS.init({
    duration: 700,
    easing: "ease",
    mirror: true,
    anchorPlacement: "top-bottom",
  });

  const clickerinos = () => {
    setToggle(!toggle);
  };
  const updateUsername = (e) => {
    props.setUsername(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const checkvalid = () => {
    if (props.username === "htehnd" && password === "incorrect") {
      setMsg("Logged in!");
      setValid(true);
      props.setVerification(true);
      return true;
    } else {
      timeline = anime.timeline({
        duration: 700,
        easing: "easeOutExpo",
      });
      setMsg("Password is incorrect");
      setValid(false);
      timeline.add({
        targets: ".button",
        translateX: [5, -5, 0],
        duration: 300,
      });
      return false;
    }
  };

  useEffect(() => {
    timeline
      .add({
        targets: ".login",
        translateX: toggle ? -300 : 0,
      })
      .add(
        {
          targets: ".hamburger",
          translateX: toggle ? -300 : 0,
          rotate: toggle ? -90 : 0,
        },
        "-=700"
      );
  }, [toggle, timeline]);

  if (!valid) {
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
        <Nav loaded={props.loaded} verified={props.verified} />
        <div className="login">
          <div className="background">
            <div className="blur"></div>
          </div>
          <div className="panel">
            <div className="input">
              <div className="text" data-aos="fade-down">
                Login
              </div>

              <div className="error failed">{msg}</div>
              <input
                className="username"
                placeholder="Username"
                data-aos="fade-left"
                data-aos-anchor=".text"
                type="text"
                onChange={updateUsername}
              />
              <input
                className="password"
                placeholder="Password"
                data-aos="fade-left"
                data-aos-anchor=".text"
                type="password"
                onChange={updatePassword}
              />

              <div
                className="button"
                data-aos="fade-up"
                data-aos-anchor=".text"
                onClick={checkvalid}
              >
                <div>Log In</div>
              </div>

              <div className="link" data-aos="fade-up" data-aos-anchor=".text">
                Dont have an account ? Register
                <NavLink
                  exact
                  to={process.env.PUBLIC_URL + "/Register"}
                  className="a"
                >
                  <span>here</span>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
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
        <Nav loaded={props.loaded} verified={props.verified} />
        <div className="login">
          <div className="background">
            <div className="blur"></div>
          </div>
          <div className="panel">
            <div className="input">
              <div className="text" data-aos="fade-down">
                Success
              </div>

              <div className="error success">{msg}</div>

              <NavLink
                className="a"
                exact
                to={process.env.PUBLIC_URL + "/Account"}
              >
                <div className="button" onClick={checkvalid}>
                  <div>Go to Account Panel</div>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
