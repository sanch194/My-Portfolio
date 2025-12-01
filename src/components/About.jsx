import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="about-section" id="about">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {[
              { text: "Hello! I am a technologist and innovator shaped by discipline, and the conviction that solutions must serve humanity.", className: "about-intro" },
              { text: "Born in Addis Ababa, my journey began in a military college during COVID-19's peak, where I honed resilience, engineering fundamentals, and leadership under pressure. When uncertainty eased, I followed curiosity to Nairobi, trading combat drills for code, enrolling first at Daystar University, then USIU-Africa, where I now pursue Software Development." },
              { text: "My career is a tapestry of contrasts: optimizing supply chains for Matrix Resources' 20+ trucks across East Africa, installing GPS sensors at JAOSTEC, and kneeling on orphanage floors at New Life Trust, washing clothes for children who taught me patience." },
              { text: "At Lamu Port, I witnessed bureaucratic chokeholds crippling trade; in Naivasha, I absorbed peacekeeping strategies at the EASF conference, realizing stability demands both diplomacy and systems that empower." },
              { text: "These experiences converge in my work: a water delivery app bridging gaps between Nairobi's suburbs and resources, built with Java and grit. My grades may not dazzle, but my hands have calibrated sensors, scrubbed orphanage floors, and debugged algorithms all guided by a soldier's discipline and a humanitarian's heart." },
              { text: "I am Senaf Getachew Shiferaw: a bridge-builder between code and communities, driven by the belief that innovation's truest measure is not efficiency, but dignity.", className: "about closing" },
            ].map((paragraph, index) => (
              <motion.p
                key={index}
                className={paragraph.className || ""}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
              >
                {paragraph.text}
              </motion.p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
