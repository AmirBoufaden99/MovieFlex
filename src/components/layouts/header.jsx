import "../../styles/header.css";
import React from "react";
import { Link } from "react-router-dom";


export default function header() {
  return (
    <div className="headerContainer">
      <div id="siteLogo">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt="Logo"
        />
      </div>
      <div id="links">
        <ul>
          <li>
            <Link className="navBar" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="navBar" to="">
              Films
            </Link>
          </li>
          <li>
            <Link className="navBar" to="">
              Series
            </Link>
          </li>
          <li>
            <Link className="navBar" to="">
              Blog
            </Link>
          </li>
          <li>
            <Link className="navBar" to="">
              Contact Us
            </Link>
          </li>
        </ul>
      </div>
      <div id="login">
        <a href="https://google.com">Login</a>
      </div>
    </div>
  );
}
