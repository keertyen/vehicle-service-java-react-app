import React, { useState } from 'react';
import Navbar from './Navbar';
import Bnner from './Bnner';
import RideGrid from './RideTile';
import Bookingbutton from './Bookingbutton';
import BookAppointmentForm from './BookAppointmentForm';

const App = () => {
  const [showForm, setShowForm] = useState(false);

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmitAppointment = (data) => {
    console.log("Appointment form submitted:", data);

    // In future → send to backend API
    // fetch("http://localhost:8080/appointments", { method: "POST", body: JSON.stringify(data) })

    setShowForm(false);
  };

  return (
    <div>
      <Navbar />
      <Bnner />
      <RideGrid />

      {/* Pass click function into your Bookingbutton component */}
      <Bookingbutton onClick={handleOpenForm} />

      {/* Show form only when user clicks the button */}
      {showForm && (
        <BookAppointmentForm 
          onClose={handleCloseForm} 
          onSubmit={handleSubmitAppointment} 
        />
      )}
    </div>
  );
};

export default App;
