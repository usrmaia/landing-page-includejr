import React from "react";
import PropTypes from "prop-types";
import "./BenefitsCard.css";

function BenefitsCard({ iconPath, title }) {
  return (
    <div className="benefits-card">
      <div>
        <img src={iconPath} />
      </div>
      <div>
        <h1 className="font-convergence">{title}</h1>
      </div>
    </div>
  );
}

BenefitsCard.propTypes = {
  iconPath: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default BenefitsCard;
