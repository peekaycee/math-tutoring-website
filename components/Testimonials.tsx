"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import styles from "./Testimonials.module.css";

const testimonials = [
  {
    name: "Sarah M.",
    detail: "A-Level Student, UK",
    initials: "SM",
    avatarClass: "avatar1",
    stars: 5,
    text: "I went from a D to an A* in my A-Level Maths. The way concepts were broken down made everything click. I genuinely enjoy maths now, which I never thought I would say.",
  },
  {
    name: "James K.",
    detail: "Parent of GCSE Student",
    initials: "JK",
    avatarClass: "avatar2",
    stars: 5,
    text: "My son's confidence has completely transformed. He used to dread maths homework and now he actually looks forward to his tutoring sessions. The progress has been remarkable.",
  },
  {
    name: "Priya R.",
    detail: "SAT Student, Dubai",
    initials: "PR",
    avatarClass: "avatar3",
    stars: 5,
    text: "Scored 780 on SAT Math after just two months of sessions. The strategies and shortcuts taught here are incredibly effective. Worth every penny.",
  },
  {
    name: "Tom W.",
    detail: "IGCSE Student, Singapore",
    initials: "TW",
    avatarClass: "avatar4",
    stars: 5,
    text: "The online sessions felt even more productive than in-person tutoring. The screen sharing and digital whiteboard made explanations crystal clear.",
  },
  {
    name: "Elena G.",
    detail: "Parent of A-Level Student",
    initials: "EG",
    avatarClass: "avatar5",
    stars: 5,
    text: "What sets this tutor apart is the genuine care for each student. The personalised approach and flexible scheduling made all the difference for our family.",
  },
  {
    name: "Ahmed H.",
    detail: "GCSE Student, London",
    initials: "AH",
    avatarClass: "avatar6",
    stars: 5,
    text: "I was struggling with algebra and geometry but the step-by-step approach helped me understand the logic behind each formula. Got a grade 9 in the end!",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.section} id="testimonials">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.label}>Student Results</p>
          <h2 className={styles.heading}>
            Real stories, real transformations.
          </h2>
        </motion.div>

        <div className={styles.grid}>
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className={styles.card}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <div className={styles.stars}>
                {Array.from({ length: t.stars }).map((_, j) => (
                  <Star key={j} size={14} fill="currentColor" />
                ))}
              </div>
              <p className={styles.quote}>{`"${t.text}"`}</p>
              <div className={styles.author}>
                <div className={`${styles.avatar} ${styles[t.avatarClass]}`}>
                  {t.initials}
                </div>
                <div className={styles.authorInfo}>
                  <span className={styles.authorName}>{t.name}</span>
                  <span className={styles.authorDetail}>{t.detail}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
