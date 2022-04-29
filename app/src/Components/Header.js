import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

import logo from "../assets/logo.png";
import camera from "../assets/camera.png";

export default function Header() {
  function handleClick(route) {
    window.location.reload();
    window.location.href = route;
  }

  return (
    <header id="main-header">
      <div className="header-content">
        <Link to="/" onClick={() => handleClick("/")}>
          <img src={logo} alt="InstaRocket" />
        </Link>

        <Link to="/new" onClick={() => handleClick("/new")}>
          <img src={camera} alt="Enviar publicação" />
        </Link>
      </div>
    </header>
  );
}
