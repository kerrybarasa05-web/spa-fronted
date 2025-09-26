import { useState } from "react";

export default function Booking() {
  const [service, setService] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking confirmed for ${service} on ${date}`);
  };

  return (
    <div>
      <h1>Book a Session</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Select Service:
          <select value={service} onChange={(e) => setService(e.target.value)}>
            <option value="">--Choose--</option>
            <option value="Haircut">Haircut</option>
            <option value="Massage">Massage</option>
            <option value="Nail Arts">Nail Arts</option>
            <option value="Hair Dressing">Hair Dressing</option>
            <option value="Others">Others</option>
          </select>
        </label>

        <br />

        <label>
          Pick Date:
          <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </label>

        <br />

        <button type="submit">Confirm Booking</button>
      </form>
    </div>
  );
}
