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
    { href: '/', label: 'Home' },
    { href: '/menu', label: 'Menu' },
    { href: '/hours', label: 'Hours' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <Link href="/">
          <a className={styles.logo}>
            <h1 className={styles.title}>🍗 Mighty Wings</h1>
          </a>
        </Link>
        
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>
                  <a className={`${styles.navLink} ${
                    router.pathname === item.href ? styles.active : ''
                  }`}>
                    {item.label}
                  </a>
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <button 
          className={styles.themeToggle}
          onClick={toggleTheme}
          aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
        >
          {isDarkMode ? '☀️' : '🌙'}
        </button>
      </div>
    </header>
  );
}
