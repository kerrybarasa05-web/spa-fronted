import { useState } from "react";

function Booking() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const servicesList = [
    "Haircut",
    "Salon Services",
    "Massage",
    "Facial",
    "Manicure",
    "Pedicure",
    "Other Specified Services"
  ];

  const handleBooking = async (e) => {
    e.preventDefault();
    const email = localStorage.getItem("userEmail");
    if (!service || !date) return alert("Select service and date");

    const bookingData = { email, service, date };

    try {
      const res = await fetch("http://localhost:5000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });
      const data = await res.json();
      if (data.success) alert("Booking successful!");
      else alert("Booking failed: " + data.message);
    } catch (err) {
      console.error(err);
      alert("Error connecting to server");
    }
  };

  return (
    <form onSubmit={handleBooking} style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2 style={{ textAlign: "center" }}>Book a Service</h2>
      <select
        value={service}
        onChange={(e) => setService(e.target.value)}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      >
        <option value="">--Choose a service--</option>
        {servicesList.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </select>
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
      />
      <button type="submit" style={{ width: "100%", padding: "10px" }}>
        Book
      </button>
    </form>
  );
}

export default Booking;
