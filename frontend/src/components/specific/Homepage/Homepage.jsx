import React from "react";
import "./Homepage.css";
import Logo from "../../../assets/Logo.png";

const Homepage = () => {
  const features = [
    {
      title: "React Frontend",
      description:
        "Modern React application with routing and component-based architecture",
      icon: "⚛️",
    },
    {
      title: "Node.js Backend",
      description: "Robust Express.js server with RESTful API endpoints",
      icon: "🟢",
    },
    {
      title: "Database Integration",
      description: "PostgreSQL database with secure connection and queries",
      icon: "🗄️",
    },
    {
      title: "Authentication",
      description: "JWT-based authentication with secure password encryption",
      icon: "🔐",
    },
    {
      title: "Responsive Design",
      description: "Mobile-first design that works on all device sizes",
      icon: "📱",
    },
    {
      title: "Ready to Deploy",
      description: "Production-ready template with environment configurations",
      icon: "🚀",
    },
  ];

  const handleGetStarted = () => {
    window.location.href = "/example";
  };

  const handleLogin = () => {
    window.location.href = "/login";
  };

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Full Stack Template
              <span className="hero-highlight"> v2.0</span>
            </h1>
            <p className="hero-subtitle">
              A complete React + Node.js template with authentication, database
              integration, and modern development practices. Start building your
              next project in minutes!
            </p>
            <div className="hero-buttons">
              <button className="btn btn-primary" onClick={handleGetStarted}>
                Get Started
              </button>
              <button className="btn btn-secondary" onClick={handleLogin}>
                Login
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src={Logo} alt="Full Stack Template" className="hero-logo" />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Why Choose Our Template?</h2>
          <p className="section-subtitle">
            Everything you need to build a modern web application
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="tech-section">
        <div className="container">
          <h2 className="section-title">Technology Stack</h2>
          <div className="tech-stack">
            <div className="tech-category">
              <h3>Frontend</h3>
              <ul>
                <li>React 19</li>
                <li>React Router DOM</li>
                <li>CSS3 with Custom Properties</li>
                <li>React Icons</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Backend</h3>
              <ul>
                <li>Node.js</li>
                <li>Express.js</li>
                <li>JWT Authentication</li>
                <li>CORS Support</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Database</h3>
              <ul>
                <li>PostgreSQL</li>
                <li>Connection Pooling</li>
                <li>SQL Queries</li>
                <li>Data Encryption</li>
              </ul>
            </div>
            <div className="tech-category">
              <h3>Development</h3>
              <ul>
                <li>Environment Variables</li>
                <li>Nodemon</li>
                <li>Git Integration</li>
                <li>Production Ready</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="quickstart-section">
        <div className="container">
          <h2 className="section-title">Quick Start Guide</h2>
          <div className="steps-container">
            <div className="step">
              <div className="step-number">1</div>
              <h3>Clone Repository</h3>
              <p>
                Download the template and install dependencies for both frontend
                and backend
              </p>
              <code>git clone &lt;repository-url&gt;</code>
            </div>
            <div className="step">
              <div className="step-number">2</div>
              <h3>Configure Environment</h3>
              <p>Set up your database connection and environment variables</p>
              <code>Create .env files in both directories</code>
            </div>
            <div className="step">
              <div className="step-number">3</div>
              <h3>Run Development Servers</h3>
              <p>Start both frontend and backend servers</p>
              <code>npm start</code>
            </div>
            <div className="step">
              <div className="step-number">4</div>
              <h3>Start Building</h3>
              <p>
                Begin developing your application with the provided structure
              </p>
              <code>Ready to code! 🎉</code>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">100%</div>
              <div className="stat-label">Open Source</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Core Features</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">0</div>
              <div className="stat-label">Setup Time</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">∞</div>
              <div className="stat-label">Possibilities</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Build Something Amazing?</h2>
            <p>
              Start your next project with our comprehensive full-stack template
            </p>
            <div className="cta-buttons">
              <button className="btn btn-primary" onClick={handleGetStarted}>
                Try Example
              </button>
              <button className="btn btn-outline" onClick={handleLogin}>
                Sign In
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Homepage;
