import React from "react";
import PropTypes from "prop-types";
import "./AboutCardList.css";

function AboutCardList({ title, list }) {
  return (
    <div className="about-card-list">
      <h1>{title}</h1>
      {list}
    </div>
  );
}

AboutCardList.propTypes = {
  title: PropTypes.object.isRequired,
  list: PropTypes.object.isRequired,
};

export default AboutCardList;
