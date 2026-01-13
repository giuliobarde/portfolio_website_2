"use client";

import Head from "next/head";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Scroll Reveal Animation
  useEffect(() => {
    const revealSections = document.querySelectorAll(".reveal");

    const revealOnScroll = () => {
      revealSections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight * 0.85) {
          section.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", revealOnScroll);
    revealOnScroll(); // Trigger on load

    return () => {
      window.removeEventListener("scroll", revealOnScroll);
    };
  }, []);

  // Close mobile menu if clicking outside the header
  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (isMenuOpen && !event.target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isMenuOpen]);

  const expandProject = (projectId) => {
    setModalData(projectData[projectId] || null);
    setIsModalOpen(true);
  };

  const closeProject = () => {
    setIsModalOpen(false);
  };

  const projectData = {
    "portfolio-2": {
      title: "💼 Portfolio Website 2",
      date: "02/2025",
      short: "A modernized version of my portfolio website showcasing my development skills and projects.",
      description:
        "An updated version of my personal portfolio website, featuring a more polished design and enhanced functionality to better showcase my projects and skills.",
      link: "https://github.com/giuliobarde/portfolio_website_2",
    },
    "chatbot-rmp": {
      title: "🤖 AI Chatbot: Rate My Professor",
      date: "08/2024",
      short: "An AI-driven chatbot for professor-related queries, utilizing Retrieval-Augmented Generation (RAG) with GPT-3.5-turbo.",
      description:
        "Developed an AI-powered chatbot using Next.js for the frontend and a Python backend, leveraging OpenAI GPT-3.5-turbo with Retrieval-Augmented Generation (RAG) for precise, data-driven responses. The chatbot answers professor-related inquiries and presents the top three relevant results, providing a streamlined and efficient user experience.",
    },
    "flashcards": {
      title: "📝 AI Flashcard Generator",
      date: "08/2024",
      short: "A flashcard generator powered by GPT-3.5-turbo, integrated with Firebase and Stripe for seamless functionality.",
      description:
        "Collaborated on the development of an AI-powered flashcard generator as part of the Headstarter AI Fellowship. The application uses OpenAI GPT-3.5-turbo to create customizable flashcards, and integrates Firebase for data storage and Clerk for user authentication, with a tiered pricing model managed through Stripe.",
      link: "https://github.com/giuliobarde/AI-Flashcards-SaaS-Stripe",
    },
    "chatbot-usa": {
      title: "🤖 AI Chatbot: Customer Support",
      date: "08/2024",
      short: "An AI chatbot designed to answer U.S.-related queries using Retrieval-Augmented Generation (RAG) with GPT-3.5-turbo.",
      description:
        "Developed an AI chatbot for the Headstarter SWE Fellowship project, using Next.js and Firebase for backend integration and OpenAI GPT-3.5-turbo for intelligent, dataset-driven responses regarding U.S. state-related inquiries. The chatbot utilizes Retrieval-Augmented Generation (RAG) for enhanced accuracy.",
      link: "https://github.com/giuliobarde/Chat_Support",
    },
    "pantry": {
      title: "🥘 AI Pantry Tracker",
      date: "07/2024",
      short: "An AI-driven pantry management app that provides recipe generation and item tracking features.",
      description:
        "Created a pantry management system as part of the Headstarter SWE Fellowship. The app uses Next.js, Firebase, and Firestore for authentication and data storage. It allows users to manage items with multiple expiration dates, search for pantry items, and suggests recipes based on available ingredients using OpenRouter's AI API. Future improvements are planned for recipe generation accuracy.",
      link: "https://github.com/giuliobarde/pantry_app",
    },
    "portfolio-1": {
      title: "💼 Portfolio Website 1",
      date: "07/2024",
      short: "Created a portfolio website as part of my first project during the Headstarter SWE Fellowship, utilizing a template-based approach.",
      description:
        "Built as part of the Headstarter SWE Fellowship, this initial portfolio website was designed using a template as a base, which was then customized and enhanced with new features such as timelines for coding projects and work experience, and additional sections for improved presentation.",
      link: "https://github.com/giuliobarde/portfolio_website",
    },
    "chess": {
      title: "♟ Chess App",
      date: "06/2024",
      short: "A chess game built with React and TypeScript, featuring move validation and a smooth user experience.",
      description:
        "Developed a fully functional chess game using React and TypeScript, implementing core chess logic including move validation and special moves like castling and en passant. This project was a key learning experience in working with React and TypeScript to build interactive applications.",
      link: "https://github.com/giuliobarde/Chess-App",
    },
    "http-server": {
      title: "🖥️ HTTP-Server",
      date: "06/2024",
      short: "A hands-on project following a CodeCrafters course to build a fully functional HTTP server from scratch.",
      description:
        "Built an HTTP server following a comprehensive course on CodeCrafters, gaining hands-on experience in server-side development and understanding fundamental web server architecture.",
      link: "https://app.codecrafters.io/users/giuliobarde",
    },
    "budgetting": {
      title: "💰 Budgeting Tool",
      date: "05/2024",
      short: "A collaborative budgeting tool developed as the final project in my Software Engineering class, focused on financial management.",
      description:
        "Developed a budgeting tool in collaboration with two peers for a Software Engineering class final project. The tool utilizes JavaFX and MySQL for managing school budgets, and includes features like profile creation, expense tracking, and reimbursement approval workflows.",
      link: "https://github.com/giuliobarde/HTTP-Server",
    },
    "text-processing": {
      title: "📚 Text Processing",
      date: "10/2023",
      short: "Developed a text processing software as the capstone project for my Advanced Data Structures class.",
      description:
        "Created a text processing application as part of my Advanced Data Structures class, capable of calculating word frequency, identifying stop words, and performing other key text analysis tasks using Java collections like array lists, hash maps, and hash sets.",
    },
    "sneakerhead": {
      title: "👟 Sneakerhead Application",
      date: "10/2023",
      short: "A web application designed to help users visualize and manage their sneaker collections, developed as part of my Software Design Methods class project.",
      description:
        "Developed a web application for visualizing and managing sneaker collections as a final project for my Software Design Methods class. The app includes features for stock management and sales tracking. Future plans include redesigning the app as a social platform for sneaker enthusiasts, akin to an Instagram clone focused on sneaker posts.",
    },
  };

  return (
    <>
      <Head>
        <title>🚀 Giulio Bardelli | Portfolio</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        />
      </Head>

      <header>
        <div className="logo">🚀 Giulio Bardelli</div>
        {/* The hamburger button toggles the mobile menu */}
        <button
          className="menu-toggle"
          onClick={(e) => {
            e.stopPropagation();
            setIsMenuOpen(!isMenuOpen);
          }}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        <nav className={`nav-links ${isMenuOpen ? "show" : ""}`}>
          <a href="#about">👨‍💻 About</a>
          <a href="#projects">🛠 Projects</a>
          <a href="#research">📚 Research</a>
          <a href="#work">💼 Work Experience</a>
          <a href="#contact">📞 Contact</a>
        </nav>
      </header>

      <div className="hero">
        <div>
          <h1 className="fade-in">Hey There! 👋</h1>
          <p className="fade-in delay">
            I'm <span className="highlight">Giulio</span>, a{" "}
            <span className="highlight">Data Science</span> student based in NY.
          </p>
          <p className="fade-in delay-2">
            🚀 Passionate about AI, Web Development, and Big Data!
          </p>
        </div>
      </div>

      <div className="section reveal" id="about">
        <h2>👨‍💻 About Me</h2>
        <p>
          💡 I love solving problems with code and designing intelligent
          solutions for real-world challenges.
        </p>
      </div>

      <div className="section reveal" id="projects">
        <h2>🛠 Projects</h2>
        <div className="projects-container">
          {Object.keys(projectData).map((key) => (
            <div
              key={key}
              className="project-card"
              onClick={() => expandProject(key)}
            >
              <h3>{projectData[key].title}</h3>
              <p>{projectData[key].short}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for displaying project details */}
      <div
        className={`project-modal ${isModalOpen ? "show" : ""}`}
        onClick={closeProject}
      >
        <div className="modal-content" onClick={(e) => e.stopPropagation()}>
          <span className="close-btn" onClick={closeProject}>
            &times;
          </span>
          {modalData && (
            <>
              <h2>{modalData.title}</h2>
              <p>{modalData.date}</p>
              <p>{modalData.description}</p>
              {modalData.link && (
                <a
                  href={modalData.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 View Project
                </a>
              )}
            </>
          )}
        </div>
      </div>

      <div className="section reveal" id="research">
        <h2>📚 Research</h2>
        <p>🔬 Studying machine learning, big data, and AI-powered systems.</p>
      </div>

      <div className="section reveal" id="work">
        <h2>💼 Work Experience</h2>
        <p>
          🖥 Hands-on experience in software development, AI research, and full-stack
          engineering.
        </p>
      </div>

      <div className="section reveal" id="contact">
        <h2>📞 Contact</h2>
        <p>
          📬 Let's connect! Reach me via{" "}
          <a href="mailto:giuliobarde@gmail.com">email</a> or{" "}
          <a href="#">socials</a>.
        </p>
      </div>

      <footer className="footer">
        <p>🔥 v 2.2.0 | &copy; 2025 Giulio Bardelli</p>
        <p>
          <a href="#">⬆️ Back to top</a>
        </p>
      </footer>
    </>
  );
}
