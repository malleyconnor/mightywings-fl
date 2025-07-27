import { ReactNode, useState, useEffect } from 'react';
import Navigation from './Navigation';
import styles from '../styles/AppLayout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // Default to dark mode if no preference is saved
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document and save preference
    document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={styles.container}>
      <Navigation isDarkMode={isDarkMode} toggleTheme={toggleTheme} />
      <main className={styles.main}>
        {children}
      </main>
      <footer className={styles.footer}>
        <p>&copy; 2024 Mighty Wings. All rights reserved.</p>
      </footer>
    </div>
  );
}
