import React, { useState, useEffect } from "react";
import anime from "animejs";
import AOS from "aos";
import "./register.scss";
import Nav from "./navbar";

import { NavLink } from "react-router-dom";

export default function Register(props) {
  let [toggle, setToggle] = useState(false);
  let [username, setUsername] = useState("");
  let [password, setPassword] = useState("");
  let [cpassword, setCPassword] = useState("");
  let [email, setEmail] = useState("");
  let [valid, setValid] = useState(false);
  let [msg, setMsg] = useState("");

  const timeline = anime.timeline({
    duration: 700,
    easing: "easeOutExpo",
  });

  AOS.init({
    duration: 1000,
    easing: "ease",
    mirror: true,
    anchorPlacement: "top-bottom",
  });

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };
  const updatePassword = (e) => {
    setPassword(e.target.value);
  };
  const updateCPassword = (e) => {
    setCPassword(e.target.value);
  };
  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const clickerinos = () => {
    setToggle(!toggle);
  };

  const checkvalid = () => {
    if (password !== cpassword) {
      setMsg("Passwords do not match");
      setValid(false);
      return false;
    } else if (!email.includes(".com") || !email.include("@")) {
      setMsg("Email does not exist");
      setValid(false);
      return false;
    } else {
      setMsg("Registered");
      setValid(true);
      return true;
    }
  };

  useEffect(() => {
    timeline
      .add({
        targets: ".register",
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
      <div className="register">
        <div className="background">
          <div className="blur"></div>
        </div>

        <div className="panel">
          <div className="input">
            <div className="text" data-aos="fade-down">
              Register
            </div>

            <div className={valid ? "error success" : "error failed"}>
              {msg}
            </div>
            <input
              className="username"
              placeholder="Username"
              data-aos="fade-right"data-aos-anchor=".text"
              onChange={updateUsername}
            />
            <input
              className="password"
              placeholder="Password"
              type="password"
              data-aos="fade-right"data-aos-anchor=".text"
              onChange={updatePassword}
            />
            <input
              className="password"
              type="password"
              placeholder="Confirm Password"
              data-aos="fade-right"
              data-aos-anchor=".text"
              onChange={updateCPassword}
            />
            <input
              className="email"
              placeholder="Email"
              data-aos="fade-right"
              data-aos-anchor=".text"
              onChange={updateEmail}
            />

            <div
              className="button"
              data-aos="fade-up"
              data-aos-anchor=".text"
              onClick={checkvalid}
            >
              <div>Sign up</div>
            </div>
            <div
              className="link"
              data-aos="fade-up"
              data-aos-anchor=".text"
            >
              Already have an account ? Log in
              <NavLink
                exact
                to={process.env.PUBLIC_URL + "/Login"}
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
}
