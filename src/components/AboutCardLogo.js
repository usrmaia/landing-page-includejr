import React from "react";
import PropTypes from "prop-types";
import "./AboutCardLogo.css";

function AboutCardLogo({ logo, title, caption }) {
  return (
    <div className="about-card-logo">
      <div>
        <img src={logo} alt="Logo" />
      </div>
      <h1>{title}</h1>
      <h2>{caption}</h2>
    </div>
  );
}

AboutCardLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  caption: PropTypes.string.isRequired,
};

export default AboutCardLogo;
