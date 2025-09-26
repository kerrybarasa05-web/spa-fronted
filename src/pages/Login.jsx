import { useState } from "react";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email) return alert("Enter an email");

    localStorage.setItem("userEmail", email);
    setLoggedIn(true); // triggers redirect
  };

  if (loggedIn) return <Navigate to="/booking" replace />;

  return (
    <form onSubmit={handleLogin}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />
      <button type="submit">Login</button>
    </form>
  );
}

export default Login;


