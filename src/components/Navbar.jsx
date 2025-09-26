import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav style={{ padding: "10px", backgroundColor: "#f0f0f0" }}>
      <Link to="/" style={{ marginRight: "10px", textDecoration: "none" }}>
        Home
      </Link>
      <Link to="/services" style={{ marginRight: "10px", textDecoration: "none" }}>
        Services
      </Link>
      <Link to="/booking" style={{ marginRight: "10px", textDecoration: "none" }}>
        Booking
      </Link>
      <Link to="/login" style={{ textDecoration: "none" }}>
        Login
      </Link>
    </nav>
  );
}

export default Navbar;



