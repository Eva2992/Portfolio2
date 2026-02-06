import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Github, Linkedin, Mail, FileDown, Moon, Sun, Code, Briefcase, Award, GraduationCap, Sparkles } from "lucide-react";
import "./portfolio.css";

export default function Portfolio() {

  const words = ["Full Stack Developer", "Machaine Learning", "AI Enthuist" ];
  const [index, setIndex] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const _ = motion ;
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const skillSections = [
  {
    category: "Frontend Technologies",
    skills: [
      
      { name: "HTML & CSS", color: "#764ba2" },
      { name: "React", color: "#667eea" },
      { name: "JavaScript", color: "#f093fb" },
      { name: "TypeScript", color: "#4facfe" },
    ]
  },
  {
    category: "Backend Technologies",
    skills: [
      { name: "Node.js", color: "#43e97b" },
      { name: "Express.js", color: "#667eea" },
      { name: "NestJS", color: "#f5576c" },
    ]
  },
  {
    category: "Databases",
    skills: [
      { name: "MongoDB", color: "#38f9d7" },
      { name: "PostgreSQL", color: "#00f2fe" },
      { name: "SQL", color: "#4facfe" },
    ]
  },
  {
    category: "Programming Languages",
    skills: [
      { name: "C", color: "#f093fb" },
      
      { name: "C++", color: "#f5576c" },
      { name: "Java", color: "#764ba2" },
    ]
  },
  {
    category: "Core Concepts",
    skills: [
      { name: "OOP", color: "#667eea"  , },
      { name: "Data Structures & Algorithms", color: "#764ba2"  },
    
    ]
  } ,

 {
  category: "Vision Control",
    skills: [
      { name: "Git and Github", color: "#667eea"  , },
      
    
    ]
  }
];

  const projects = [
    {
  title: "Tour Management API & Platform",
  description: "Backend based tour management project with RESTful API . Implements advanced authentication with JWT and password reset,  complete CRUD operations, advanced filtering/sorting/pagination, Roll based authorization, MVC Structur and global error handling ",
  tech: ["Node.js", "Express", "MongoDB", "Mongoose", "JWT Auth", "JavaScript" , "MVC" ,"Restful API" , "CRUD"],
  link: "https://github.com/Eva2992/Tour-management--node-mongo-api--",
  gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
} ,
    {
  title: "API-Based Chatbot",
  description: "Interactive AI chatbot application with conversation. Implements and API (GEmini LLM) integration for real-time communication with message history, user authentication , JSON response.",
  tech: ["JavaScript",  "API Integration"],
  link: "https://github.com/Eva2992/API-Based-Chatbot",
  gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
} , 
    {
      title: "Simple E-commerce Frontend",
      description: "Beautiful e-commerce frontend with responsive design, product filtering, and shopping cart functionality.",
      tech: ["React", "Redux", "Tailwind CSS"],
      link: "https://github.com/Eva2992/Simple-E-commerce-UI-React-.git",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    }
  ];

  const certifications = [
    { name: "Responsive Web Design", issuer: "freeCodeCamp", year: "2024", link: "https://www.freecodecamp.org/certification/fateema1234/responsive-web-design", icon: <Award /> },
    { name: "Graph Search, Shortest Paths, and Data Structures", issuer: "Coursera", year: "2023", icon: <Award /> , link : "https://www.coursera.org/account/accomplishments/verify/HTR6Y2W2CLDJ" }
    
  ];

  const education = {
    degree: "Bachelor of Science in Computer Science and Engineering",
    university: "Jahangirnagar University",
    period: "3rd year 2nd semester (2023-present)",
    gpa: "3.75",
    
  };

  return (
    <div className="portfolio-root">
      {/* Navbar */}
      <header className="navbar">
        <nav className="nav-inner">
          <motion.span 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Fateema Binti Taher Eva
          </motion.span>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
            <a href="#contact">Contact</a>
            <motion.button 
              className="theme-toggle"
              onClick={() => setDarkMode(!darkMode)}
              whileHover={{ scale: 1.1, rotate: 180 }}
              whileTap={{ scale: 0.9 }}
            >
              <AnimatePresence mode="wait">
                {darkMode ? (
                  <motion.div
                    key="sun"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Sun size={20} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="moon"
                    initial={{ rotate: -180, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 180, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Moon size={20} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <motion.div className="hero-content">
          <motion.h5
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-title"
          >
            Hi, I'm <span className="gradient-text">Fateema Binti Taher Eva</span>
          </motion.h5>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="hero-subtitle-wrapper"
          >
            <AnimatePresence mode="wait">
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="hero-subtitle"
              >
                {words[index]}
              </motion.p>
            </AnimatePresence>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="hero-description"
          >
            Computer Science student at Jahangirnagar University ,  passionate about building optimized and
            scalable web applications . Focused on full-stack development 
            with a vision for AI integration in future projects.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="hero-cta"
          >
            <a href="#projects" className="cta-primary">View My Work</a>
            <a href="#contact" className="cta-secondary">Get In Touch</a>
          </motion.div>
        </motion.div>
        <div className="hero-background">
          <div className="blob blob-1"></div>
          <div className="blob blob-2"></div>
          <div className="blob blob-3"></div>
        </div>
      </section>

      {/* About Section */}
      <motion.section 
        id="about"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="about-section"
      >
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          
          <motion.div 
            className="about-card"
            whileHover={{ y: -10 }}
          >
            <Code className="about-icon" />
            <h3>Technical Expertise</h3>
            <p>
              Specialized in modern frontend frameworks, performance optimization, and creating 
              accessible user interfaces that scale.Proficient in full-stack web development with React, Node.js, TypeScript , javaScript and modern databases. 
             Strong foundation in C, C++, Java, with expertise in OOP principles and data structures & algorithms and Problem Solving. 

            </p>
          </motion.div>
          <motion.div 
            className="about-card"
            whileHover={{ y: -10 }}
          >
            <Sparkles className="about-icon" />
            <h3>Passion & Vision</h3>
           
              
               <p> 
                    Committed to continuous learning  industry trends, 
                    with a  passion for solving complex problems through elegant and  
                    efficient solutions. Vission for  Artificial Intelligence  and LLM .
               </p>

            
          </motion.div>
        </div>
      </motion.section>

      {/* Skills Section */}

<motion.section 
  id="skills" 
  className="skills-section"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>
  <h2 className="section-title">Technical Skills</h2>
  {skillSections.map((section) => (
    <div key={section.category} className="skill-category">
      <motion.h3 
        className="category-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        {section.category}
      </motion.h3>
      <div className="skills-tags-wrapper">
        {section.skills.map((skill, idx) => (
          <motion.span
            key={skill.name}
            className="skill-tag"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.05 }}
            whileHover={{ scale: 1.05 }}
            style={{ 
              backgroundColor: `${skill.color}15`,
              color: skill.color,
              borderColor: `${skill.color}30`
            }}
          >
            {skill.name}
          </motion.span>
        ))}
      </div>
    </div>
  ))}
</motion.section>

{/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="projects-section"
      >
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects that showcase my technical abilities and creative problem-solving.
        </p>
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header" style={{ background: project.gradient }}>
                <div className="project-overlay"></div>
              </div>
              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="project-tech">
                  {project.tech.map(tech => (
                    <span key={tech} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
                  View on GitHub <Github size={16} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Education Section */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="education-section"
      >
        <h2 className="section-title">Education</h2>
        <div className="education-card">
          <GraduationCap className="education-icon" />
          <div className="education-content">
            <h3>{education.degree}</h3>
            <p className="education-university">{education.university}</p>
            <p className="education-period">{education.period}</p>
            <p className="education-gpa">GPA: {education.gpa}</p>
            
          </div>
        </div>
      </motion.section>

      {/* Certifications Section */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="certifications-section"
      >
        <h2 className="section-title">Certifications</h2>
        <div className="certifications-grid">
          {certifications.map((cert, idx) => (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="cert-card-link"
            >
              <motion.div
                className="cert-card"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="cert-icon">{cert.icon}</div>
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
                <p className="cert-year">{cert.year}</p>
                <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
                  View Certificate
                </a>

              </motion.div>
            </motion.a>
          ))}
        </div>
      </motion.section>

      {/* Resume Download */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="resume-section"
      >
        <h2 className="section-title">Download My Resume</h2>
        <p className="section-text">
          Get the complete picture of my skills, experience, and accomplishments.
        </p>
        <motion.a
          href="https://docs.google.com/document/d/1tqGwrmD-quwyp9wQ65BNbP76a8nByoYarQXsr82FFKI/edit?usp=sharing"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FileDown size={20} /> Download Resume (PDF)
        </motion.a>
      </motion.section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="footer-content">
          <h3>Let's Connect</h3>
          <p>I'm always open to discussing new projects, creative ideas, or opportunities.</p>
          <div className="footer-icons">
            <motion.a 
              href="mailto:20220655009eva3@juniv.edu"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Mail />
            </motion.a>
            <motion.a 
              href="https://github.com/Eva2992"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Github />
            </motion.a>
            <motion.a 
              href="https://www.linkedin.com/in/fateema-binti-taher-eva-8a98462b7/"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <Linkedin />
            </motion.a>
          </div>
          <p className="footer-copyright">© {new Date().getFullYear()} Fateema Binti Taher Eva. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}