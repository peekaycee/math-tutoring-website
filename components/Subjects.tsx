"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Subjects.module.css";

const subjects = [
  {
    title: "IGCSE Mathematics",
    icon: "IG",
    iconClass: "iconIgcse",
    desc: "Cambridge International IGCSE covering Core and Extended syllabi. Rigorous preparation with focus on problem-solving and exam technique.",
    topics: ["Algebra", "Geometry", "Statistics", "Functions", "Trigonometry"],
  },
  {
    title: "GCSE Mathematics",
    icon: "GC",
    iconClass: "iconGcse",
    desc: "Complete AQA, Edexcel, and OCR coverage for both Foundation and Higher tier, ensuring strong fundamentals and top marks.",
    topics: ["Number", "Ratio", "Probability", "Graphs", "Vectors"],
  },
  {
    title: "SAT Mathematics",
    icon: "SA",
    iconClass: "iconSat",
    desc: "Strategic preparation for the Digital SAT Math section. Master both calculator and no-calculator problems with proven techniques.",
    topics: ["Heart of Algebra", "Passport to Advanced", "Problem Solving", "Data Analysis"],
  },
  {
    title: "A-Level Mathematics",
    icon: "AL",
    iconClass: "iconAlevel",
    desc: "In-depth A-Level coverage across Pure Maths, Statistics and Mechanics modules for all major UK exam boards.",
    topics: ["Calculus", "Mechanics", "Statistics", "Further Pure", "Proof"],
  },
];

export default function Subjects() {
  return (
    <section className={styles.section} id="subjects">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.label}>Subjects</p>
          <h2 className={styles.heading}>Every exam, every syllabus.</h2>
          <p className={styles.subheading}>
            Tailored preparation for the world&apos;s most recognised mathematics
            qualifications. Choose your exam and let&apos;s get started.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {subjects.map((subject, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={styles.cardGlow} />
              <div className={`${styles.iconWrap} ${styles[subject.iconClass]}`}>
                {subject.icon}
              </div>
              <h3 className={styles.cardTitle}>{subject.title}</h3>
              <p className={styles.cardDesc}>{subject.desc}</p>
              <div className={styles.topics}>
                {subject.topics.map((topic) => (
                  <span key={topic} className={styles.topic}>
                    {topic}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.ctaContainer}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <a href="/plans" className={styles.ctaLink}>
            Find the Perfect Plan for You
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
