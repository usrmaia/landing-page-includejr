import React from "react";
import "./NavBar.css";
import LogoIncludeJr from "./assets/img/logo-includejr.png";

function NavBar() {
  let lastScrollY = window.scrollY;
  window.addEventListener("scroll", function() {
    if (window.scrollY > lastScrollY) {
      document.getElementsByClassName("nav-bar")[0].style.position = "absolute";
    } else {
      document.getElementsByClassName("nav-bar")[0].style.position = "fixed";
    }
    lastScrollY = window.scrollY;
  });

  return (
    <header className="nav-bar">
      <a href="#">
        <img src={LogoIncludeJr} alt="Logo Include Jr." />
      </a>
      <ul>
        <li><a href="#">Sobre nós</a></li>
        <li><a href="#">Serviços</a></li>
        <li><a href="#">Portifólio</a></li>
        <li><a href="#">Contatos</a></li>
      </ul>
    </header>
  );
}

export default NavBar;
