import React, { useState } from "react";

import "./navbar.scss";

export default function Nav(props) {
  return <div className="nav">
    <div className='list'>
      <div className='item'><svg width="75" height="75" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M75 23.4375C56.9344 23.4375 42.1875 38.1844 42.1875 56.25C42.1875 67.5469 47.9531 77.5875 56.6906 83.4984C39.9703 90.6703 28.125 107.25 28.125 126.562H37.5C37.5 105.797 54.2344 89.0625 75 89.0625C95.7656 89.0625 112.5 105.797 112.5 126.562H121.875C121.875 107.25 110.03 90.6656 93.3094 83.4938C97.77 80.4845 101.425 76.4273 103.953 71.6777C106.482 66.928 107.807 61.6308 107.812 56.25C107.812 38.1844 93.0656 23.4375 75 23.4375ZM75 32.8125C87.9984 32.8125 98.4375 43.2516 98.4375 56.25C98.4375 69.2484 87.9984 79.6875 75 79.6875C62.0016 79.6875 51.5625 69.2484 51.5625 56.25C51.5625 43.2516 62.0016 32.8125 75 32.8125Z" fill="#FCF9EA"/>
</svg>
</div>
    <div className='item'>Register</div>
    <div className='item'>Download</div>
    <div className='item'>Vote</div>
    <div className='item'>Donate</div>
    <div className='item'>Discord</div>
    <div className='item'>Forum</div>
    </div>
  </div>;
}
