import React, { useState, useEffect } from "react";
import anime from "animejs";

import "./Account.scss";

import Nav from "./navbar";
import { NavLink } from "react-router-dom";

export default function Account(props) {
  let [toggle, setToggle] = useState(false);
  let [main, setMain] = useState(true);
  let [pass, setPass] = useState(false);
  let [pic, setPic] = useState(false);

  const timeline = anime.timeline({
    duration: 700,
    easing: "easeOutExpo",
  });

  const clickerinos = () => {
    setToggle(!toggle);
  };
  const goMain = () => {
    setMain(true);
    setPass(false);
    setPic(false);
  };
  const goPass = () => {
    setMain(false);
    setPass(true);
    setPic(false);
  };
  const goPic = () => {
    setMain(false);
    setPass(false);
    setPic(true);
  };

  useEffect(() => {
    timeline
      .add({
        targets: ".account",
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

  if (props.verified) {
    if (main) {
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
          <div className="account">
            <div className="background">
              <div className="blur"></div>
            </div>
            <div className="panel">
              <Main
                goPass={goPass}
                goPic={goPic}
                username={props.username}
                setVerification={props.setVerification}
              />
            </div>
          </div>
        </div>
      );
    } else if (pass) {
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
          <div className="account">
            <div className="background">
              <div className="blur"></div>
            </div>
            <div className="panel">
              <Pass goMain={goMain} />
            </div>
          </div>
        </div>
      );
    } else if (pic) {
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
          <div className="account">
            <div className="background">
              <div className="blur"></div>
            </div>
            <div className="panel">
              <Pic goMain={goMain} />
            </div>
          </div>
        </div>
      );
    }
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
        <div className="account">
          <div className="background">
            <div className="blur"></div>
          </div>
          <div className="panel">
            <Error />
          </div>
        </div>
      </div>
    );
  }
}

function Error() {
  return (
    <div className="main">
      <div className="title">Please log into your account.</div>
      <NavLink exact to={process.env.PUBLIC_URL + "/Login"} className="a">
        <div className="button">
          <div>Log in</div>
        </div>
      </NavLink>
    </div>
  );
}

function Main(props) {
  const logout = () => {
    props.setVerification(false);
  };

  return (
    <div className="main">
      <div className="title">Welcome {props.username}</div>
      <div className="subtitle">You currently have 0 Vote points.</div>
      <div className="subtitle2">Associated email: {props.email}</div>
      <div className="button m">
        <div className="p">
          <div onClick={props.goPass}>Reset Password</div>
        </div>
        <div className="p">
          <div onClick={props.goPic}>Reset PIC</div>
        </div>

        <div className="p">
          <div onClick={logout}>Log Out</div>
        </div>
      </div>
    </div>
  );
}

function Pass(props) {
  return (
    <div className="main">
      <div className="title">Change your password</div>
      <div className="panel2">
        <input className="input" placeholder="Current Password" />
        <input className="input" placeholder="New Password" />
        <input className="input" placeholder="Comfirm Password" />
      </div>

      <div className="button">
        <div className="p">
          <div onClick={props.goMain}>Cancel</div>
        </div>
        <div className="p">
          <div>Confirm</div>
        </div>
      </div>
    </div>
  );
}

function Pic(props) {
  return (
    <div className="main">
      <div className="title">Change your PIC</div>

      <div className="panel2">
        <input className="input" placeholder="Current PIC" />
        <input className="input" placeholder="New PIC" />
        <input className="input" placeholder="Comfirm PIC" />
      </div>

      <div className="button">
        <div className="p">
          <div onClick={props.goMain}>Cancel</div>
        </div>
        <div className="p">
          <div>Confirm</div>
        </div>
      </div>
    </div>
  );
}
