import React from "react";
import BookAppointmentForm from "./BookAppointmentForm";

const BookAppointmentPage = () => {
  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "40px 16px",
        background: "#f5f7fb",
      }}
    >
      <h1 style={{ textAlign: "center", marginBottom: "24px" }}>
        Book Your Appointment
      </h1>

      <BookAppointmentForm />
    </div>
  );
};

export default BookAppointmentPage;
