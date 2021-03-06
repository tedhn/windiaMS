import React, { useState, useEffect } from "react";
import anime from "animejs";
import AOS from "aos";
import Nav from "./navbar";
import "./donate.scss";

export default function Donate(props) {
  let [toggle, setToggle] = useState(false);

  const timeline = anime.timeline({
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

  useEffect(() => {
    timeline
      .add({
        targets: ".donate",
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

      <div className="donate">
        <div className="background">
          <div className="blur"></div>
        </div>

        <div className="text">
          <div className="title" data-aos="fade-down">
            Donate to Windia
          </div>
          <div
            className="subtitle"
            data-aos="fade-down"
            data-aos-anchor=".title"
          >
            Credits can be used for in-game benefits
          </div>
          <div
            className="subtitle2"
            data-aos="fade-down"
            data-aos-anchor=".title"
          >
            After purchasing credits, wait up to 5 minutes and check your email
            inbox.
          </div>
          <div
            className="subtitle3"
            data-aos="fade-down"
            data-aos-anchor=".title"
          >
            <span>Note : </span>All purchases of credits are final and cannot be
            refunded. Attempted chargebacks will lead to accounts being
            permanently banned with no chance of returning.
          </div>
          <div className="button" data-aos="fade-up" data-aos-anchor=".title">
            <div>Donate</div>
          </div>
        </div>
      </div>
    </div>
  );
}
