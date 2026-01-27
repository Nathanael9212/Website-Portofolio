'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState<string>('dark');

  useEffect(() => {
    // Get initial theme from localStorage or system preference
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <button 
      className="themeBtn" 
      id="themeToggle" 
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <span id="themeIcon">{theme === 'dark' ? '◑' : '◐'}</span>
      <small id="themeLabel">{theme.charAt(0).toUpperCase() + theme.slice(1)}</small>
    </button>
  );
}
