import React, { useRef, useEffect } from "react";
import "./Header.css";
import Logo from "../../../assets/Logo.png";
import Settings from "../../../assets/Settings.png";
import MenuPanel from "./MenuPanel";

const Header = () => {
  const [displayMenuPanel, setDisplayMenuPanel] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const headerRef = useRef(null);

  //calculate header height dynamically
  useEffect(() => {
    const handleResize = () => {
      if (headerRef.current) {
        const headerHeight = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty(
          "--header-height",
          `${headerHeight}px`
        );
      }
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    }
  }, []);

  const toggleMenuPanel = () => {
    setDisplayMenuPanel(!displayMenuPanel);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleOutsideClick = (event) => {
    if (headerRef.current && !headerRef.current.contains(event.target)) {
      setDisplayMenuPanel(false);
      setMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleLogoClick = () => {
    window.location.href = "/home";
  };

  return (
    <>
      <div className="header" ref={headerRef}>
        {/* Header Left Container */}
        <div className="header-left-container" onClick={handleLogoClick}>
          <img src={Logo} alt="Logo" className="header-logo" />
          <h1 className="header-title">Template</h1>
        </div>

        {/* Header Middle Container */}
        <div
          className={`header-middle-container ${
            mobileMenuOpen ? "mobile-menu-open" : ""
          }`}
        >
          <div className="header-middle-container-title">
            <h2 className="header-middle-title">Where to?</h2>
          </div>
          <a href="/home" className="header-link">
            Home
          </a>
          <a href="/example" className="header-link">
            Example
          </a>
          <a href="/faq" className="header-link">
            FAQ
          </a>
        </div>

        {/* Header Right Container */}
        <div className="header-right-container">
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            ☰
          </button>
          <img
            src={Settings}
            alt="Settings"
            className="header-settings-image"
            onClick={toggleMenuPanel}
          />
          {displayMenuPanel && <MenuPanel />}
        </div>
      </div>
      <div className="header-spacer" style={{ height: "var(--header-height)" }}></div>
    </>
  );
};

export default Header;
