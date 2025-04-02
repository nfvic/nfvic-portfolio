
import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'blue' | 'red';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>('blue');

  useEffect(() => {
    // Check user preference
    const storedTheme = localStorage.getItem('theme') as Theme | null;
    
    if (storedTheme && (storedTheme === 'blue' || storedTheme === 'red')) {
      setThemeState(storedTheme);
    }
  }, []);

  useEffect(() => {
    // Update the document class when theme changes
    document.documentElement.classList.remove('theme-blue', 'theme-red');
    document.documentElement.classList.add(`theme-${theme}`);
    
    // Save to localStorage
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setThemeState(prev => prev === 'blue' ? 'red' : 'blue');
  };

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
