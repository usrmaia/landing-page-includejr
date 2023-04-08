import React from "react";
import PropTypes from "prop-types";
import "./AboutCardSimple.css";

function AboutCardSimple({ title, description }) {
  return (
    <div className="about-card-simple">
      <h1 className="font-convergence">{title}</h1>
      <p className="font-convergence">{description}</p>
    </div>
  );
}

AboutCardSimple.propTypes = {
  title: PropTypes.object.isRequired,
  description: PropTypes.object.isRequired,
};

export default AboutCardSimple;
