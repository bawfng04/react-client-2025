  import {
    FaQuestionCircle,
    FaCode,
    FaDatabase,
    FaServer,
    FaLock,
    FaRocket,
    FaCog,
  } from "react-icons/fa";



export const faqData = [
    {
      category: "General",
      icon: <FaQuestionCircle />,
      color: "#8b5cf6",
      questions: [
        {
          question: "What is FullStack Template v2?",
          answer:
            "FullStack Template v2 is a modern, production-ready web application template built with React, Node.js, Express, and PostgreSQL. It includes authentication, responsive design, and all the essential features needed to kickstart your web development project.",
        },
        {
          question: "Is this template free to use?",
          answer:
            "Yes, this template is completely free and open-source. You can use it for personal or commercial projects without any restrictions.",
        },
        {
          question: "What's included in the template?",
          answer:
            "The template includes a React frontend with routing, Node.js/Express backend with JWT authentication, PostgreSQL database integration, responsive design, user registration/login, and production-ready configurations.",
        },
      ],
    },
    {
      category: "Frontend",
      icon: <FaCode />,
      color: "#10b981",
      questions: [
        {
          question: "What React version is used?",
          answer:
            "The template uses React 19 with modern hooks and functional components. It includes React Router DOM for navigation and React Icons for beautiful iconography.",
        },
        {
          question: "Is the design responsive?",
          answer:
            "Yes, the template is built with a mobile-first approach and is fully responsive across all device sizes. It uses CSS Grid, Flexbox, and media queries for optimal viewing on any screen.",
        },
        {
          question: "Can I customize the styling?",
          answer:
            "Absolutely! The template uses CSS custom properties (CSS variables) for easy theming. You can modify colors, fonts, and layouts by updating the variables in App.css.",
        },
      ],
    },
    {
      category: "Backend",
      icon: <FaServer />,
      color: "#f59e0b",
      questions: [
        {
          question: "What backend framework is used?",
          answer:
            "The backend is built with Node.js and Express.js, providing a robust and scalable server architecture with RESTful API endpoints.",
        },
        {
          question: "How is the API structured?",
          answer:
            "The API follows RESTful conventions with organized routes, controllers, models, and middleware. It includes endpoints for authentication, user management, and example data operations.",
        },
        {
          question: "Is there API documentation?",
          answer:
            "The API endpoints are documented in the code comments and follow standard REST patterns. You can find examples in the controllers and routes directories.",
        },
      ],
    },
    {
      category: "Database",
      icon: <FaDatabase />,
      color: "#3b82f6",
      questions: [
        {
          question: "What database is used?",
          answer:
            "The template uses PostgreSQL as the primary database. It includes connection pooling, secure queries, and example table structures.",
        },
        {
          question: "How do I set up the database?",
          answer:
            "Create a PostgreSQL database and update the connection details in your .env file. The template includes example SQL scripts and connection configurations.",
        },
        {
          question: "Can I use a different database?",
          answer:
            "Yes, you can adapt the template to use other databases like MySQL, MongoDB, or SQLite by modifying the database connection and query methods.",
        },
      ],
    },
    {
      category: "Authentication",
      icon: <FaLock />,
      color: "#ef4444",
      questions: [
        {
          question: "How does authentication work?",
          answer:
            "The template uses JWT (JSON Web Tokens) for authentication. Passwords are encrypted using industry-standard hashing algorithms for security.",
        },
        {
          question: "Is the authentication secure?",
          answer:
            "Yes, the authentication system includes password encryption, JWT token validation, protected routes, and security middleware to prevent unauthorized access.",
        },
        {
          question: "Can I add social login?",
          answer:
            "The template provides a solid foundation for adding OAuth providers like Google, Facebook, or GitHub. You can extend the authentication system to include social login options.",
        },
      ],
    },
    {
      category: "Deployment",
      icon: <FaRocket />,
      color: "#8b5cf6",
      questions: [
        {
          question: "How do I deploy the application?",
          answer:
            "The template is production-ready and can be deployed to platforms like Heroku, Vercel, Netlify, or any cloud provider. Environment configurations are included for easy deployment.",
        },
        {
          question: "What environment variables do I need?",
          answer:
            "You'll need to set up environment variables for database connection, JWT secret key, API URLs, and any third-party service keys. Check the .env.example files for reference.",
        },
        {
          question: "Is it production-ready?",
          answer:
            "Yes, the template includes production optimizations, security headers, error handling, and performance best practices suitable for live applications.",
        },
      ],
    },
    {
      category: "Development",
      icon: <FaCog />,
      color: "#6b7280",
      questions: [
        {
          question: "How do I get started?",
          answer:
            "Clone the repository, install dependencies with 'npm install' in both frontend and backend directories, set up your environment variables, and run 'npm start' to begin development.",
        },
        {
          question: "What's the folder structure?",
          answer:
            "The project is organized with separate frontend and backend directories. Frontend uses component-based architecture, while backend follows MVC patterns with organized routes, controllers, and models.",
        },
        {
          question: "Can I contribute to the project?",
          answer:
            "Yes! Contributions are welcome. You can submit issues, feature requests, or pull requests on the GitHub repository. Please follow the contribution guidelines.",
        },
      ],
    },
  ];