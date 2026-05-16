import { Mail, Linkedin, Youtube } from "lucide-react";
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
          <a href="#about" className={styles.link}>About</a>
          <a href="#subjects" className={styles.link}>Subjects</a>
          <a href="#videos" className={styles.link}>Videos</a>
          <a href="#testimonials" className={styles.link}>Results</a>
          <a href="#contact" className={styles.link}>Contact</a>
        </nav>

        <div className={styles.socials}>
          <a
            href="#"
            className={styles.social}
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="#"
            className={styles.social}
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            className={styles.social}
            aria-label="YouTube"
          >
            <Youtube size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
