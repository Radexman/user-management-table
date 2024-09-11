import { useState, useEffect } from 'react';
import { type ChangeEvent } from 'react';
import { type Theme } from './../types/theme.type';

export const useTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    return storedTheme || 'dark';
  });

  const handleToggle = (event: ChangeEvent<HTMLInputElement>) => {
    setTheme(event.target.checked ? 'dark' : 'light');
  };

  useEffect(() => {
    localStorage.setItem('theme', theme);

    document.querySelector('html')?.setAttribute('data-theme', theme);
  }, [theme]);

  return { theme, handleToggle };
};
