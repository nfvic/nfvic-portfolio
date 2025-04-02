
import React from 'react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button
      onClick={toggleTheme}
      className={cn(
        'w-12 h-6 rounded-full p-1 transition-colors duration-300 focus:outline-none',
        theme === 'blue' 
          ? 'bg-blue-500/30 hover:bg-blue-500/40' 
          : 'bg-red-500/30 hover:bg-red-500/40'
      )}
      aria-label="Toggle theme"
    >
      <div
        className={cn(
          'w-4 h-4 rounded-full transition-transform duration-300 flex items-center justify-center',
          theme === 'blue' 
            ? 'transform translate-x-0 bg-blue-500' 
            : 'transform translate-x-6 bg-red-500'
        )}
      >
        <span className="w-2 h-2 bg-background rounded-full"></span>
      </div>
    </button>
  );
};

export default ThemeToggle;
