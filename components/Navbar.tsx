"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#subjects", label: "Subjects" },
  { href: "#videos", label: "Videos" },
  { href: "#testimonials", label: "Results" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <a href="#" className={styles.logo}>
            Math<span className={styles.logoAccent}>Mentor</span>
          </a>

          <ul className={styles.links}>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className={styles.link}>
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a href="#contact" className={styles.cta}>
                Book a Session
              </a>
            </li>
          </ul>

          <button
            className={styles.mobileToggle}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      <div
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
      >
        <button
          className={styles.closeBtn}
          onClick={() => setMobileOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={styles.mobileLink}
            onClick={() => setMobileOpen(false)}
          >
            {link.label}
          </a>
        ))}
        <a
          href="#contact"
          className={styles.cta}
          onClick={() => setMobileOpen(false)}
        >
          Book a Session
        </a>
      </div>
    </>
  );
}
