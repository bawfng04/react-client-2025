import React, { useEffect, useState } from "react";
import "./NotFound.css";
import BackToHomepageButton from "../../common/BackToHomeButton/BackToHomeButton";
import LoggoutButton from "../../common/LogoutButton/LoggoutButton";

const NotFound = () => {
  const [glitch, setGlitch] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitch(true);
      setTimeout(() => setGlitch(false), 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>

        <h1 className={`not-found-title ${glitch ? "glitch" : ""}`}>
          <span className="glitch-text" data-text="404">
            404
          </span>
        </h1>

        <p className="not-found-message">Oops! Page Not Found</p>
        <p className="not-found-description">
          The page you are looking for seems to have wandered off into the
          digital void. Don't worry, we'll help you find your way back home!
        </p>

        <div className="error-illustration">
          <div className="astronaut">
            <div className="helmet"></div>
            <div className="body"></div>
          </div>
          <div className="stars">
            {[...Array(20)].map((_, i) => (
              <div key={i} className={`star star-${i + 1}`}></div>
            ))}
          </div>
        </div>

        <div className="button-container">
          <BackToHomepageButton />
          <LoggoutButton />
        </div>
      </div>
    </div>
  );
};

export default NotFound;
