import React from "react";
import "./LoggoutButton.css";

const LoggoutButton = () => {
  const handleLogout = () => {
    alert("Logout successful");
    setTimeout(() => {
      window.location.href = "/login";
    }, 1000)
  };

  return (
    <button onClick={handleLogout} className="logout-button">
      <span className="button-text">Logout</span>
      <div className="button-ripple"></div>
    </button>
  );
};

export default LoggoutButton;
