import React from "react";
import PropTypes from "prop-types";
import "./ServiceCard.css";

function ServiceCard({ iconPath, title, text }) {
  return (
    <div className="service-card">
      <img src={iconPath} alt="Ícone de xadrez" />
      <h1 className="font-convergence">{title}</h1>
      <p className="font-convergence">{text}</p>
      <a src="#" className="animation-button font-book-antiqua">Detalhes</a>
    </div>
  );
}

ServiceCard.propTypes = {
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceCard;
