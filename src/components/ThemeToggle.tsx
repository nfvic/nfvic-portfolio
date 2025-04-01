
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { Moon, Sun } from 'lucide-react';
import { cn } from '@/lib/utils';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'w-12 h-6 rounded-full p-1 transition-colors duration-200 focus:outline-none',
        theme === 'dark' ? 'bg-accent' : 'bg-accent'
      )}
      aria-label="Toggle theme"
    >
      <div
        className={cn(
          'w-4 h-4 rounded-full transition-transform duration-200 flex items-center justify-center',
          theme === 'dark' 
            ? 'transform translate-x-6 bg-background' 
            : 'transform translate-x-0 bg-background'
        )}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-accent" />
        ) : (
          <Sun className="w-3 h-3 text-accent" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
