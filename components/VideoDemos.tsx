"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Clock, Eye, X, Star } from "lucide-react";
import styles from "./VideoDemos.module.css";

const videos = [
  {
    id: 1,
    title: "Solving Quadratic Equations: Complete Walkthrough",
    subject: "IGCSE / GCSE",
    duration: "12:34",
    views: "15.2K",
    symbol: "x\u00B2",
    featured: false,
  },
  {
    id: 2,
    title: "SAT Math: Data Analysis & Problem Solving Strategies",
    subject: "SAT Prep",
    duration: "18:07",
    views: "9.8K",
    symbol: "\u03C3",
    featured: false,
  },
  {
    id: 3,
    title: "Integration by Parts: A-Level Pure Mathematics",
    subject: "A-Level",
    duration: "22:15",
    views: "12.1K",
    symbol: "\u222B",
    featured: false,
  },
  {
    id: 4,
    title: "From Zero to Confident: How I Teach Trigonometry",
    subject: "All Levels",
    duration: "28:40",
    views: "23.5K",
    symbol: "\u03B8",
    featured: true,
    desc: "A full-length demonstration of my teaching approach. Watch how I take a complex topic like trigonometry and break it into intuitive, step-by-step explanations that any student can follow.",
  },
];

export default function VideoDemos() {
  const [activeVideo, setActiveVideo] = useState<number | null>(null);

  const featured = videos.find((v) => v.featured);
  const regular = videos.filter((v) => !v.featured);

  return (
    <section className={styles.section} id="videos">
      <div className={styles.container}>
        <motion.div
          className={styles.header}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <p className={styles.label}>Watch Me Teach</p>
          <h2 className={styles.heading}>See the method in action.</h2>
          <p className={styles.subheading}>
            Preview my teaching style before booking. These clips show exactly
            how I break down complex topics into clear, manageable steps.
          </p>
        </motion.div>

        <div className={styles.grid}>
          {/* Featured video */}
          {featured && (
            <motion.div
              className={`${styles.videoCard} ${styles.featured}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div
                className={styles.thumbnail}
                onClick={() => setActiveVideo(featured.id)}
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${featured.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveVideo(featured.id); }}
              >
                <div className={styles.thumbnailBg}>
                  <span className={styles.mathSymbol}>{featured.symbol}</span>
                </div>
                <div className={styles.thumbnailOverlay}>
                  <div className={styles.playBtn}>
                    <Play size={28} />
                  </div>
                </div>
              </div>
              <div className={styles.featuredContent}>
                <div className={styles.featuredBadge}>
                  <Star size={12} />
                  Most Popular
                </div>
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
                <p className={styles.featuredDesc}>{featured.desc}</p>
                <button
                  className={styles.watchBtn}
                  onClick={() => setActiveVideo(featured.id)}
                >
                  <Play size={16} />
                  Watch Full Video
                </button>
              </div>
            </motion.div>
          )}

          {/* Regular videos */}
          {regular.map((video, i) => (
            <motion.div
              key={video.id}
              className={styles.videoCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div
                className={styles.thumbnail}
                onClick={() => setActiveVideo(video.id)}
                role="button"
                tabIndex={0}
                aria-label={`Play video: ${video.title}`}
                onKeyDown={(e) => { if (e.key === 'Enter') setActiveVideo(video.id); }}
              >
                <div className={styles.thumbnailBg}>
                  <span className={styles.mathSymbol}>{video.symbol}</span>
                </div>
                <div className={styles.thumbnailOverlay}>
                  <div className={styles.playBtn}>
                    <Play size={24} />
                  </div>
                </div>
              </div>
              <div className={styles.videoInfo}>
                <h3 className={styles.videoTitle}>{video.title}</h3>
                <div className={styles.videoMeta}>
                  <span className={styles.metaItem}>
                    <Clock size={13} />
                    {video.duration}
                  </span>
                  <span className={styles.metaItem}>
                    <Eye size={13} />
                    {video.views}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo !== null && (
          <motion.div
            className={styles.modal}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <div
              className={styles.modalBackdrop}
              onClick={() => setActiveVideo(null)}
            />
            <motion.div
              className={styles.modalContent}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <button
                className={styles.modalClose}
                onClick={() => setActiveVideo(null)}
                aria-label="Close video"
              >
                <X size={24} />
              </button>
              <div className={styles.modalPlaceholder}>
                <Play size={48} />
                <p>
                  {videos.find((v) => v.id === activeVideo)?.title}
                </p>
                <span>Replace with your video embed URL</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
