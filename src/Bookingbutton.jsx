import React from "react";
import { Link } from "react-router-dom";

const Bookingbutton = () => {
//   const handleNewWindow = () => {
//     window.open("/book", "_blank");
  // };

  return (
    <div className="container">
      <Link to='/bookingform'> 
      <button className="bookingbutton">
        Book Appointment
      </button>
      </Link>
      
    </div>
  );
};

export default Bookingbutton;
