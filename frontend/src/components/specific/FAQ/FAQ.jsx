import React, { useState, useEffect } from "react";
import "./FAQ.css";
import {
  FaQuestionCircle,
  FaChevronDown,
  FaChevronUp,
  FaSearch,
  FaGithub,
  FaEnvelope,
  FaExternalLinkAlt,
  FaBookOpen,
  FaUsers,
  FaHeart,
} from "react-icons/fa";

// mock data
import { faqData } from "./FAQmockdata";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [animatedCards, setAnimatedCards] = useState(new Set());

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  // filter FAQ data based on search term
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredData(faqData);
    } else {
      const filtered = faqData
        .map((category) => ({
          ...category,
          questions: category.questions.filter(
            (item) =>
              item.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
              item.answer.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        }))
        .filter((category) => category.questions.length > 0);
      setFilteredData(filtered);
    }
  }, [searchTerm]);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardId = entry.target.getAttribute("data-card-id");
            setAnimatedCards((prev) => new Set([...prev, cardId]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll(".faq-category");
    cards.forEach((card, index) => {
      card.setAttribute("data-card-id", index.toString());
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, [filteredData]);

  return (
    <div className="faq-container">
      {/* Background Elements */}
      <div className="faq-background">
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
        </div>
      </div>

      <div className="faq-content">
        {/* Enhanced Header */}
        <div className="faq-header">
          <div className="faq-badge">
            <FaBookOpen />
            <span>Help Center</span>
          </div>
          <h1 className="faq-title">
            Frequently Asked
            <span className="title-highlight"> Questions</span>
          </h1>
          <p className="faq-subtitle">
            Everything you need to know about FullStack Template v2. Can't find
            what you're looking for? Feel free to reach out!
          </p>

          {/* Search Bar */}
          <div className="search-container">
            <div className="search-wrapper">
              <FaSearch className="search-icon" />
              <input
                type="text"
                placeholder="Search for answers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input"
              />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm("")}
                  className="search-clear"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* Quick Stats */}
          <div className="faq-stats">
            <div className="stat-item">
              <FaUsers />
              <span>1000+ Developers</span>
            </div>
            <div className="stat-item">
              <FaQuestionCircle />
              <span>
                {faqData.reduce((acc, cat) => acc + cat.questions.length, 0)}{" "}
                Questions
              </span>
            </div>
            <div className="stat-item">
              <FaHeart />
              <span>Community Driven</span>
            </div>
          </div>
        </div>

        {/* Categories Overview */}
        <div className="categories-overview">
          <h2>Browse by Category</h2>
          <div className="category-grid">
            {faqData.map((category, index) => (
              <div
                key={index}
                className="category-card"
                style={{ "--category-color": category.color }}
              >
                <div className="category-card-icon">{category.icon}</div>
                <h3>{category.category}</h3>
                <p>{category.questions.length} questions</p>
              </div>
            ))}
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="faq-categories">
          {filteredData.length === 0 ? (
            <div className="no-results">
              <FaSearch />
              <h3>No results found</h3>
              <p>Try adjusting your search terms or browse categories above</p>
            </div>
          ) : (
            filteredData.map((category, categoryIndex) => (
              <div
                key={categoryIndex}
                className={`faq-category ${
                  animatedCards.has(categoryIndex.toString()) ? "animated" : ""
                }`}
                style={{ "--category-color": category.color }}
              >
                <div className="category-header">
                  <div className="category-icon">{category.icon}</div>
                  <div className="category-info">
                    <h2 className="category-title">{category.category}</h2>
                    <span className="question-count">
                      {category.questions.length} questions
                    </span>
                  </div>
                </div>

                <div className="faq-items">
                  {category.questions.map((item, questionIndex) => {
                    const globalIndex = `${categoryIndex}-${questionIndex}`;
                    const isActive = activeIndex === globalIndex;

                    return (
                      <div
                        key={questionIndex}
                        className={`faq-item ${isActive ? "active" : ""}`}
                      >
                        <div
                          className="faq-question"
                          onClick={() => toggleFAQ(globalIndex)}
                        >
                          <h3>{item.question}</h3>
                          <span className="faq-toggle">
                            {isActive ? <FaChevronUp /> : <FaChevronDown />}
                          </span>
                        </div>
                        <div
                          className={`faq-answer ${isActive ? "active" : ""}`}
                        >
                          <div className="answer-content">
                            <p>{item.answer}</p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Enhanced Footer */}
        <div className="faq-footer">
          <div className="help-section">
            <div className="help-card">
              <div className="help-icon">
                <FaGithub />
              </div>
              <h3>GitHub Issues</h3>
              <p>Report bugs or request features on our GitHub repository</p>
              <a
                href="https://github.com/bawfng04/FullStack-Template-v2/issues"
                className="help-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Repository <FaExternalLinkAlt />
              </a>
            </div>

            <div className="help-card">
              <div className="help-icon">
                <FaEnvelope />
              </div>
              <h3>Contact Support</h3>
              <p>Get in touch with our team for personalized assistance</p>
              <a href="/contact" className="help-link">
                Contact Us <FaExternalLinkAlt />
              </a>
            </div>

            <div className="help-card">
              <div className="help-icon">
                <FaBookOpen />
              </div>
              <h3>Documentation</h3>
              <p>Explore our comprehensive guides and tutorials</p>
              <a href="/docs" className="help-link">
                Read Docs <FaExternalLinkAlt />
              </a>
            </div>
          </div>

          <div className="footer-cta">
            <h3>Still need help?</h3>
            <p>Our community is here to support you every step of the way</p>
            <div className="cta-buttons">
              <a href="/contact" className="btn btn-primary">
                Get Support
              </a>
              <a href="/community" className="btn btn-outline">
                Join Community
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
