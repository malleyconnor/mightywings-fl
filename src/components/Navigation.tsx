import Link from 'next/link';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import styles from '../styles/Navigation.module.css';

interface NavigationProps {
  isDarkMode: boolean;
  toggleTheme: () => void;
}

export default function Navigation({ isDarkMode, toggleTheme }: NavigationProps) {
  const router = useRouter();

  const navItems = [
    { href: '/menu', label: 'Menu' },
    { href: '/hours', label: 'Hours' },
    { href: '/contact', label: 'Contact' },
    { href: '/gallery', label: 'Gallery' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, label: string) => {
    // If we're on the homepage and clicking menu, hours, contact, or gallery, scroll to section instead
    if (router.pathname === '/' && (label === 'Menu' || label === 'Hours' || label === 'Contact' || label === 'Gallery')) {
      e.preventDefault();
      const sectionId = label.toLowerCase();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    // For regular navigation (different pages), let the Link handle it normally
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a className={styles.logo}>
            <img 
              src="/photos/mighty-wings-logo.png" 
              alt="Mighty Wings Logo" 
              className={styles.logoImage}
            />
            <h1 className={styles.title}>Mighty Wings</h1>
          </a>
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a 
                    className={`${styles.navLink} ${
                      router.pathname === item.href ? styles.active : ''
                    }`}
                    onClick={(e) => handleNavClick(e, item.href, item.label)}
                  >
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
