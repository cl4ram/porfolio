"use client"; 
import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import { getMessages } from "@/lib/getMessages";
import { Locale } from "@/lib/i18n";

export default function Header({ locale }: { locale: Locale }) {
  const t = getMessages(locale);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.stickyHeader}>
      <div className="container">
        <div className="grid">
          <nav className={`col-12 ${styles.menuBar}`}>
            <Link href="/" className={styles.logo}>
              <span>Clara</span>
              <span>Molina</span>
            </Link>

            <button 
              className={styles.hamburger} 
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Menu"
            >
              <span className={isOpen ? styles.lineOpen : ""}></span>
              <span className={isOpen ? styles.lineOpen : ""}></span>
              <span className={isOpen ? styles.lineOpen : ""}></span>
            </button>

            <div className={`${styles.navContent} ${isOpen ? styles.navOpen : ""}`}>
              <ul className={styles.menu}>
                <li onClick={() => setIsOpen(false)}>{t["header.process"]}</li>
                <li onClick={() => setIsOpen(false)}>{t["header.portfolio"]}</li>
                <li onClick={() => setIsOpen(false)}>{t["header.about"]}</li>
              </ul>
              <button className={styles.button}>{t["header.contact"]}</button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
