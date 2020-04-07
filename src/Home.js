import React, { useState, useEffect } from "react";
import anime from "animejs";
import AOS from "aos";
import "./home.scss";

import Nav from "./navbar";
import Slideshow from "./slideshow.js";
import { NavLink } from "react-router-dom";

export default function Home(props) {
  let [toggle, setToggle] = useState(false);

  AOS.init({
    duration: 700,
    easing: "ease",
    mirror: false,
    anchorPlacement: "top-bottom",
  });

  const timeline = anime.timeline({
    duration: 700,
    easing: "easeOutExpo",
  });

  const clickerinos = () => {
    setToggle(!toggle);
  };

  useEffect(() => {
    timeline
      .add({
        targets: ".home",
        translateX: toggle ? -300 : 0,
      })
      .add(
        {
          targets: ".content",
          translateX: toggle ? -300 : 0,
        },
        "-=700"
      )
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
      <div className="home">
        <div className="background">
          <div className="blur"></div>
        </div>

        <div
          id="text"
          data-aos="fade-up"
          data-aos-duration="1500"
          data-aos-mirror="false"
        >
          <div className="image"></div>
          <div className="title">Welcome to Windia!!</div>
          <div className="subtitle">A MapleStory v83 Private Server</div>
          <div className="subtitle2">
            <span> Custome Rates </span> / <span> Custome Features </span>/
            <span> Mac Compatible </span>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="goals" data-aos="fade-up" data-aos-mirror="false">
          WindiaMS is designed with power efficiency in mind. Featuring
          mechanics from modern MapleStory, active development, anticheat and
          much more.
        </div>

        <div className="title" data-aos="fade-up">
          <div>Unique Features</div>
        </div>

        <div className="pinkbean" data-aos="fade-right">
          <div className="image"></div>
        </div>

        <div className="table" data-aos="fade-left">
          <ul>
            <li>Mac / Linux Compability</li>
            <li>
              Skills revamped for the sake of fun, and balancing purposes.
            </li>
            <li>Damage skins !!! </li>
            <li>Buffed monsters and bosses.</li>
            <li>255 Level Cap</li>
            <li>Our very own Ironman mode and job</li>
          </ul>
        </div>

        <div className="title s" data-aos="fade-down">
          <div>Screenshots</div>
        </div>

        <div className="screenshots" data-aos="zoom-in-up">
          <Slideshow />
        </div>

        <div className="invite" data-aos="fade-up">
          <div className="text">So what are you waiting for ?</div>
          <div className="text2">Start your adventure today!!</div>
          <NavLink
            className="a"
            exact
            to={process.env.PUBLIC_URL + "/Download"}
          >
            <div className="button">
              <div>Get Started</div>
            </div>
          </NavLink>
        </div>

        <div className="footer">
          <ul>
            <a
              href="https://forum.windia.me/index.php?threads/frequently-asked-questions.13/"
              className="a"
            >
              FAQ
            </a>

            <a
              href="https://forum.windia.me/index.php?threads/windias-terms-of-service.12/"
              className="a"
            >
              ToS & Rules
            </a>

            <a
              href="https://forum.windia.me/index.php?forums/guides.24/"
              className="a"
            >
              Guides
            </a>

            <NavLink exact to={process.env.PUBLIC_URL + "/Vote"} className="a">
              Vote for Us
            </NavLink>
          </ul>

          <div className="rights">
            © 2019 - 2020 WindiaMS. All Rights Reserved
          </div>
        </div>
      </div>
    </div>
  );
}
