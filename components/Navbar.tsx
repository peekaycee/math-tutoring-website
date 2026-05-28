"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

const navLinks = [
  { href: "/#about", label: "About" },
  { href: "/#subjects", label: "Exams" },
  // { href: "/plans", label: "Plans", external: true },
  { href: "/#videos", label: "Videos" },
  { href: "/#testimonials", label: "Results" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const toggleRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
  const handleClickOutside = (event: MouseEvent) => {
    const target = event.target as Node;

    if (
      mobileOpen &&
      menuRef.current &&
      !menuRef.current.contains(target) &&
      toggleRef.current &&
      !toggleRef.current.contains(target)
    ) {
      setMobileOpen(false);
    }
  };

  document.addEventListener("mousedown", handleClickOutside);

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [mobileOpen]);

  return (
    <>
      <nav className={`${styles.nav} ${scrolled ? styles.navScrolled : ""}`}>
        <div className={styles.container}>
          <a href="/" className={styles.logo}>
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
            <li className={styles.ctaContainer}>
              <a href="/plans" className={styles.cta}>
                View Plans
              </a>
              <a href="https://wa.me/2347088996255" className={styles.cta} target="_blank" rel="noopener noreferrer">
                Chat with me
              </a>
            </li>
          </ul>

          <button
            ref={toggleRef}
            className={styles.mobileToggle}
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      <div
        ref={menuRef}
        className={`${styles.mobileMenu} ${mobileOpen ? styles.mobileMenuOpen : ""}`}
      >
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
        <a
          href="/plans"
          className={styles.cta}
          onClick={() => setMobileOpen(false)}
        >
          View Plans
        </a>
      </div>
    </>
  );
}
