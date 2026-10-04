/**
 * Bhumika Saxena Portfolio - script.js
 * REDESIGNED Core Interaction Engine & Dynamic Data Renderer
 */

/* ==========================================================================
   DADA STRUCTURES (Easily editable content registries)
   ========================================================================== */

const socialLinks = {
    linkedin: "https://www.linkedin.com/in/bhumikasaxena24112005",
    github: "https://github.com/saxy1973",
    email: "mailto:bhumikasaxena24112005@gmail.com"
};

const projectsData = [
    {
        id: "1",
        title: "Movira — Movie Exploration Platform",
        date: "Jul 2026 – Sep 2026",
        type: "LIVE PROJECT",
        desc: "Responsive movie discovery platform for searching films, browsing categories, viewing detailed information, and exploring recommendations through a modern cinematic interface.",
        tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
        img: "assets/projects/movira.svg",
        liveDemo: "https://saxy1973.github.io/movie-recommendation-system/",
        github: "https://github.com/saxy1973",
        tagline: "Discover Your Next Favorite Movie",
        role: "Full Stack Developer",
        org: "Personal Project",
        features: [
            "Responsive React-based movie exploration interface",
            "Node.js and Express.js backend services",
            "TMDB-powered movie search, categories and details",
            "Movie recommendations and cinematic UI experience"
        ]
    },
    {
        id: "2",
        title: "Library Digitization & Book Circulation Management System",
        date: "Feb 2026 – Apr 2026",
        type: "LIVE PROJECT",
        desc: "Database-driven web application for managing books, users, issue/return transactions, availability, and administrative library operations.",
        tech: ["Java", "JSP", "Servlets", "JDBC", "MySQL", "Bootstrap", "Tomcat", "Docker"],
        img: "assets/projects/library.svg",
        liveDemo: "https://library-digitization-book-circulation.onrender.com/",
        github: "",
        tagline: "Digital Library & Circulation Management",
        role: "Full Stack Developer",
        org: "Academic Project",
        features: [
            "Admin/User role-based access with an admin dashboard",
            "Book inventory and availability management",
            "Issue and return transaction workflows",
            "Java Servlets, JSP, JDBC and MySQL integration"
        ]
    },
    {
        id: "3",
        title: "Medical Report Summarization Using LLM",
        date: "Aug 2026 – Present",
        type: "RESEARCH PROJECT",
        desc: "Research project focused on using large language models to summarize medical reports and extract important clinical information automatically.",
        tech: ["Python", "LLM", "NLP", "AI/ML"],
        img: "assets/projects/medical-llm.svg",
        liveDemo: "",
        github: "",
        tagline: "Automated Medical Report Summarization",
        role: "Researcher / Developer",
        org: "Research Project",
        features: [
            "Automated summarization of medical reports",
            "Key clinical information extraction",
            "LLM-based natural language processing workflow",
            "Research paper under preparation for publication"
        ]
    },
    {
        id: "4",
        title: "Blockchain-Based Secure Data Storage System",
        date: "Jan 2026 – Mar 2026",
        type: "RESEARCH PROJECT",
        desc: "Research project exploring blockchain-based storage for secure, tamper-resistant and verifiable data management.",
        tech: ["Blockchain", "Security", "Distributed Systems"],
        img: "assets/projects/blockchain.svg",
        liveDemo: "",
        github: "",
        tagline: "Secure & Tamper-Resistant Data Storage",
        role: "Researcher / Developer",
        org: "Research Project",
        features: [
            "Blockchain-based approach for secure data storage",
            "Tamper-resistant data management model",
            "Focus on security and data integrity",
            "Research paper accepted for publication"
        ]
    }
];

const skillsData = {
    "01 — PROGRAMMING LANGUAGES": [
        { name: "Java", icon: "devicon-java-plain colored" },
        { name: "C++", icon: "devicon-cplusplus-plain colored" },
        { name: "C", icon: "devicon-c-plain colored" },
        { name: "Python", icon: "devicon-python-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" }
    ],
    "02 — WEB DEVELOPMENT": [
        { name: "HTML5", icon: "devicon-html5-plain colored" },
        { name: "CSS3", icon: "devicon-css3-plain colored" },
        { name: "JavaScript", icon: "devicon-javascript-plain colored" },
        { name: "React.js", icon: "devicon-react-original colored" },
        { name: "Node.js", icon: "devicon-nodejs-plain colored" },
        { name: "Express.js", icon: "devicon-express-original" },
        { name: "JSP", icon: "svg-code" },
        { name: "Servlets", icon: "svg-code" },
        { name: "Bootstrap", icon: "devicon-bootstrap-plain colored" }
    ],
    "03 — DATABASES & CORE": [
        { name: "SQL", icon: "svg-database" },
        { name: "MySQL", icon: "devicon-mysql-plain colored" },
        { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
        { name: "DSA", icon: "svg-brain" },
        { name: "OOP", icon: "svg-code" },
        { name: "DBMS", icon: "svg-database" },
        { name: "Operating Systems", icon: "svg-code" },
        { name: "Computer Networks", icon: "svg-cloud" }
    ],
    "04 — TOOLS & TECHNOLOGIES": [
        { name: "Git", icon: "devicon-git-plain colored" },
        { name: "GitHub", icon: "devicon-github-original" },
        { name: "Apache Tomcat", icon: "devicon-tomcat-line colored" },
        { name: "Docker", icon: "devicon-docker-plain colored" },
        { name: "Google Colab", icon: "svg-code" },
        { name: "Tinkercad", icon: "svg-code" }
    ],
    "05 — AI / ML": [
        { name: "Machine Learning", icon: "svg-brain" },
        { name: "NLP", icon: "svg-brain" },
        { name: "LLMs", icon: "svg-brain" },
        { name: "Python", icon: "devicon-python-plain colored" }
    ]
};

const certificationsData = [];

/* ==========================================================================
   SVG PROVIDER FOR SKILLS & SOCIALS
   ========================================================================== */

const getSkillIconHTML = (iconKey) => {
    const svgs = {
        /* ── Utility / generic ─────────────────────────────────── */
        "svg-api": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`,
        "svg-lock": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>`,
        "svg-database": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path><path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"></path></svg>`,
        "svg-brain": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.44 2.5 2.5 0 0 1 0-3.12 3 3 0 0 1 0-4.88 2.5 2.5 0 0 1 0-3.12A2.5 2.5 0 0 1 9.5 2Z"></path><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96-.44 2.5 2.5 0 0 0 0-3.12 3 3 0 0 0 0-4.88 2.5 2.5 0 0 0 0-3.12A2.5 2.5 0 0 0 14.5 2Z"></path></svg>`,
        "svg-chart": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"></line><line x1="12" y1="20" x2="12" y2="4"></line><line x1="6" y1="20" x2="6" y2="14"></line></svg>`,
        "svg-powerbi": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="14" width="4" height="6" rx="1"></rect><rect x="10" y="8" width="4" height="12" rx="1"></rect><rect x="17" y="2" width="4" height="18" rx="1"></rect></svg>`,
        "svg-cpu": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>`,
        "svg-sparkles": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707-.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z"></path></svg>`,
        "svg-board": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><line x1="9" y1="3" x2="9" y2="21"></line><line x1="15" y1="3" x2="15" y2="21"></line><line x1="3" y1="9" x2="21" y2="9"></line></svg>`,
        "svg-code": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>`,
        "svg-terminal": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>`,

        /* ── New icons ─────────────────────────────────────────── */
        "svg-scratch": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2C8.13 2 5 5.13 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.87-3.13-7-7-7z"></path><line x1="9" y1="21" x2="15" y2="21"></line><line x1="10" y1="17" x2="10" y2="21"></line><line x1="14" y1="17" x2="14" y2="21"></line></svg>`,
        "svg-cicd": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"></path></svg>`,
        "svg-cloud": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"></path></svg>`,
        "svg-windsurf": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 17l9-9 5 5 4-4"></path><path d="M17 8h4v4"></path></svg>`,

        /* ── AI tool logos (minimalist representation) ─────────── */
        "svg-openai": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4a8 8 0 1 0 0 16A8 8 0 0 0 12 4z"></path><path d="M12 8v4l3 3"></path></svg>`,
        "svg-gemini": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z"></path></svg>`,
        "svg-copilot": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="12" r="3"></circle><circle cx="15" cy="12" r="3"></circle><path d="M6.5 9C5 7.5 5 5 7 3.5S11 3 12 4.5"></path><path d="M17.5 9C19 7.5 19 5 17 3.5S13 3 12 4.5"></path><path d="M6 15c-1.5 1.5-1.5 4 .5 5.5s4.5.5 5.5-1"></path><path d="M18 15c1.5 1.5 1.5 4-.5 5.5S13 21 12 19.5"></path></svg>`,
        "svg-claude": `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3L4 9v12h16V9L12 3z"></path><path d="M9 21V12h6v9"></path></svg>`
    };

    if (iconKey.startsWith("svg-")) {
        return svgs[iconKey] || `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle></svg>`;
    }
    return `<i class="${iconKey}"></i>`;
};


const getSocialIconSVG = (platform) => {
    const svgs = {
        linkedin: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/></svg>`,
        github: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>`,
        instagram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>`,
        youtube: `<svg viewBox="0 0 24 24"><path class="yt-bg" fill="#FF0000" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814z"/><path class="yt-play" fill="#FFFFFF" d="M9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
        twitter: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
        discord: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994.021-.041.001-.09-.041-.106a13.094 13.094 0 0 1-1.873-.894.077.077 0 0 1-.008-.128c.126-.093.252-.19.372-.287a.075.075 0 0 1 .077-.011c3.92 1.793 8.18 1.793 12.061 0a.073.073 0 0 1 .078.009c.12.099.246.195.373.289a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.894.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.156 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.156-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.156 2.418z"/></svg>`,
        telegram: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.121l-6.871 4.326-2.962-.924c-.643-.204-.657-.643.136-.953l11.57-4.458c.538-.196 1.006.128.832.94z"/></svg>`,
        email: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z"/></svg>`
    };
    return svgs[platform] || "";
};

/* ==========================================================================
   INTERACTION ENGINE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

    /* --- 1. GLOBAL THEME MANAGER (DARK MODE DEFAULT) --- */
    const themeToggleBtns = document.querySelectorAll('.theme-toggle-btn, #theme-toggle, #intro-theme-toggle');
    const htmlElement = document.documentElement;

    const applyTheme = (theme) => {
        const activeTheme = (theme === 'light') ? 'light' : 'dark';
        htmlElement.setAttribute('data-theme', activeTheme);
    };

    // Strictly ensure initial state on page open / refresh is ALWAYS DARK MODE
    applyTheme('dark');

    themeToggleBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            const currentTheme = htmlElement.getAttribute('data-theme') || 'dark';
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            applyTheme(newTheme);
        });
    });

    /* --- 2. CUSTOM INTERACTIVE CURSOR ENGINE --- */
    const cursorDot = document.getElementById('cursor-dot');
    const cursorRing = document.getElementById('cursor-ring');
    const cursorLabel = document.getElementById('cursor-label');

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isTouchDevice = false;

    // Detect touch device
    if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
        isTouchDevice = true;
    }

    if (!isTouchDevice && cursorDot && cursorRing) {
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            cursorDot.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
        });

        // Smooth ring lerp loop
        const renderCursor = () => {
            ringX += (mouseX - ringX) * 0.18;
            ringY += (mouseY - ringY) * 0.18;
            cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
            requestAnimationFrame(renderCursor);
        };
        requestAnimationFrame(renderCursor);

        // Attach hover states to interactive targets
        const attachCursorHoverListeners = () => {
            const targets = document.querySelectorAll('a, button, .spec-chip, .skill-pill, .experience-card-item, .education-column-card, .project-card-refined, .cert-marquee-card, .event-horizontal-card, .mini-event-card, .cert-card-new, [data-cursor]');
            targets.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    cursorRing.classList.add('cursor-hover');
                    const label = el.getAttribute('data-cursor');
                    if (label && cursorLabel) {
                        cursorLabel.textContent = label;
                    } else if (cursorLabel) {
                        cursorLabel.textContent = '';
                    }
                });
                el.addEventListener('mouseleave', () => {
                    cursorRing.classList.remove('cursor-hover');
                    if (cursorLabel) cursorLabel.textContent = '';
                });
            });
        };
        attachCursorHoverListeners();
    }

    /* --- 3. GLOBAL CONTINUOUS CONSTELLATION CANVAS ENGINE --- */
    const globalCanvas = document.getElementById('global-canvas') || document.getElementById('intro-canvas');
    let canvasAnimationId = null;
    let isCanvasActive = true;

    if (globalCanvas && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        const ctx = globalCanvas.getContext('2d');
        let width = (globalCanvas.width = window.innerWidth);
        let height = (globalCanvas.height = window.innerHeight);

        let particles = [];
        const particleCount = Math.min(Math.floor((width * height) / 14000), 70);
        let canvasMouse = { x: width / 2, y: height / 2, radius: 150 };

        class Particle {
            constructor() {
                this.x = Math.random() * width;
                this.y = Math.random() * height;
                this.vx = (Math.random() - 0.5) * 0.55;
                this.vy = (Math.random() - 0.5) * 0.55;
                this.radius = Math.random() * 1.6 + 0.8;
                this.baseAlpha = Math.random() * 0.45 + 0.25;
            }

            update() {
                this.x += this.vx;
                this.y += this.vy;

                if (this.x < 0) this.x = width;
                if (this.x > width) this.x = 0;
                if (this.y < 0) this.y = height;
                if (this.y > height) this.y = 0;

                // Mouse interaction / subtle repulsion
                const dx = canvasMouse.x - this.x;
                const dy = canvasMouse.y - this.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < canvasMouse.radius && dist > 0) {
                    const force = (canvasMouse.radius - dist) / canvasMouse.radius;
                    const angle = Math.atan2(dy, dx);
                    this.x -= Math.cos(angle) * force * 1.2;
                    this.y -= Math.sin(angle) * force * 1.2;
                }
            }

            draw() {
                const isDark = htmlElement.getAttribute('data-theme') !== 'light';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx.fillStyle = isDark
                    ? `rgba(56, 189, 248, ${this.baseAlpha})`
                    : `rgba(37, 99, 235, ${this.baseAlpha * 0.65})`;
                ctx.fill();
            }
        }

        const initParticles = () => {
            particles = [];
            for (let i = 0; i < particleCount; i++) {
                particles.push(new Particle());
            }
        };
        initParticles();

        window.addEventListener('resize', () => {
            width = globalCanvas.width = window.innerWidth;
            height = globalCanvas.height = window.innerHeight;
            initParticles();
        });

        window.addEventListener('mousemove', (e) => {
            canvasMouse.x = e.clientX;
            canvasMouse.y = e.clientY;
        });

        const animateCanvas = () => {
            if (!isCanvasActive) return;
            ctx.clearRect(0, 0, width, height);

            const isDark = htmlElement.getAttribute('data-theme') !== 'light';
            const maxDistance = 135;

            // Connect nearby particles with glowing lines
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);

                    if (dist < maxDistance) {
                        const alpha = (1 - dist / maxDistance) * (isDark ? 0.2 : 0.1);
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = isDark
                            ? `rgba(56, 189, 248, ${alpha})`
                            : `rgba(37, 99, 235, ${alpha})`;
                        ctx.lineWidth = 0.85;
                        ctx.stroke();
                    }
                }
            }

            // Mouse proximity lines
            for (let i = 0; i < particles.length; i++) {
                const dx = canvasMouse.x - particles[i].x;
                const dy = canvasMouse.y - particles[i].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < canvasMouse.radius) {
                    const alpha = (1 - dist / canvasMouse.radius) * (isDark ? 0.32 : 0.18);
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(canvasMouse.x, canvasMouse.y);
                    ctx.strokeStyle = isDark
                        ? `rgba(96, 165, 250, ${alpha})`
                        : `rgba(37, 99, 235, ${alpha})`;
                    ctx.lineWidth = 0.95;
                    ctx.stroke();
                }

                particles[i].update();
                particles[i].draw();
            }

            canvasAnimationId = requestAnimationFrame(animateCanvas);
        };
        animateCanvas();

        // Pause animation when tab is not visible to optimize CPU
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                if (canvasAnimationId) cancelAnimationFrame(canvasAnimationId);
            } else if (isCanvasActive) {
                canvasAnimationId = requestAnimationFrame(animateCanvas);
            }
        });
    }

    /* --- 4. MAGNETIC CTA BUTTON & 3D HERO TILT --- */
    const magneticBtn = document.getElementById('enter-portfolio-btn');
    const introContent = document.getElementById('intro-content');

    if (introContent && !isTouchDevice && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        window.addEventListener('mousemove', (e) => {
            const cx = window.innerWidth / 2;
            const cy = window.innerHeight / 2;
            const tiltX = (e.clientY - cy) / cy * -6; // max ±6deg
            const tiltY = (e.clientX - cx) / cx * 8;  // max ±8deg
            introContent.style.transform = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`;
        });
    }

    if (magneticBtn && !isTouchDevice) {
        magneticBtn.addEventListener('mousemove', (e) => {
            const rect = magneticBtn.getBoundingClientRect();
            const bx = rect.left + rect.width / 2;
            const by = rect.top + rect.height / 2;
            const mx = (e.clientX - bx) * 0.25; // magnetic pull
            const my = (e.clientY - by) * 0.25;
            magneticBtn.style.transform = `translate(${mx}px, ${my}px) scale(1.03)`;
        });

        magneticBtn.addEventListener('mouseleave', () => {
            magneticBtn.style.transform = '';
        });
    }

    /* --- 5. INTRO SCREEN TRANSITION CONTROLLER --- */
    const introScreen = document.getElementById('intro-screen');
    const portfolioWrapper = document.getElementById('portfolio-wrapper');

    document.body.classList.add('no-scroll');

    const handleEnterPortfolio = () => {
        if (!introScreen) return;
        introScreen.classList.add('fade-out');
        if (portfolioWrapper) portfolioWrapper.classList.add('active');
        document.body.classList.add('hero-content-revealed');

        // Note: Global canvas CONTINUES running seamlessly behind the portfolio

        setTimeout(() => {
            document.body.classList.remove('no-scroll');
            introScreen.style.display = 'none';
        }, 850);
    };

    if (magneticBtn) {
        magneticBtn.addEventListener('click', handleEnterPortfolio);
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        if (introScreen) introScreen.style.display = 'none';
        if (portfolioWrapper) portfolioWrapper.classList.add('active');
        document.body.classList.add('hero-content-revealed');
        document.body.classList.remove('no-scroll');
    }

    /* --- 3. MOBILE HAMBURGER NAVIGATION --- */
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    const toggleMobileMenu = () => {
        const isOpen = hamburgerBtn.getAttribute('aria-expanded') === 'true';
        hamburgerBtn.setAttribute('aria-expanded', !isOpen);
        mobileMenu.setAttribute('aria-hidden', isOpen);
        mobileMenu.classList.toggle('open');
        document.body.classList.toggle('no-scroll');
    };

    hamburgerBtn.addEventListener('click', toggleMobileMenu);

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('open')) {
                toggleMobileMenu();
            }
        });
    });

    /* --- 4. STICKY HEADER --- */
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    /* --- 4b. HERO MOUSE PARALLAX (subtle portrait movement) --- */
    const heroSection = document.querySelector('.hero-section');
    const heroPortraitImg = document.querySelector('.hero-portrait-img');

    if (heroSection && heroPortraitImg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
        heroSection.addEventListener('mousemove', (e) => {
            const rect = heroSection.getBoundingClientRect();
            const cx = rect.width / 2;
            const cy = rect.height / 2;
            const mx = e.clientX - rect.left - cx;
            const my = e.clientY - rect.top - cy;
            const px = (mx / cx) * 6;   /* max ±6px */
            const py = (my / cy) * 4;   /* max ±4px */
            heroPortraitImg.style.transform = `translate(${px}px, ${py}px)`;
        });

        heroSection.addEventListener('mouseleave', () => {
            heroPortraitImg.style.transform = '';
        });
    }


    /* --- 5. DYNAMIC PROJECTS BUILDER --- */
    const projectsContainer = document.getElementById('projects-list-container');

    const buildProjectsList = () => {
        if (!projectsContainer) return;

        projectsContainer.innerHTML = projectsData.map((project, index) => {
            const padded = String(index + 1).padStart(2, '0');
            const hasDemo = Boolean(project.liveDemo && project.liveDemo !== '#' && !project.liveDemo.includes("PASTE_"));
            const hasGithub = Boolean(project.github && project.github !== '#' && !project.github.includes("PASTE_"));
            const clickStop = hasDemo ? '' : `onclick="event.preventDefault(); alert('Demo URL will be updated when active.');"`;

            const thumbContainerStyle = project.thumbBg ? `style="background-color: ${project.thumbBg};"` : '';
            const thumbImgClass = project.thumbFit === 'contain' ? 'project-thumb-img thumb-contain' : 'project-thumb-img';

            const thumbnailHTML = project.img
                ? `<img src="${project.img}" alt="${project.title.split(' — ')[0]} preview" class="${thumbImgClass}" loading="lazy" />`
                : `<div class="project-thumb-placeholder">
                    <span class="project-placeholder-icon">&#128640;</span>
                    <span class="project-placeholder-text">${project.tagline || 'Live Web Application'}</span>
                   </div>`;

            return `
                <div class="project-card-refined scroll-trigger" data-project-id="${project.id}">
                    <div class="project-thumb-container" ${thumbContainerStyle}>
                        ${thumbnailHTML}
                        <span class="project-number-badge">${padded}</span>
                    </div>

                    <div class="project-card-body">
                        <div class="project-meta-header">
                            ${project.logo ? `
                            <div class="project-logo-wrap">
                                <img src="${project.logo}" alt="${project.title.split(' — ')[0]} logo" class="project-card-logo" loading="lazy" />
                            </div>` : '<div class="project-logo-wrap-empty"></div>'}
                            <span class="project-type-badge">${project.type || 'LIVE PROJECT'}</span>
                        </div>

                        <h3 class="project-name-title">${project.title.split(' — ')[0]}</h3>
                        ${project.tagline ? `<p class="project-tagline">${project.tagline}</p>` : ''}
                        
                        <p class="project-summary">${project.desc}</p>

                        <div class="project-tags-list">
                            ${project.tech.slice(0, 4).map(t => `<span class="project-tag-pill">${t}</span>`).join('')}
                        </div>

                        <div class="project-card-actions">
                            ${hasDemo ? `
                            <a href="${project.liveDemo}" class="proj-action-btn proj-live-btn" target="_blank" rel="noopener noreferrer" ${clickStop}>
                                <span>Live Demo</span>
                                <svg class="proj-btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                                    <polyline points="15 3 21 3 21 9"></polyline>
                                    <line x1="10" y1="14" x2="21" y2="3"></line>
                                </svg>
                            </a>` : ''}

                            ${hasGithub ? `
                            <a href="${project.github}" class="proj-action-btn proj-github-btn" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository" title="GitHub Code">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                                <span>Code</span>
                            </a>` : ''}
                        </div>
                    </div>
                </div>
            `;
        }).join('');
    };

    buildProjectsList();

    /* --- 6. DYNAMIC SKILLS BUILDER (GITHUB-INSPIRED TECH COLLECTION) --- */
    const skillsGridContainer = document.getElementById('skills-grid-container');

    const buildSkillsGrid = () => {
        if (!skillsGridContainer) return;

        skillsGridContainer.innerHTML = Object.entries(skillsData).map(([category, items]) => {
            const [num, title] = category.split(' — ');
            return `
                <div class="skill-category-group scroll-trigger">
                    <div class="skill-category-header">
                        <span class="skill-category-num">${num}</span>
                        <span class="skill-category-dash">—</span>
                        <h3 class="skill-category-title">${title}</h3>
                    </div>
                    <div class="skill-pills-wrap">
                        ${items.map(skill => `
                            <div class="skill-pill">
                                <span class="skill-pill-icon" aria-hidden="true">
                                    ${getSkillIconHTML(skill.icon)}
                                </span>
                                <span class="skill-pill-name">${skill.name}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `;
        }).join('');
    };

    buildSkillsGrid();
    if (window._observeScrollTriggers) window._observeScrollTriggers();

    /* --- 7. DYNAMIC CERTIFICATIONS HORIZONTAL SINGLE-ROW SHOWCASE --- */
    const certTrack = document.getElementById('cert-marquee-track');
    const certRow = document.querySelector('.cert-marquee-row');
    const marqueeContainer = document.getElementById('certifications-marquee-container');
    const filterButtons = document.querySelectorAll('.cert-filter-btn');

    let isCertHovered = false;
    let certScrollAnimId = null;
    const certScrollSpeed = 0.85; // Smooth gentle auto-scroll pace

    const renderCardHTML = (cert, idx) => {
        const formattedCategory = cert.category === 'ai-ml' ? 'AI / ML' : cert.category.toUpperCase();
        const formattedDate = cert.date.replace('Issued ', '').toUpperCase();
        const previewSrc = cert.preview || `assets/certificates/previews/${cert.file}.png`;
        const fileSrc = cert.file ? `assets/certificates/${cert.file}` : '';
        const titleSafe = (cert.title || '').replace(/"/g, '&quot;');
        const issuerSafe = (cert.issuer || '').replace(/"/g, '&quot;');

        return `
            <div class="cert-marquee-card" data-index="${idx}" data-category="${cert.category}" data-file="${fileSrc}" data-title="${titleSafe}" data-issuer="${issuerSafe}" data-preview="${previewSrc}">
                <div class="cert-card-thumb-wrap">
                    <img src="${previewSrc}" alt="${cert.title} Preview" class="cert-card-thumb-img" loading="lazy" />
                    <div class="cert-card-thumb-overlay">
                        <span class="cert-card-view-btn">
                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="13" height="13">
                                <line x1="7" y1="17" x2="17" y2="7"></line>
                                <polyline points="7 7 17 7 17 17"></polyline>
                            </svg>
                            <span>View Certificate</span>
                        </span>
                    </div>
                </div>
                <div class="cert-card-body">
                    <div class="cert-card-meta-top">
                        <span class="cert-card-cat-badge">${formattedCategory}</span>
                        <span class="cert-card-date-badge">${formattedDate}</span>
                    </div>
                    <h4 class="cert-card-title-text" title="${cert.title}">${cert.title}</h4>
                    <p class="cert-card-issuer-text">${cert.issuer}</p>
                </div>
            </div>
        `;
    };

    const buildCertificationsMarquee = (filter = 'all') => {
        if (!certTrack) return;

        const filteredCerts = (filter === 'all')
            ? certificationsData
            : certificationsData.filter(c => c.category === filter);

        if (filteredCerts.length === 0) {
            certTrack.innerHTML = '';
            return;
        }

        // Each certificate appears EXACTLY ONCE — strictly no duplicates
        certTrack.innerHTML = filteredCerts.map((cert, idx) => renderCardHTML(cert, idx)).join('');

        // Reset scroll position on filter change
        if (certRow) {
            certRow.scrollLeft = 0;
        }

        // Attach click listeners to all cards in the single row
        const allCards = certTrack.querySelectorAll('.cert-marquee-card');
        allCards.forEach(card => {
            card.addEventListener('click', (e) => {
                e.stopPropagation();
                openCertLightbox(card);
            });
        });
    };

    // Auto-scroll loop on the single row container
    const runCertAutoScroll = () => {
        if (!isCertHovered && certRow) {
            const maxScroll = certRow.scrollWidth - certRow.clientWidth;
            if (maxScroll > 10) {
                certRow.scrollLeft += certScrollSpeed;
                if (certRow.scrollLeft >= maxScroll - 1) {
                    certRow.scrollLeft = 0; // Reset to start
                }
            }
        }
        certScrollAnimId = requestAnimationFrame(runCertAutoScroll);
    };

    if (certRow) {
        // Pause on hover / touch, resume on leave
        certRow.addEventListener('mouseenter', () => { isCertHovered = true; });
        certRow.addEventListener('mouseleave', () => { isCertHovered = false; });
        certRow.addEventListener('touchstart', () => { isCertHovered = true; }, { passive: true });
        certRow.addEventListener('touchend', () => { isCertHovered = false; }, { passive: true });

        // Mouse drag-to-scroll support
        let isDown = false;
        let startX = 0;
        let scrollLeftPos = 0;

        certRow.addEventListener('mousedown', (e) => {
            isDown = true;
            isCertHovered = true;
            startX = e.pageX - certRow.offsetLeft;
            scrollLeftPos = certRow.scrollLeft;
        });

        window.addEventListener('mouseup', () => {
            if (isDown) {
                isDown = false;
                isCertHovered = false;
            }
        });

        certRow.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - certRow.offsetLeft;
            const walk = (x - startX) * 1.5;
            certRow.scrollLeft = scrollLeftPos - walk;
        });
    }

    buildCertificationsMarquee('all');
    runCertAutoScroll();
    if (window._observeScrollTriggers) window._observeScrollTriggers();

    // Filters Controller with smooth opacity transition
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            const selectedFilter = button.getAttribute('data-filter') || 'all';

            if (marqueeContainer) {
                marqueeContainer.style.opacity = '0.3';
                marqueeContainer.style.transition = 'opacity 0.2s ease';
            }

            setTimeout(() => {
                buildCertificationsMarquee(selectedFilter);
                if (marqueeContainer) {
                    marqueeContainer.style.opacity = '1';
                }
            }, 180);
        });
    });

    /* --- 7B. OTHER INDUSTRY EVENTS SINGLE-ROW MARQUEE + MANUAL SCROLL --- */
    const miniEventsRow = document.getElementById('mini-events-row');
    const miniEventsTrack = document.getElementById('mini-events-track');

    if (miniEventsRow && miniEventsTrack) {
        let isEventsHovered = false;
        let isEventsDragging = false;
        let isEventsWheelActive = false;
        let isEventsTouchActive = false;
        let eventsDragMoved = false;
        let eventsStartX = 0;
        let eventsScrollStart = 0;
        let eventsWheelTimeout = null;
        let eventsTouchTimeout = null;
        const eventsScrollSpeed = 0.85; // Smooth continuous marquee pace

        // Seamless wrap point calculation based on first full set of cards
        const getSingleSetWidth = () => {
            const cards = miniEventsTrack.querySelectorAll('.mini-event-card');
            const halfCount = Math.floor(cards.length / 2);
            if (cards.length >= 2 && halfCount > 0 && cards[halfCount]) {
                return cards[halfCount].offsetLeft - cards[0].offsetLeft;
            }
            return miniEventsTrack.scrollWidth / 2;
        };

        const handleEventsInfiniteLoop = () => {
            const setWidth = getSingleSetWidth();
            if (setWidth > 0) {
                if (miniEventsRow.scrollLeft >= setWidth) {
                    miniEventsRow.scrollLeft -= setWidth;
                } else if (miniEventsRow.scrollLeft <= 0) {
                    miniEventsRow.scrollLeft += setWidth;
                }
            }
        };

        // Smooth Auto-scroll loop
        const runMiniEventsAutoScroll = () => {
            if (!isEventsHovered && !isEventsDragging && !isEventsWheelActive && !isEventsTouchActive) {
                miniEventsRow.scrollLeft += eventsScrollSpeed;
                handleEventsInfiniteLoop();
            }
            requestAnimationFrame(runMiniEventsAutoScroll);
        };

        // Hover pause
        miniEventsRow.addEventListener('mouseenter', () => { isEventsHovered = true; });
        miniEventsRow.addEventListener('mouseleave', () => { isEventsHovered = false; });

        // Wheel / Trackpad horizontal & vertical scroll
        miniEventsRow.addEventListener('wheel', () => {
            isEventsWheelActive = true;
            clearTimeout(eventsWheelTimeout);
            eventsWheelTimeout = setTimeout(() => {
                isEventsWheelActive = false;
            }, 1200);
            handleEventsInfiniteLoop();
        }, { passive: true });

        // Touch swipe / drag on mobile & tablets
        miniEventsRow.addEventListener('touchstart', () => {
            isEventsTouchActive = true;
            clearTimeout(eventsTouchTimeout);
        }, { passive: true });

        miniEventsRow.addEventListener('touchmove', () => {
            isEventsTouchActive = true;
            handleEventsInfiniteLoop();
        }, { passive: true });

        miniEventsRow.addEventListener('touchend', () => {
            clearTimeout(eventsTouchTimeout);
            eventsTouchTimeout = setTimeout(() => {
                isEventsTouchActive = false;
            }, 1200);
        }, { passive: true });

        // Mouse Drag to scroll
        miniEventsRow.addEventListener('mousedown', (e) => {
            isEventsDragging = true;
            eventsDragMoved = false;
            eventsStartX = e.pageX - miniEventsRow.offsetLeft;
            eventsScrollStart = miniEventsRow.scrollLeft;
            miniEventsRow.classList.add('is-dragging');
        });

        window.addEventListener('mouseup', () => {
            if (isEventsDragging) {
                isEventsDragging = false;
                miniEventsRow.classList.remove('is-dragging');
            }
        });

        miniEventsRow.addEventListener('mousemove', (e) => {
            if (!isEventsDragging) return;
            e.preventDefault();
            const x = e.pageX - miniEventsRow.offsetLeft;
            const dist = x - eventsStartX;
            if (Math.abs(dist) > 5) {
                eventsDragMoved = true;
            }
            miniEventsRow.scrollLeft = eventsScrollStart - (dist * 1.5);
            handleEventsInfiniteLoop();
        });

        // Prevent accidental link navigation when dragging
        miniEventsRow.querySelectorAll('.mini-event-card').forEach(card => {
            card.addEventListener('click', (e) => {
                if (eventsDragMoved) {
                    e.preventDefault();
                    e.stopPropagation();
                }
            });
        });

        runMiniEventsAutoScroll();
    }

    /* --- 8. DYNAMIC SOCIAL LINKS (HERO & CONNECT PANELS) --- */
    const connectSocialIconsContainer = document.getElementById('connect-social-icons');

    // Lightweight copy feedback toast
    const showCopyToast = (message) => {
        let toast = document.getElementById('copy-feedback-toast');
        if (!toast) {
            toast = document.createElement('div');
            toast.id = 'copy-feedback-toast';
            toast.className = 'copy-feedback-toast';
            document.body.appendChild(toast);
        }
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 2800);
    };

    const handleDiscordClick = (e) => {
        e.preventDefault();
        const username = socialLinks.discord || "";
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(username).then(() => {
                showCopyToast(`Discord username copied: ${username}`);
            }).catch(() => {
                showCopyToast(`Discord username: ${username}`);
            });
        } else {
            showCopyToast(`Discord username: ${username}`);
        }
    };

    const syncHeroSocials = () => {
        const heroSocialBtns = document.querySelectorAll('.hero-social-btn');
        heroSocialBtns.forEach(btn => {
            const platform = btn.getAttribute('data-platform');
            if (platform && socialLinks[platform]) {
                const url = socialLinks[platform];
                if (platform === 'email') {
                    btn.href = url;
                    btn.setAttribute('title', 'Email Me');
                    btn.setAttribute('aria-label', 'Email Me');
                    btn.removeAttribute('target');
                    btn.removeAttribute('rel');
                } else {
                    btn.href = url;
                    btn.setAttribute('target', '_blank');
                    btn.setAttribute('rel', 'noopener noreferrer');
                    btn.setAttribute('title', platform.charAt(0).toUpperCase() + platform.slice(1));
                    btn.setAttribute('aria-label', platform.charAt(0).toUpperCase() + platform.slice(1));
                    btn.onclick = null;
                }
            }
        });
    };

    const buildConnectSocials = () => {
        if (!connectSocialIconsContainer) return;

        connectSocialIconsContainer.innerHTML = Object.entries(socialLinks).map(([platform, url]) => {
            const isEmail = platform === 'email';
            const href = url;
            const targetAttr = isEmail ? '' : 'target="_blank" rel="noopener noreferrer"';
            let tooltipLabel = platform.toUpperCase();
            if (isEmail) tooltipLabel = "EMAIL ME";

            return `
                <a href="${href}" class="social-connect-link" data-platform="${platform}" ${targetAttr} aria-label="${isEmail ? 'Email Me' : platform}">
                    ${getSocialIconSVG(platform)}
                    <span class="tooltip-text">${tooltipLabel}</span>
                </a>
            `;
        }).join('');
    };

    syncHeroSocials();
    buildConnectSocials();

    /* --- 9. PROJECTS CASE STUDIES DETAILS MODAL DIALOG (IMAGE-FREE) --- */
    const projectModal = document.getElementById('project-details-modal');
    const modalCloseBtn = document.getElementById('modal-close');
    const modalContent = document.getElementById('modal-details-content');

    const openProjectModal = (projectId) => {
        const project = projectsData.find(p => p.id === projectId);
        if (!project) return;

        const padded = String(project.id).padStart(2, '0');
        const techChipsHTML = project.tech.map(t => `<span class="tech-chip">${t}</span>`).join('');
        const featuresHTML = project.features.map(f => `<li>${f}</li>`).join('');
        const hasDemo = Boolean(project.liveDemo && project.liveDemo !== '#' && !project.liveDemo.includes("PASTE_"));
        const hasGithub = Boolean(project.github && project.github !== '#' && !project.github.includes("PASTE_"));

        // Inject image-free case-study layout
        modalContent.innerHTML = `
            <div class="modal-header-hero">
                <div class="modal-header-top-row">
                    <span class="modal-num">PROJECT ${padded}</span>
                    ${project.logo ? `<img src="${project.logo}" alt="${project.title.split(' — ')[0]} logo" class="modal-project-logo" />` : ''}
                </div>
                <h3 class="modal-title">${project.title.split(' — ')[0]}</h3>
                <p class="modal-tagline">${project.tagline}</p>
            </div>

            <div class="modal-divider-line"></div>

            <div class="modal-meta-grid">
                <div class="meta-block-item">
                    <span class="meta-block-label">Timeline</span>
                    <span class="meta-block-value">${project.date}</span>
                </div>
                <div class="meta-block-item">
                    <span class="meta-block-label">Role</span>
                    <span class="meta-block-value">${project.role}</span>
                </div>
                <div class="meta-block-item">
                    <span class="meta-block-label">Association</span>
                    <span class="meta-block-value">${project.org}</span>
                </div>
            </div>

            <div class="modal-desc-section">
                <p class="modal-section-label">Overview</p>
                <p class="modal-desc-long">${project.desc}</p>
            </div>

            <div class="modal-features-section">
                <p class="modal-section-label">Key Features</p>
                <ul class="feature-list">${featuresHTML}</ul>
            </div>

            <div class="modal-tech-section">
                <p class="modal-section-label">Tech Stack</p>
                <div class="modal-tech-list">${techChipsHTML}</div>
            </div>

            <div class="modal-action-row">
                ${hasDemo ? `
                <a href="${project.liveDemo}" class="modal-btn-link modal-btn-primary" target="_blank" rel="noopener noreferrer">
                    Launch Live Demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:1rem;height:1rem;">
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                </a>` : ''}
                ${hasGithub ? `
                <a href="${project.github}" class="modal-btn-link modal-btn-secondary" target="_blank" rel="noopener noreferrer">
                    Source Code
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="width:1rem;height:1rem;">
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                </a>` : ''}
            </div>
        `;

        projectModal.showModal();
        document.body.classList.add('no-scroll');
    };

    // Attach listeners to dynamic cards
    const attachProjectRowListeners = () => {
        const cards = document.querySelectorAll('.project-card-refined');
        cards.forEach(card => {
            const projectId = card.getAttribute('data-project-id');
            card.addEventListener('click', (e) => {
                // If they clicked action buttons or links, let the browser handle navigation without opening modal
                if (e.target.closest('.proj-action-btn') || e.target.closest('.project-live-btn') || e.target.closest('a') || e.target.closest('button')) {
                    return;
                }
                openProjectModal(projectId);
            });
        });
    };

    attachProjectRowListeners();

    const closeProjectModal = () => {
        projectModal.close();
        document.body.classList.remove('no-scroll');
    };

    modalCloseBtn.addEventListener('click', closeProjectModal);
    projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) {
            closeProjectModal();
        }
    });

    /* --- 10. CERTIFICATIONS LIGHTBOX PREVIEWER --- */
    const certLightbox = document.getElementById('cert-lightbox-modal');
    const lightboxCloseBtn = document.getElementById('lightbox-close');
    const lightboxContent = document.getElementById('lightbox-content');
    const lightboxTitle = document.getElementById('lightbox-title-text');
    const lightboxIssuer = document.getElementById('lightbox-issuer-text');
    const lightboxOpenTab = document.getElementById('lightbox-open-tab');
    const lightboxDownload = document.getElementById('lightbox-download-btn');

    const openCertLightbox = (card) => {
        if (!card) return;
        const certName = card.getAttribute('data-title') || card.querySelector('.cert-card-title-text, .cert-card-title-new')?.textContent || 'Certificate Document';
        const certIssuer = card.getAttribute('data-issuer') || card.querySelector('.cert-card-issuer-text, .cert-card-issuer-new')?.textContent || 'Verified Credential';
        const filePath = card.getAttribute('data-file');
        const previewSrc = card.getAttribute('data-preview');

        if (lightboxTitle) lightboxTitle.textContent = certName;
        if (lightboxIssuer) lightboxIssuer.textContent = certIssuer;
        if (lightboxContent) lightboxContent.innerHTML = '';

        const targetSrc = filePath || previewSrc;

        if (targetSrc) {
            const cleanPath = targetSrc.split('?')[0];
            const fileExtension = cleanPath.split('.').pop().toLowerCase();
            const fileNameOnly = cleanPath.split('/').pop();

            if (lightboxOpenTab) {
                lightboxOpenTab.href = targetSrc;
                lightboxOpenTab.style.display = 'inline-flex';
            }
            if (lightboxDownload) {
                lightboxDownload.href = targetSrc;
                lightboxDownload.setAttribute('download', fileNameOnly || 'Certificate.pdf');
                lightboxDownload.style.display = 'inline-flex';
            }

            if (fileExtension === 'pdf') {
                lightboxContent.innerHTML = `<iframe src="${targetSrc}#toolbar=1" title="${certName} PDF Document"></iframe>`;
            } else {
                lightboxContent.innerHTML = `<img src="${targetSrc}" alt="${certName} Document" />`;
            }
        }

        certLightbox.showModal();
        document.body.classList.add('no-scroll');
    };

    const attachCertCardListeners = () => {
        const certCardsList = document.querySelectorAll('.cert-marquee-card, .cert-card-new');
        certCardsList.forEach(card => {
            card.addEventListener('click', () => openCertLightbox(card));
        });
    };

    attachCertCardListeners();

    const closeCertLightbox = () => {
        lightboxContent.innerHTML = '';
        certLightbox.close();
        document.body.classList.remove('no-scroll');
    };

    if (lightboxCloseBtn) lightboxCloseBtn.addEventListener('click', closeCertLightbox);
    certLightbox.addEventListener('click', (e) => {
        if (e.target === certLightbox) {
            closeCertLightbox();
        }
    });

    /* --- 11. ACTIVE NAVIGATION TRACKER & SCROLL REVEALS --- */
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    const mNavLinks = document.querySelectorAll('.mobile-nav-link');

    const activeSectionHighlights = () => {
        const scrollPosition = window.scrollY + 120;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });

                mNavLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${sectionId}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    };

    window.addEventListener('scroll', activeSectionHighlights);

    // ─── Scroll reveal system ────────────────────────────────────────────────
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.06,
        rootMargin: '0px 0px -50px 0px'
    });

    /**
     * Call this after ANY dynamic content is injected to ensure newly
     * added .scroll-trigger elements are picked up by the observer.
     */
    const observeScrollTriggers = () => {
        document.querySelectorAll('.scroll-trigger:not(.reveal)').forEach(el => {
            revealObserver.observe(el);
        });
    };

    observeScrollTriggers();

    // Expose so dynamic builders can call it after injection
    window._observeScrollTriggers = observeScrollTriggers;


    /* --- 12. CONTACT FORM CLIENT-SIDE VALIDATION --- */
    const contactForm = document.getElementById('contact-form');
    const successCard = document.getElementById('form-success-card');
    const successDismissBtn = document.getElementById('success-dismiss');

    const nameInput = document.getElementById('form-name');
    const emailInput = document.getElementById('form-email');
    const messageInput = document.getElementById('form-message');

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const validateInput = (input, errorElId, validationFn) => {
        const row = input.closest('.form-row');
        const isValid = validationFn(input.value.trim());

        if (isValid) {
            row.classList.remove('error');
        } else {
            row.classList.add('error');
        }
        return isValid;
    };

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const isNameValid = validateInput(nameInput, 'name-error', val => val.length > 0);
        const isEmailValid = validateInput(emailInput, 'email-error', val => emailRegex.test(val));
        const isMessageValid = validateInput(messageInput, 'message-error', val => val.length > 0);

        if (isNameValid && isEmailValid && isMessageValid) {
            successCard.classList.add('active');
            contactForm.reset();
            document.querySelectorAll('.form-row').forEach(row => row.classList.remove('error'));
        }
    });

    successDismissBtn.addEventListener('click', () => {
        successCard.classList.remove('active');
    });

    nameInput.addEventListener('input', () => {
        if (nameInput.value.trim().length > 0) {
            nameInput.closest('.form-row').classList.remove('error');
        }
    });

    emailInput.addEventListener('input', () => {
        if (emailRegex.test(emailInput.value.trim())) {
            emailInput.closest('.form-row').classList.remove('error');
        }
    });

    messageInput.addEventListener('input', () => {
        if (messageInput.value.trim().length > 0) {
            messageInput.closest('.form-row').classList.remove('error');
        }
    });
});

/* =========================================================
   CERTIFICATE CAROUSEL + EXISTING LIGHTBOX
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const track = document.getElementById("certificateTrack");

    if (!track) {
        console.warn("Certificate carousel track not found.");
        return;
    }

    /* ---------------------------------------------------------
       1. Infinite Carousel
       --------------------------------------------------------- */

    const originalCards = Array.from(
        track.querySelectorAll(".certificate-card")
    );

    if (originalCards.length > 0) {

        // Clone cards only once
        if (!track.dataset.cloned) {

            originalCards.forEach(card => {
                const clone = card.cloneNode(true);
                clone.classList.add("certificate-card-clone");
                track.appendChild(clone);
            });

            track.dataset.cloned = "true";
        }
    }


    /* ---------------------------------------------------------
       2. Existing Certificate Lightbox
       --------------------------------------------------------- */

    const lightbox = document.getElementById("cert-lightbox-modal");
    const lightboxTitle = document.getElementById("lightbox-title-text");
    const lightboxIssuer = document.getElementById("lightbox-issuer-text");
    const lightboxContent = document.getElementById("lightbox-content");
    const lightboxOpen = document.getElementById("lightbox-open-tab");
    const lightboxDownload = document.getElementById("lightbox-download-btn");
    const lightboxClose = document.getElementById("lightbox-close");

    if (
        !lightbox ||
        !lightboxTitle ||
        !lightboxIssuer ||
        !lightboxContent ||
        !lightboxOpen ||
        !lightboxDownload ||
        !lightboxClose
    ) {
        console.warn("Certificate lightbox elements not found.");
        return;
    }


    /* ---------------------------------------------------------
       Open Certificate
       --------------------------------------------------------- */

    function openCertificate(card) {

        const pdf = card.dataset.certificate;
        const title = card.dataset.title || "Certificate";
        const issuer = card.dataset.issuer || "Verified Credential";
        const year = card.dataset.year || "";

        if (!pdf) {
            console.warn("Certificate PDF path missing:", card);
            return;
        }

        /* Header */
        lightboxTitle.textContent = title;

        lightboxIssuer.textContent =
            year
                ? `${issuer} • ${year}`
                : issuer;


        /* PDF Viewer */
        lightboxContent.innerHTML = `
            <iframe
                src="${pdf}"
                class="certificate-pdf-viewer"
                title="${title}"
                loading="lazy">
            </iframe>
        `;


        /* Open in new tab */
        lightboxOpen.href = pdf;


        /* Download */
        lightboxDownload.href = pdf;


        /* Show modal */
        if (typeof lightbox.showModal === "function") {
            lightbox.showModal();
        } else {
            lightbox.setAttribute("open", "");
        }

        document.body.classList.add("certificate-lightbox-open");
    }


    /* ---------------------------------------------------------
       Card Click
       --------------------------------------------------------- */

    track.addEventListener("click", (event) => {

        const card = event.target.closest(".certificate-card");

        if (!card) return;

        event.preventDefault();

        openCertificate(card);
    });


    /* ---------------------------------------------------------
       Close Button
       --------------------------------------------------------- */

    lightboxClose.addEventListener("click", () => {

        lightbox.close();

    });


    /* ---------------------------------------------------------
       Close when clicking outside the modal content
       --------------------------------------------------------- */

    lightbox.addEventListener("click", (event) => {

        if (event.target === lightbox) {
            lightbox.close();
        }

    });


    /* ---------------------------------------------------------
       Cleanup after closing
       --------------------------------------------------------- */

    lightbox.addEventListener("close", () => {

        lightboxContent.innerHTML = "";

        document.body.classList.remove(
            "certificate-lightbox-open"
        );

    });


    /* ---------------------------------------------------------
       Pause carousel while lightbox is open
       --------------------------------------------------------- */

    lightbox.addEventListener("show", () => {
        track.style.animationPlayState = "paused";
    });

});
