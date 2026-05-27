import { Facebook, Linkedin, Youtube, MessageCircle } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.left}>
          <a href="#" className={styles.logo}>
            Math<span className={styles.logoAccent}>Mentor</span>
          </a>
          <span className={styles.copyright}>
            &copy; {new Date().getFullYear()} MathMentor. All rights reserved.
          </span>
        </div>

        <nav className={styles.links}>
          <a href="/#about" className={styles.link}>About</a>
          <a href="/#subjects" className={styles.link}>Exams</a>
          <a href="/#videos" className={styles.link}>Videos</a>
          <a href="/#testimonials" className={styles.link}>Results</a>
          <a href="/#contact" className={styles.link}>Contact</a>
        </nav>

        <div className={styles.socials}>
          <a
            href="https://wa.me/2347088996255"
            className={styles.social}
            aria-label="WhatsApp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={16} />
          </a>
          <a
            href="https://www.facebook.com/mathmentor"
            className={styles.social}
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Facebook size={16} />
          </a>
          <a
            href="https://www.linkedin.com/school/mathmentor/"
            className={styles.social}
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://www.youtube.com/c/MathMentor"
            className={styles.social}
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
