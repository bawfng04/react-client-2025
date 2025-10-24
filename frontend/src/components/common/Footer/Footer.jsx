import React from "react";
import "./Footer.css";
import {
  FaFacebook,
  FaLinkedin,
  FaInstagram,
  // FaHeart,
  FaCode,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaHome,
  FaSignInAlt,
  FaUserPlus,
  FaGithub,
  FaCubes,
} from "react-icons/fa";

import {
  MdDashboard,
  // MdSettings,
  MdPrivacyTip,
  MdDescription,
  MdAccountTree,
} from "react-icons/md";

import { HiLightBulb, HiRocketLaunch } from "react-icons/hi2";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-background">
        <div className="footer-pattern"></div>
        <div className="footer-gradient"></div>
      </div>

      <div className="footer-content">
        <div className="footer-section about-section">
          <h3>
            <FaCode className="section-icon" />
            About Us
          </h3>
          <p>
            A modern Fullstack template for building scalable web applications
            with React and Node.js. Designed with love for developers.
          </p>
          <div className="tech-stack">
            <span className="tech-badge">React</span>
            <span className="tech-badge">Node.js</span>
            <span className="tech-badge">Express</span>
            <span className="tech-badge">PostgreSQL</span>
          </div>
        </div>

        <div className="footer-section links-section">
          <h3>
            <HiRocketLaunch className="section-icon" />
            Quick Links
          </h3>
          <ul>
            <li>
              <a href="/home">
                <FaHome className="link-icon" />
                Home
              </a>
            </li>
            <li>
              <a href="/example">
                <FaCubes className="link-icon" />
                Examples
              </a>
            </li>
            <li>
              <a href="/login">
                <FaSignInAlt className="link-icon" />
                Login
              </a>
            </li>
            <li>
              <a href="/register">
                <FaUserPlus className="link-icon" />
                Register
              </a>
            </li>
            <li>
              <a href="/dashboard">
                <MdDashboard className="link-icon" />
                Dashboard
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-section contact-section">
          <h3>
            <FaEnvelope className="section-icon" />
            Contact Info
          </h3>
          <div className="contact-item">
            <FaMapMarkerAlt className="contact-icon" />
            <span>Ho Chi Minh City - Vietnam</span>
          </div>
          <div className="contact-item">
            <FaPhone className="contact-icon" />
            <span>(+84) 90 123 6608</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="contact-icon" />
            <span>nguyendinhbang53az@gmail.com</span>
          </div>
        </div>

        <div className="footer-section social-section">
          <h3>
            <HiLightBulb className="section-icon" />
            Follow Me
          </h3>
          <div className="social-links">
            <a
              href="https://www.facebook.com/bawfng04"
              className="social-link facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook />
              <span className="social-tooltip">Facebook</span>
            </a>
            <a
              href="https://www.instagram.com/bawfng04/"
              className="social-link instagram"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
              <span className="social-tooltip">Instagram</span>
            </a>
            <a
              href="https://www.linkedin.com/in/bawfng04/"
              className="social-link linkedin"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
              <span className="social-tooltip">LinkedIn</span>
            </a>
            <a
              href="https://github.com/bawfng04"
              className="social-link github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
              <span className="social-tooltip">GitHub</span>
            </a>
          </div>

          {/* <div className="newsletter">
            <h4>
              <MdSettings className="newsletter-icon" />
              Newsletter
            </h4>
            <div className="newsletter-form">
              <input type="email" placeholder="Your email..." />
              <button type="submit">Subscribe</button>
            </div>
          </div> */}
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="copyright">
            © {year}
          </p>
          <div className="footer-links">
            <a href="/privacy">
              <MdPrivacyTip className="footer-link-icon" />
              Privacy Policy
            </a>
            <a href="/terms">
              <MdDescription className="footer-link-icon" />
              Terms of Service
            </a>
            <a href="/sitemap">
              <MdAccountTree className="footer-link-icon" />
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
