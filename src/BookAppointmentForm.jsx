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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Map React fields → Spring Boot fields
    const payload = {
      fullName: form.name,
      phoneNumber: form.phone,
      vehicleMake: form.vehicleMake,
      serviceType: form.serviceType,
      appointmentDate: form.date,
    };

    try {
      const response = await fetch(
        "http://localhost:8080/api/appointments",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to submit appointment");
      }

      const data = await response.json();
      alert("Appointment submitted successfully!");
      console.log("Saved Appointment:", data);

      // Clear form after success
      setForm({
        name: "",
        phone: "",
        vehicleMake: "",
        serviceType: "",
        date: "",
      });

    } catch (error) {
      console.error(error);
      alert("Error submitting appointment");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        maxWidth: "480px",
        margin: "0 auto",
        marginTop: "100px",
        display: "flex",
        flexDirection: "column",
        gap: "12px",
        background: "#fff",
        padding: "20px",
        borderRadius: "8px",
        boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
        border: "2px solid red",
      }}
    >
      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="phone"
        placeholder="Phone Number"
        value={form.phone}
        onChange={handleChange}
        required
      />

      <input
        name="vehicleMake"
        placeholder="Vehicle Make"
        value={form.vehicleMake}
        onChange={handleChange}
        required
      />

      <input
        name="serviceType"
        placeholder="Service Type"
        value={form.serviceType}
        onChange={handleChange}
        required
      />

      <input
        type="date"
        name="date"
        value={form.date}
        onChange={handleChange}
        required
      />

      <button type="submit" style={{ padding: "10px", cursor: "pointer" }}>
        Submit Appointment
      </button>
    </form>
  );
};

export default BookAppointmentForm;
