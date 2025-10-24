import React, { useEffect, useState } from "react";
import "./Unauthorized.css";
import BackToHomeButton from "../../common/BackToHomeButton/BackToHomeButton";
import LoggoutButton from "../../common/LogoutButton/LoggoutButton";

const Unauthorized = () => {
  const [scanline, setScanline] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setScanline((prev) => (prev + 1) % 100);
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="unauthorized-container">
      <div className="unauthorized-content">
        <div className="security-grid">
          {[...Array(25)].map((_, i) => (
            <div key={i} className="grid-cell"></div>
          ))}
        </div>

        <div className="scanner" style={{ top: `${scanline}%` }}></div>

        <div className="lock-icon">
          <div className="lock-body">
            <div className="lock-shackle"></div>
          </div>
        </div>

        <h1 className="unauthorized-title">
          <span className="error-code">401</span>
        </h1>

        <p className="unauthorized-message">ACCESS DENIED</p>
        <p className="unauthorized-description">
          🚨 Security Protocol Activated 🚨
          <br />
          Your credentials are insufficient to access this restricted area.
          Please verify your authorization level or contact system
          administrator.
        </p>

        <div className="warning-indicators">
          <div className="indicator indicator-1"></div>
          <div className="indicator indicator-2"></div>
          <div className="indicator indicator-3"></div>
        </div>

        <div className="terminal">
          <div className="terminal-header">
            <span className="terminal-title">SECURITY_LOG.exe</span>
            <div className="terminal-controls">
              <span className="control minimize"></span>
              <span className="control maximize"></span>
              <span className="control close"></span>
            </div>
          </div>
          <div className="terminal-body">
            <p className="terminal-line">
              <span className="prompt">$</span> checking_credentials...
            </p>
            <p className="terminal-line error">
              <span className="prompt">!</span> UNAUTHORIZED_ACCESS_ATTEMPT
            </p>
            <p className="terminal-line">
              <span className="prompt">$</span> redirecting_to_login...
            </p>
          </div>
        </div>

        <div className="button-container">
          <BackToHomeButton />
          <LoggoutButton />
        </div>
      </div>
    </div>
  );
};

export default Unauthorized;
