"use client";

import { motion } from "framer-motion";
import { Send, Shield, Clock, Zap } from "lucide-react";
import styles from "./Contact.module.css";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.glow} />
      <motion.div
        className={styles.container}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
      >
        <p className={styles.label}>Get Started</p>
        <h2 className={styles.heading}>
          Ready to <span className={styles.headingAccent}>transform</span> your
          maths?
        </h2>
        <p className={styles.description}>
          Book a free 15-minute consultation to discuss your goals, current level,
          and how I can help you achieve the grades you deserve.
        </p>

        <form
          className={styles.form}
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div className={styles.inputRow}>
            <input
              type="text"
              placeholder="Your Name"
              className={styles.input}
              required
              aria-label="Your name"
            />
            <input
              type="email"
              placeholder="Email Address"
              className={styles.input}
              required
              aria-label="Email address"
            />
          </div>
          <div className={styles.inputRow}>
            <select className={styles.select} aria-label="Select subject" defaultValue="">
              <option value="" disabled>
                Select Subject
              </option>
              <option>IGCSE Mathematics</option>
              <option>GCSE Mathematics</option>
              <option>SAT Mathematics</option>
              <option>A-Level Mathematics</option>
            </select>
            <select className={styles.select} aria-label="Select your level" defaultValue="">
              <option value="" disabled>
                Current Level
              </option>
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
              <option>Exam Preparation</option>
            </select>
          </div>
          <textarea
            placeholder="Tell me about your goals and any specific topics you need help with..."
            className={styles.textarea}
            aria-label="Your message"
          />
          <button type="submit" className={styles.submitBtn}>
            <Send size={18} />
            Book Free Consultation
          </button>
        </form>

        <div className={styles.trust}>
          <span className={styles.trustItem}>
            <Shield size={14} className={styles.trustIcon} />
            No obligation
          </span>
          <span className={styles.trustItem}>
            <Clock size={14} className={styles.trustIcon} />
            Reply within 24 hours
          </span>
          <span className={styles.trustItem}>
            <Zap size={14} className={styles.trustIcon} />
            First session free
          </span>
        </div>
      </motion.div>
    </section>
  );
}
