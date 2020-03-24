import React, { useState, useEffect } from "react";
import anime from "animejs";
import "./home.scss";

import Nav from "./navbar";

export default function Home(props) {
  let [toggle, setToggle] = useState(false);

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
        targets: ".home",
        translateX: toggle ? -300 : 0
      })
      .add(
        {
          targets: ".content",
          translateX: toggle ? -300 : 0
        },
        "-=700"
      )
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
      <div className="home">
        <div className="background">
          <div className="blur"></div>
        </div>

        <div className="text">
          <div className="image"></div>
          <div className="title">Welcome to Windia!</div>
          <div className="subtitle">A MapleStory v83 Private Server</div>
          <div className="subtitle2">
            Custome Rates / Custome Features / Mac Compatible
          </div>
        </div>
      </div>
      <div className="content">
        <div className="goals">
          WindiaMS is designed with power efficiency in mind. Featuring
          mechanics from modern MapleStory, active development, anticheat and
          much more.
        </div>

        <div className="title">
          <div>Unique Features</div>
        </div>

        <div className="pinkbean">
          <div className="image"></div>
        </div>

        <div className="table">
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

        <div className="title">
          <div>Screenshots</div>
        </div>

        <div className="screenshots">
          <div className="image">
            <svg
              className="right"
              width="75"
              height="75"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.29001 15.88L13.17 12L9.29001 8.11999C9.19742 8.02741 9.12399 7.9175 9.07388 7.79653C9.02378 7.67557 8.99799 7.54592 8.99799 7.41499C8.99799 7.28406 9.02378 7.15441 9.07388 7.03345C9.12399 6.91248 9.19742 6.80257 9.29001 6.70999C9.38259 6.61741 9.4925 6.54397 9.61346 6.49386C9.73443 6.44376 9.86408 6.41797 9.99501 6.41797C10.1259 6.41797 10.2556 6.44376 10.3765 6.49386C10.4975 6.54397 10.6074 6.61741 10.7 6.70999L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.6075 17.3927 10.4976 17.4662 10.3766 17.5164C10.2557 17.5666 10.126 17.5924 9.99501 17.5924C9.86404 17.5924 9.73436 17.5666 9.61338 17.5164C9.49241 17.4662 9.38252 17.3927 9.29001 17.3C8.91001 16.91 8.90001 16.27 9.29001 15.88Z"
                fill="#305F72"
              />
            </svg>
            <svg
              className="left"
              width="75"
              height="75"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.71 15.88L10.83 12L14.71 8.11999C14.8026 8.02741 14.876 7.9175 14.9261 7.79653C14.9762 7.67557 15.002 7.54592 15.002 7.41499C15.002 7.28406 14.9762 7.15441 14.9261 7.03345C14.876 6.91248 14.8026 6.80257 14.71 6.70999C14.6174 6.61741 14.5075 6.54397 14.3865 6.49386C14.2656 6.44376 14.1359 6.41797 14.005 6.41797C13.8741 6.41797 13.7444 6.44376 13.6235 6.49386C13.5025 6.54397 13.3926 6.61741 13.3 6.70999L8.71 11.3C8.6173 11.3925 8.54375 11.5024 8.49357 11.6234C8.44339 11.7443 8.41756 11.874 8.41756 12.005C8.41756 12.136 8.44339 12.2656 8.49357 12.3866C8.54375 12.5076 8.6173 12.6175 8.71 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"
                fill="#305F72"
              />
            </svg>
          </div>
        </div>

        <div className="invite">
          <div className="text">So what are you waiting for ?</div>
          <div className="text2">Start your adventure today!!</div>
          <div className="button">
            <div>Get Started</div>
          </div>
        </div>
      </div>
    </div>
  );
}
