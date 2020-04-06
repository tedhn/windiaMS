import React, { useState, useEffect } from "react";
import anime from "animejs";
import AOS from "aos";
import Nav from "./navbar";
import "./download.scss";

export default function Download(props) {
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
        targets: ".download",
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

      <div className="download">
        <div className="background"></div>
        <div className="blur"></div>

        <div className="text">
          <div className="title" data-aos="fade-down">
            Download windia today!
          </div>
          <div className="subtitle" data-aos="fade-down">
            You will need to run our patcher in an empty directory to get the
            game data files.
          </div>
          <div className="subtitle2" data-aos="fade-down">
            Use the patcher to receive game updates
          </div>
          <div className="subtitle3" data-aos="fade-down">
            Note: If you face any issues, make sure to add the game's directory
            to your antivirus' (Windows Defender counts!) exclusions.
          </div>
          <div
            className="button"
            data-aos="fade-up"
            data-aos-anchor=".subtitle3"
          >
            <div>Download</div>
          </div>
        </div>
      </div>
    </div>
  );
}
