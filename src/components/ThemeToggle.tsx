
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
        'w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none',
        theme === 'dark' 
          ? 'bg-primary/30 hover:bg-primary/40' 
          : 'bg-primary/20 hover:bg-primary/30'
      )}
      aria-label="Toggle theme"
    >
      <div
        className={cn(
          'w-4 h-4 rounded-full transition-transform duration-300 flex items-center justify-center',
          theme === 'dark' 
            ? 'transform translate-x-6 bg-primary' 
            : 'transform translate-x-0 bg-primary'
        )}
      >
        {theme === 'dark' ? (
          <Moon className="w-3 h-3 text-background" />
        ) : (
          <Sun className="w-3 h-3 text-background" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;
