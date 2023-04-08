import React from "react";
import PropTypes from "prop-types";
import "./Timeline.css";

function Timeline({ events }) {
  return (
    <div className="timeline">
      {events.map((event) => (
        <div className="timeline-event" key={event.id}>
          <div className="timeline-event-order">{event.order}</div>
          <div className="timeline-event-description font-convergence">{event.description}</div>
        </div>
      ))}
    </div>
  );
}

Timeline.propTypes = {
  events: PropTypes.object.isRequired,
};

export default Timeline;
