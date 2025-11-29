import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

export default function ProjectCard({
  title,
  description,
  github,
  technologies = [],
  featured = false,
}) {
  return (
    <motion.div
      className={`project-card ${featured ? "featured" : ""}`}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      whileHover={{ 
        y: -15, 
        scale: 1.02,
        transition: { duration: 0.3, type: "spring", stiffness: 400 }
      }}
    >
      <motion.div 
        className="project-header"
        whileHover={{ x: 5 }}
      >
        <motion.h3
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          {title}
        </motion.h3>
        {featured && (
          <motion.span 
            className="featured-badge"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
          >
            Featured
          </motion.span>
        )}
      </motion.div>
      <motion.p 
        className="project-description"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3 }}
      >
        {description}
      </motion.p>
      {technologies.length > 0 && (
        <motion.div 
          className="project-technologies"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {technologies.map((tech, index) => (
            <motion.span
              key={index}
              className="tech-tag"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 + index * 0.1, type: "spring", stiffness: 200 }}
              whileHover={{ scale: 1.1, y: -2 }}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>
      )}
      <motion.div 
        className="project-links"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
      >
        <motion.a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="project-link"
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaGithub /> View Code
        </motion.a>
      </motion.div>
    </motion.div>
  );
}
