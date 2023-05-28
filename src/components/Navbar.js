import React from "react";
import logo from "../img/LogoHeader.jpg"
import "../css/Navbar.css";

function Navbar() {
  return (
    <nav class="navbar bg-body-tertiary background">
      <div class="container">
        <a class="navbar-brand" href="#">
          <img
            src={logo}
            alt="Cumple Pau logo"
            width="220"
          />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
