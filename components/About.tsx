"use client";

import { motion } from "framer-motion";
import { CheckCircle, Users, Award, BookOpen, TrendingUp } from "lucide-react";
import styles from "./About.module.css";

const highlights = [
  { icon: CheckCircle, text: "One-on-one personalised lesson plans" },
  { icon: BookOpen, text: "Past paper mastery and exam technique" },
  { icon: TrendingUp, text: "Data-driven progress tracking" },
  { icon: Users, text: "Flexible scheduling across time zones" },
];

const stats = [
  { number: "100+", label: "Students tutored across 5+ countries" },
  { number: "85%", label: "Achieved target grade or higher" },
  { number: "9+", label: "Years of teaching experience" },
  { number: "4.9", label: "Average rating from students" },
];

export default function About() {
  return (
    <section className={styles.section} id="about">
      <div className={styles.container}>
        <motion.div
          className={styles.grid}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.textCol}>
            <p className={styles.label}>About Me</p>
            <h2 className={styles.heading}>
              Teaching maths the way it should be taught.
            </h2>
            <p className={styles.paragraph}>
              I believe every student can excel in mathematics with the right
              guidance. My approach combines deep subject expertise with patience
              and clarity, breaking down even the most daunting topics into
              manageable, intuitive steps.
            </p>
            <p className={styles.paragraph}>
              With a degree in Mathematics and years of experience preparing
              students for IGCSE, GCSE, SAT and A-Level exams, I understand
              exactly what examiners look for and how to get you there.
            </p>

            <div className={styles.highlights}>
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  className={styles.highlight}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className={styles.highlightIcon}>
                    <item.icon size={18} />
                  </div>
                  <span className={styles.highlightText}>{item.text}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.statsCol}>
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                className={styles.statCard}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <span className={styles.statNumber}>{stat.number}</span>
                <span className={styles.statLabel}>{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
