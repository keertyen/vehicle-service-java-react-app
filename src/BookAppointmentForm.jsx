import React, { useState } from "react";

const BookAppointmentForm = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    vehicleMake: "",
    serviceType: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Appointment submitted!");
    console.log("Appointment:", form);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        marginTop:"100px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        border:"2px solid red"
      }}
    >
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
      />
      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
      />
      <input
        name="vehicleMake"
        placeholder="Vehicle Make"
        value={form.vehicleMake}
        onChange={handleChange}
      />
      <input
        name="serviceType"
        placeholder="Service Type"
        value={form.serviceType}
        onChange={handleChange}
      />
      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
      />

      <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
        Submit Appointment
      </button>
    </form>
  );
};

export default BookAppointmentForm;
