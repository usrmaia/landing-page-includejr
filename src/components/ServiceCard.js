import React from "react";
import PropTypes from "prop-types";
import "./ServiceCard.css";

function ServiceCard({ iconPath, title, text }) {
  return (
    <div className="service-card">
      <img src={iconPath} alt="Ícone de xadrez" />
      <h1>{title}</h1>
      <p>{text}</p>
      <a src="#">Detalhes</a>
    </div>
  );
}

ServiceCard.propTypes = {
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default ServiceCard;
