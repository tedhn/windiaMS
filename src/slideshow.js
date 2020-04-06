import React, { useState, useEffect } from "react";

import "./slideshow.scss";
import ss1 from "./images/ss1.png";
import ss2 from "./images/ss2.png";
import ss3 from "./images/ss3.png";

export default function Slideshow() {
  let [count, setCount] = useState(1);
  let [one, setOne] = useState(false);
  let [two, setTwo] = useState(false);
  let [three, setThree] = useState(false);

  const goPre = () => {
    let num = count - 1;

    if (num < 1) {
      setCount(3);
    } else {
      setCount(num);
    }
  };
  const goNext = () => {
    setCount((count + 1) % 3);
  };

  useEffect(() => {
    console.log(count);
    if (count === 0) {
      setOne(true);
      setTwo(false);
      setThree(false);
    } else if (count === 1) {
      setOne(false);
      setTwo(true);
      setThree(false);
    } else if (count === 2) {
      setOne(false);
      setTwo(false);
      setThree(true);
    }
  });

  return (
    <div className="slideshow">
      <svg
        className="left"
        width="75"
        height="75"
        viewBox="0 0 24 24"
        fill="none"
        onClick={goPre}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.71 15.88L10.83 12L14.71 8.11999C14.8026 8.02741 14.876 7.9175 14.9261 7.79653C14.9762 7.67557 15.002 7.54592 15.002 7.41499C15.002 7.28406 14.9762 7.15441 14.9261 7.03345C14.876 6.91248 14.8026 6.80257 14.71 6.70999C14.6174 6.61741 14.5075 6.54397 14.3865 6.49386C14.2656 6.44376 14.1359 6.41797 14.005 6.41797C13.8741 6.41797 13.7444 6.44376 13.6235 6.49386C13.5025 6.54397 13.3926 6.61741 13.3 6.70999L8.71 11.3C8.6173 11.3925 8.54375 11.5024 8.49357 11.6234C8.44339 11.7443 8.41756 11.874 8.41756 12.005C8.41756 12.136 8.44339 12.2656 8.49357 12.3866C8.54375 12.5076 8.6173 12.6175 8.71 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z"
          fill="#ffffff"
        />
      </svg>
      <img className={one ? "image show" : "image"} src={ss1} />
      <img className={two ? "image show" : "image"} src={ss2} />
      <img className={three ? "image show" : "image"} src={ss3} />
      <svg
        className="right"
        width="75"
        height="75"
        viewBox="0 0 24 24"
        fill="none"
        onClick={goNext}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M9.29001 15.88L13.17 12L9.29001 8.11999C9.19742 8.02741 9.12399 7.9175 9.07388 7.79653C9.02378 7.67557 8.99799 7.54592 8.99799 7.41499C8.99799 7.28406 9.02378 7.15441 9.07388 7.03345C9.12399 6.91248 9.19742 6.80257 9.29001 6.70999C9.38259 6.61741 9.4925 6.54397 9.61346 6.49386C9.73443 6.44376 9.86408 6.41797 9.99501 6.41797C10.1259 6.41797 10.2556 6.44376 10.3765 6.49386C10.4975 6.54397 10.6074 6.61741 10.7 6.70999L15.29 11.3C15.68 11.69 15.68 12.32 15.29 12.71L10.7 17.3C10.6075 17.3927 10.4976 17.4662 10.3766 17.5164C10.2557 17.5666 10.126 17.5924 9.99501 17.5924C9.86404 17.5924 9.73436 17.5666 9.61338 17.5164C9.49241 17.4662 9.38252 17.3927 9.29001 17.3C8.91001 16.91 8.90001 16.27 9.29001 15.88Z"
          fill="#ffffff"
        />
      </svg>
    </div>
  );
}
