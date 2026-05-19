"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, Star } from "lucide-react";
import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero} id="hero">
      <div className={styles.bgGrid} />
      <div className={styles.glowOrb} />
      <div className={styles.glowOrb2} />

      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Accepting New Students
          </div>

          <h1 className={styles.heading}>
            Master Maths,
            <br />
            <span className={styles.headingAccent}>Unlock Potential.</span>
          </h1>

          <p className={styles.description}>
            Personalised online tutoring for IGCSE, GCSE, SAT, A-Level and Secondary
            School Mathematics. I break down complex concepts into clear, intuitive
            steps so every student builds genuine confidence.
          </p>

          <div className={styles.actions}>
            <a href="#contact" className={styles.primaryBtn}>
              Start Learning
              <ArrowRight size={18} />
            </a>
            <a href="#videos" className={styles.secondaryBtn}>
              <Play size={18} />
              Watch Me Teach
            </a>
          </div>
        </motion.div>

        <motion.div
          className={styles.imageWrapper}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          <div className={styles.imageGlow} />
          <div className={styles.imageFrame}>
            <Image
              src="/images/Img2.jpeg"
              alt="Mathematics tutor portrait"
              width={380}
              height={460}
              priority
            />
            <p className={styles.name}>PEEKAY</p>           
          </div>
          <div className={styles.floatingCard}>
            <div className={styles.floatingIcon}>
              <Star size={20} />
            </div>
            <div className={styles.floatingText}>
              <span className={styles.floatingLabel}>Student Rating</span>
              <span className={styles.floatingValue}>4.9 / 5.0</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
