import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload } from "react-icons/fa";
import profile from "/profile.png";
import FloatingParticles from "./FloatingParticles";

export default function Hero() {
  // smooth scroll to sections
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // animation variants - tweaked these a bit to feel more natural
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  // image entrance animation
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.85, rotate: -8 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.9,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  };

  return (
    <section className="hero-section" id="home">
      <FloatingParticles />
      <div className="hero-container">
        <motion.div
          className="hero-text"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            className="hero-greeting"
            variants={itemVariants}
            whileHover={{ scale: 1.05, x: 10 }}
          >
            Hello, I'm
          </motion.p>
          <motion.h1 variants={itemVariants}>
            <span className="name-highlight">
              Senaf Getachew Shiferaw
            </span>
          </motion.h1>
          <motion.p
            className="hero-subtitle"
            variants={itemVariants}
            whileHover={{ scale: 1.02 }}
          >
            React Developer | Tech Professional | Innovator
          </motion.p>
          <motion.p
            className="hero-description"
            variants={itemVariants}
          >
            Building innovative solutions that bridge code and communities, 
            driven by the belief that technology should serve humanity with dignity.
          </motion.p>

          <motion.div
            className="hero-buttons"
            variants={itemVariants}
          >
            <motion.button
              className="btn btn-primary"
              onClick={() => scrollToSection("contact")}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Get In Touch</span>
            </motion.button>
            <motion.a
              href="/docs/Portfolio.pdf"
              download
              className="btn btn-secondary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FaDownload /> Download Resume
            </motion.a>
          </motion.div>

          <motion.div
            className="hero-social"
            variants={itemVariants}
          >
            {/* social links - keeping it simple */}
            <motion.a
              href="https://github.com/sanch194"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/senaf-getachew"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaLinkedin />
            </motion.a>
            <motion.a
              href="mailto:senaf.getachew@example.com"
              aria-label="Email"
              whileHover={{ scale: 1.15, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <FaEnvelope />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* profile image - removed border for cleaner look */}
        <motion.div
          className="hero-image"
          variants={imageVariants}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.03 }}
          transition={{ type: "spring", stiffness: 100 }}
        >
          <div className="image-wrapper">
            <motion.img
              src={profile}
              alt="Senaf Getachew Shiferaw"
              whileHover={{ scale: 1.04 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <div className="image-glow"></div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
        onClick={() => scrollToSection("about")}
        whileHover={{ scale: 1.2 }}
      >
        <motion.span
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}

