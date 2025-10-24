import React from "react";
import "./BackToHomeButton.css";

const BackToHomeButton = () => {
  const handleBackToHomepage = () => {
    window.location.href = "/";
  };

  return (
    <button onClick={handleBackToHomepage} className="back-to-home-button">
      <span className="button-text">Back to Homepage</span>
      <div className="button-ripple"></div>
    </button>
  );
};

export default BackToHomeButton;
