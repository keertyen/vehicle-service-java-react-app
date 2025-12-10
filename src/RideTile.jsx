import React from "react";
import { rideEvents } from "./RideEvents";

const RideTile = ({ event }) => {
  return (
    <div className="ride-card">
      <div className="status-badge">{event.status}</div>

      <img src={event.image} alt={event.title} className="ride-image" />

      <div className="ride-content">
        <h3>{event.title}</h3>

        <p className="ride-location">
          {event.iconLocation} {event.location}
        </p>

        <p className="ride-dates">
          {event.iconCalendar} {event.dates}
        </p>

        <a href={event.knowMoreLink} className="know-more">
          KNOW MORE
        </a>
      </div>
    </div>
  );
};

const RideGrid = () => {
  return (
    <div className="ride-grid">
      {rideEvents.map((e) => (
        <RideTile key={e.id} event={e} />
      ))}
    </div>
  );
};

export default RideGrid;
