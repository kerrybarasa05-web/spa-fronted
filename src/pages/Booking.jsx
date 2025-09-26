import { useState } from "react";

function Booking() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

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
    if (!email) {
      setMessage("❌ You must be logged in to book.");
      return;
    }

    if (!service || !date) {
      setMessage("❌ Please select a service and date.");
      return;
    }

    setLoading(true);
    setMessage("");

    const bookingData = { email, service, date };

    try {
      const res = await fetch("http://localhost:4000/book", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(bookingData),
      });

      const data = await res.json();

      if (data.success) {
        setMessage("✅ Booking successful!");
        setService("");
        setDate("");
      } else {
        setMessage("❌ Booking failed: " + data.message);
      }
    } catch (err) {
      console.error("Booking error:", err);
      setMessage("❌ Error connecting to server.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleBooking}
      style={{
        maxWidth: "400px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px"
      }}
    >
      <h2>Book a Service</h2>
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

      <button
        type="submit"
        style={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#007bff",
          color: "#fff",
          border: "none",
          borderRadius: "4px"
        }}
        disabled={loading}
      >
        {loading ? "Booking..." : "Book"}
      </button>

      {message && (
        <p style={{ marginTop: "10px", color: message.startsWith("✅") ? "green" : "red" }}>
          {message}
        </p>
      )}
    </form>
  );
}

export default Booking;
