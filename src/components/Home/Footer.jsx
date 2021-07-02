import React, { useState, useEffect, useRef } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="fwaves">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#457B9D"
            fill-opacity="1"
            d="M0,128L21.8,138.7C43.6,149,87,171,131,154.7C174.5,139,218,85,262,90.7C305.5,96,349,160,393,197.3C436.4,235,480,245,524,224C567.3,203,611,149,655,149.3C698.2,149,742,203,785,208C829.1,213,873,171,916,144C960,117,1004,107,1047,117.3C1090.9,128,1135,160,1178,170.7C1221.8,181,1265,171,1309,144C1352.7,117,1396,75,1418,53.3L1440,32L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="foot">
        <div id="foot1">
          <h2>Linkonnekt</h2>
          <p> Linkonnekt is a network of Content Creators and makes discovery and Collaboration easier.</p>
        </div>
        <div id="foot2">
          <h3> Community</h3>
          <ul>
            <li>Blog</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div id="foot3">
          <h3> Contact </h3>
          <ul>
            <li>Blog</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div id="foot4"></div>
      </div>
    </div>
  );
};

export default Footer;