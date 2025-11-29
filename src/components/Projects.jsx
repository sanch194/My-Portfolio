import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  // my featured projects
  const projects = [
    {
      title: "Daily Maji App",
      description: "A water delivery application bridging gaps between Nairobi's suburbs and resources. Built with Java, this app optimizes water delivery logistics and connects communities with essential resources.",
      github: "https://github.com/sanch194/Daily-Maji-App",
      technologies: ["Java", "Android", "Firebase"],
      featured: true,
    },
    {
      title: "Smart Hash Car Wash System",
      description: "An intelligent car wash management system that streamlines operations and enhances customer experience through automated scheduling and payment processing.",
      github: "https://github.com/sanch194/Smart_Hash_App_Car_wash_System",
      technologies: ["Java", "Android", "SQLite"],
      featured: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section className="projects-section" id="projects">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>
        <motion.p
          className="section-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of my recent projects that showcase my skills and passion for building impactful solutions.
        </motion.p>

        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}


